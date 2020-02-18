export default class FakeSwapiService {
  getAllPeople = async () => {
    return this._people;
  };

  getAllStarship = async () => {
    return this._starships;
  };

  getAllPlanets = async () => {
    return this._planets;
  };
  getPeople = async () => {
    return this._people[2];
  };
  getPlanet = async () => {
    return this._planets[0];
  };

  getStarship = async () => {
    return this._starships[0];
  };

  getPersonImage = () => {
    return `https://img.tsn.ua/cached/1533895987/tsn-ec97a3c0a2ace5bfabc1ed73666af320/thumbs/1200x630/5b/28/42060f7aca16ed8e5ac0cffdf1e4285b.jpg`;
  };

  getStarshipImage = () => {
    return `https://мадам-брошкина.рф/upload/iblock/44d/korablik_niteks_2211.jpg`;
  };

  getPlanetImage = () => {
    return `https://avatanplus.com/files/resources/mid/56e53dc8f28081536f795921.png`;
  };
  _people = [
    {
      id: 1,
      name: "Alex",
      brithYear: "23.3.888",
      gender: "m",
      height: "134",
      mass: "80",
      skinColor: "green"
    },

    {
      id: 2,
      name: "Sant",
      brithYear: "22.13.8448",
      gender: "f",
      height: "184",
      mass: "80",
      skinColor: "black"
    },
    {
      id: 3,
      name: "Beer",
      brithYear: "23.04.1516",
      gender: "s",
      height: "40",
      mass: "unknown",
      skinColor: "dark"
    }
  ];

  _planets = [
    {
      id: 4,
      name: "Unknown",
      population: "0",
      rotationPeriod: "24",
      diameter: "1.300.000",
      climate: "hot",
      terrain: "unknown"
    },
    {
      id: 5,
      name: "SsS",
      population: "999999999999",
      rotationPeriod: "54",
      diameter: "3213",
      climate: "unknown",
      terrain: "unknown"
    }
  ];

  _starships = [
    {
      id: 6,
      name: "Niva",
      model: "Niva",
      manufacturer: "Chevrolet",
      costInCredits: "999999999999999",
      length: "3919",
      crew: "Bernie Ecclestone",
      passangers: "5",
      maxSpeed: "480"
    }
  ];
}
