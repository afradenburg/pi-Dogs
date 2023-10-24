import React from "react";
import { Card } from "./card";
import { CardContainer } from "../styled/cardContainer.Styled";

export const Cards = ({ allDogs }) => {
  let dogList = [];

  if (Array.isArray(allDogs)) {
    dogList = allDogs;
  } else if (typeof allDogs === "object") {
    dogList = [allDogs];
  }
  
  return (
    <CardContainer>
      {dogList.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </CardContainer>
  );
};
