import React from "react";
import ItemDetails, { Record } from "./../ItemDetails/ItemDetails";
import { WithSwapiService } from "./../HocHelpers/WithSwapiService";
import DidCatch from "../DidCatch/DidCatch";
const PlanetDetails = props => {
  return (
    <DidCatch>
      <ItemDetails {...props}>
        <Record field="population" label="Population:" />
        <Record field="rotationPeriod" label="Rotation Period:" />
        <Record field="diameter" label="Diameter:" />
        <Record field="climate" label="Climate:" />
        <Record field="terrain" label="Terrain:" />
      </ItemDetails>
    </DidCatch>
  );
};
const mapMethodToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImage: swapiService.getPlanetImage
  };
};
export default WithSwapiService(mapMethodToProps)(PlanetDetails);
