import React from "react";
import styled from "styled-components";
const HeadCard = () => {
  return (
    <Card>
      <Title>TOTAL BALANCE</Title>
      <Balance>750,000</Balance>
    </Card>
  );
};

const Card = styled.View`
  height: 150px;
  background: #0165fc;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  padding: 5px;
  color: rgba(255, 255, 255, 0.5);
`;

const Balance = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export default HeadCard;
