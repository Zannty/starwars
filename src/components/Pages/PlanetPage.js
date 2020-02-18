import React from "react";
import Row from "./../Row/Row";
import { PlanetList } from "./../sw-components/Lists";
import PlanetDetails from "./../sw-components/PlanetDetails";

class PlanetPage extends React.Component {
  state = {
    selectedItem: null
  };
  selectedItemInfo = selectedItem => {
    this.setState({ selectedItem });
  };
  render() {
    return (
      <Row
        left={<PlanetList selectedItemInfo={this.selectedItemInfo} />}
        right={<PlanetDetails itemId={this.state.selectedItem} />}
      />
    );
  }
}
export default PlanetPage;
