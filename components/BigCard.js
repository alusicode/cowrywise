import React from "react";
import styled from "styled-components";
const CardThree = () => {
  return (
    <Container>
      <Title>STAY AHEAD</Title>
      <Card></Card>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Title = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

const Card = styled.View`
  height: 200px;
  background: #7f7fd5;
  border-radius: 10px;
`;
export default CardThree;
