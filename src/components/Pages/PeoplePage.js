import React from "react";
import Row from "./../Row/Row";
import { PersonList } from "./../sw-components/Lists";
import PersonDetails from "./../sw-components/PersonDetails";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <Row
      left={<PersonList selectedItemInfo={id => history.push(id)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};
export default withRouter(PeoplePage);
