import React from "react";
import "./App.css";
import Header from "./../Header/Header";
import DidCatch from "../DidCatch/DidCatch";
import SwapiService from "./../../services/SwapiService";
import FakeSwapiService from "./../../services/FakeSwapiService";
import ErrorButton from "../ErrorButton/ErrorButton";
import RandomPlanet from "./../RandomPlanet/RandomPlanet";
import { SwapiServiceProvider } from "./../SwapiServiceContext/SwapiServiceContext";
import PeoplePage from "../Pages/PeoplePage";
import PlanetPage from "../Pages/PlanetPage";
import StarshipPage from "../Pages/StarshipPage";
import StarshipDetails from "./../sw-components/StarshipDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SecretPage from "../Pages/SecretPage";
import LoginPage from "../Pages/LoginPage";
class App extends React.Component {
  state = {
    isLoggedIn: false,
    swapiService: new SwapiService()
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const service =
        swapiService instanceof SwapiService ? FakeSwapiService : SwapiService;
      return {
        swapiService: new service()
      };
    });
  };
  render() {
    return (
      <DidCatch>
        <SwapiServiceProvider value={this.state.swapiService}>
          <BrowserRouter>
            <Header onServiceChange={this.onServiceChange} />
            <ErrorButton />
            <RandomPlanet />
            <Switch>
              <Route
                path="/"
                exact={true}
                render={() => (
                  <h2>
                    Click on the menu above to get the information you need.
                  </h2>
                )}
              />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets/" component={PlanetPage} />
              <Route path="/starships/" exact={true} component={StarshipPage} />
              <Route
                path="/starships/:id"
                render={({ match }) => (
                  <StarshipDetails itemId={match.params.id} />
                )}
              />
              <Route
                path="/login"
                render={() => (
                  <LoginPage
                    isLoggedIn={this.state.isLoggedIn}
                    onLogin={this.onLogin}
                  />
                )}
              />
              <Route
                path="/secret"
                render={() => <SecretPage isLoggedIn={this.state.isLoggedIn} />}
              />

              <Route render={() => <h2>Page not found</h2>} />
            </Switch>
          </BrowserRouter>
        </SwapiServiceProvider>
      </DidCatch>
    );
  }
}
export default App;
