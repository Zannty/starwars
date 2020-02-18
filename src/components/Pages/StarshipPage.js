import React from "react";
import { StarshipList } from "./../sw-components/Lists";
import { withRouter } from "react-router-dom";

const StarshipPage = ({ history }) => {
  return (
    <StarshipList
      selectedItemInfo={itemId => {
        history.push(itemId);
      }}
    />
  );
};

export default withRouter(StarshipPage);
