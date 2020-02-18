import React from "react";
import "./RandomPlanet.css";
import SwapiServise from "./../../services/SwapiService";
import LoadIcon from "./../LoadIcon/LoadIcon";
import ErrorLoad from "./../ErrorLoad/ErrorLoad";
import PropTypes from "prop-types";

class RandomPlanet extends React.Component {
  static defaultProps = {
    updateInterval: 8000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  SwapiServise = new SwapiServise();

  state = {
    planet: {},
    loading: true,
    error: false
  };
  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onLoadPlanet = planet => {
    this.setState({ planet, loading: false });
  };
  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 20 + 2);
    this.SwapiServise.getPlanet(id)
      .then(this.onLoadPlanet)
      .catch(this.onError);
  };

  render() {
    const { loading, planet, error } = this.state;
    const hasData = !(loading || error);
    const errorLoad = error ? <ErrorLoad /> : null;
    const load = loading ? <LoadIcon /> : null;
    const content = hasData ? <RandomPlanetView planet={planet} /> : null;
    return (
      <div className="jumbotron main-random-planet load">
        {errorLoad}
        {load}
        {content}
      </div>
    );
  }
}

const RandomPlanetView = ({ planet }) => {
  const {
    id,
    name,
    population,
    rotationPeriod,
    diameter,
    terrain,
    climate
  } = planet;
  return (
    <React.Fragment>
      {" "}
      <img
        className="planet-img"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="err img"
      />
      <ul className="list-group-flush">
        <li className="list-group-item">
          <h2 className="name-random-planet">{name}</h2>
        </li>
        <li className="list-group-item">
          <span className="item-group">Population:</span>
          <span>{population}</span>
        </li>
        <li className="list-group-item">
          <span className="item-group">Climate:</span>
          <span>{climate}</span>
        </li>
        <li className="list-group-item">
          <span className="item-group">Terrain:</span>
          <span>{terrain}</span>
        </li>
        <li className="list-group-item">
          <span className="item-group">Rotatiom Period:</span>
          <span>{rotationPeriod}</span>
        </li>
        <li className="list-group-item">
          <span className="item-group">Diameter: </span>
          <span>{diameter}</span>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default RandomPlanet;
