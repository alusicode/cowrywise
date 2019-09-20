import React, { Component } from "react";
import styled from "styled-components";
import { SafeAreaView, StyleSheet } from "react-native";
import SegmentedControl from "../components/Segmented";

const Transactions = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header style={styles.bbtm}>
          <Title>Transactions</Title>
        </Header>
        <SegmentedControl />
      </Container>
    </SafeAreaView>
  );
};

Transactions.navigationOptions = {
  header: null,
};

export default Transactions;

const Header = styled.View`
  padding: 25px 10px 0;
  width: 100%;
  color: #000;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #f8f8ff;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 36px;
`;

const styles = StyleSheet.create({
  bbtm: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  switchBg: {
    backgroundColor: "#0165fc",
  },
  tab: {
    width: "50%",
  },
});
