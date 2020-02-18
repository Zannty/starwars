import React from "react";
import ItemDetails, { Record } from "./../ItemDetails/ItemDetails";
import { WithSwapiService } from "./../HocHelpers/WithSwapiService";
import DidCatch from "../DidCatch/DidCatch";

const PersonDetails = props => {
  return (
    <DidCatch>
      <ItemDetails {...props}>
        <Record field="gender" label="Gender:" />
        <Record field="brithYear" label="Brith Year:" />
        <Record field="height" label="Height:" />
        <Record field="mass" label="Mass:" />
        <Record field="skinColor" label="Skin Color:" />
      </ItemDetails>
    </DidCatch>
  );
};
const mapMethodToProps = swapiService => {
  return {
    getData: swapiService.getPeople,
    getImage: swapiService.getPersonImage
  };
};
export default WithSwapiService(mapMethodToProps)(PersonDetails);
