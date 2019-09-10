import React from "react";
import styled from "styled-components";
const CardTwo = () => {
  return <Card></Card>;
};

const Card = styled.View`
  height: 120px;
  background: white;
  width: 300px;
  margin-left: 5px;
  margin-right: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.Text`
  color: red;
`;

export default CardTwo;
