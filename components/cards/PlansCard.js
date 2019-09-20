import React from "react";
import styled from "styled-components";
const PlanCard = ({ exp, bal, interest }) => {
  return (
    <Card>
      <Expiration>2021</Expiration>
      <Details>
        <Balance>
          <LTitle>Balance</LTitle>
          <Figure>600,000</Figure>
        </Balance>
        <Interest>
          <LTitle>Interest</LTitle>
          <IFigure>11.5%</IFigure>
        </Interest>
      </Details>
    </Card>
  );
};

const Card = styled.View`
  height: 120px;
  background: white;
  width: 300px;
  margin-left: 5px;
  margin-right: 15px;
  border-radius: 10px;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
`;
const Expiration = styled.Text`
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
`;

const LTitle = styled.Text`
  color: blue;
  font-size: 12px;
`;
const IFigure = styled.Text`
  color: green;
`;

const Figure = styled.Text``;
const Details = styled.View`
  padding: 5px;
  flex-direction: row;
  align-items: baseline;
  margin-top: 10px;
  flex: 1;
  align-items: flex-end;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-width: 0.5px;
`;

const Balance = styled.View`
  width: 50%;
  justify-content: flex-end;
`;

const Interest = styled.View`
  width: 50%;

  align-items: flex-end;
`;

export default PlanCard;
