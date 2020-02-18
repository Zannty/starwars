import React from "react";
import ItemDetails, { Record } from "./../ItemDetails/ItemDetails";
import { WithSwapiService } from "./../HocHelpers/WithSwapiService";
import DidCatch from "../DidCatch/DidCatch";
const StarshipDetails = props => {
  return (
    <DidCatch>
      <ItemDetails {...props}>
        <Record field="model" label="Model:" />
        <Record field="manufacturer" label="Manufacturer:" />
        <Record field="costInCredits" label="Cost in credits:" />
        <Record field="length" label="Length:" />
        <Record field="crew" label="Crew:" />
        <Record field="passangers" label="Passangers:" />
        <Record field="maxSpeed" label="Max speed:" />
      </ItemDetails>
    </DidCatch>
  );
};
const mapMethodToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImage: swapiService.getStarshipImage
  };
};
export default WithSwapiService(mapMethodToProps)(StarshipDetails);
