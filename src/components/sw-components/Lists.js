import React from "react";
import { WithData } from "./../HocHelpers/WithData";
import { WithSwapiService } from "./../HocHelpers/WithSwapiService";
import ItemList from "../ItemList/ItemList";
import { Compose } from "./../HocHelpers/Compose";
import { WithChildFunction } from "./../HocHelpers/WithChildFunction";

const renderPerson = ({ name }) => (
  <span>
    <img src="https://img.icons8.com/ios/30/000000/shaven-face.png" alt=" " />
    &nbsp;{name}
  </span>
);
const renderPlanet = ({ name }) => (
  <span>
    <img
      src="https://img.icons8.com/pastel-glyph/30/000000/planet.png"
      alt=" "
    />
    &nbsp;{name}
  </span>
);
const renderStarship = ({ name }) => (
  <span>
    <img src="https://img.icons8.com/ios/30/000000/space-fighter.png" alt=" " />
    &nbsp;{name}
  </span>
);
const mapMethodPersonToProps = swapiService => {
  return { getData: swapiService.getAllPeople };
};
const mapMethodPlanetToProps = swapiService => {
  return { getData: swapiService.getAllPlanets };
};
const mapMethodStarshipToProps = swapiService => {
  return { getData: swapiService.getAllStarship };
};

export const PersonList = Compose(
  WithSwapiService(mapMethodPersonToProps),
  WithData,
  WithChildFunction(renderPerson)
)(ItemList);

export const PlanetList = Compose(
  WithSwapiService(mapMethodPlanetToProps),
  WithData,
  WithChildFunction(renderPlanet)
)(ItemList);

export const StarshipList = Compose(
  WithSwapiService(mapMethodStarshipToProps),
  WithData,
  WithChildFunction(renderStarship)
)(ItemList);
