import React, { Component } from "react";
import styled from "styled-components";

class Stash extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Title>Hello stash</Title>
      </Container>
    );
  }
}
const Container = styled.View`
  flex: 1;
  align-items: center;
`;
const Title = styled.Text``;
export default Stash;
