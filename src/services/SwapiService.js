export default class SwapiService {
  _baseUrl = "https://swapi.co/api";
  _imageBase = "https://starwars-visualguide.com/assets/img/";
  getRequest = async url => {
    const response = await fetch(`${this._baseUrl}${url}`);
    if (!response.ok) {
      throw new Error(`Could not ${this._baseUrl}${url},
         received ${response.status}`);
    }
    const body = await response.json();
    return body;
  };

  getPersonImage = ({ id }) => {
    return `${this._imageBase}characters/${id}.jpg`;
  };
  getStarshipImage = ({ id }) => {
    return `${this._imageBase}starships/${id}.jpg`;
  };
  getPlanetImage = ({ id }) => {
    return `${this._imageBase}planets/${id}.jpg`;
  };

  getAllPeople = async () => {
    const response = await this.getRequest(`/people/`);
    return response.results.map(this._transformPeople);
  };
  getAllPlanets = async () => {
    const response = await this.getRequest(`/planets/`);
    return response.results.map(this._transformPlanet);
  };
  getAllStarship = async () => {
    const response = await this.getRequest(`/starships/`);
    return response.results.map(this._transformStarship);
  };
  getPeople = async id => {
    const people = await this.getRequest(`/people/${id}`);
    return this._transformPeople(people);
  };
  getPlanet = async id => {
    const planet = await this.getRequest(`/planets/${id}`);
    return this._transformPlanet(planet);
  };
  getStarship = async id => {
    const starship = await this.getRequest(`/starships/${id}`);
    return this._transformStarship(starship);
  };

  _takeId = item => {
    const exId = /\/([0-9]*)\/$/;
    return item.url.match(exId)[1];
  };
  _transformPlanet = planet => {
    return {
      id: this._takeId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      climate: planet.climate,
      terrain: planet.terrain
    };
  };
  _transformStarship = starship => {
    return {
      id: this._takeId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passangers: starship.passengers,
      maxSpeed: starship.max_atmosphering_speed
    };
  };
  _transformPeople = people => {
    return {
      id: this._takeId(people),
      name: people.name,
      brithYear: people.birth_year,
      gender: people.gender,
      height: people.height,
      mass: people.mass,
      skinColor: people.skin_color
    };
  };
}
