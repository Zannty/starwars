import React from "react";
import { SwapiServiceConsumer } from "./../SwapiServiceContext/SwapiServiceContext";

export const WithSwapiService = mapMethodsToProps => Wrapped => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};
