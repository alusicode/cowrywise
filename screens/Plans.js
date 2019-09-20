import React, { Component, useState } from "react";
import styled from "styled-components";
import { SafeAreaView, StyleSheet } from "react-native";
import SegmentedControl from "../components/Segmented";

const Plans = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header style={styles.bbtm}>
          <Title>Plans</Title>
        </Header>
        <SegmentedControl />
      </Container>
    </SafeAreaView>
  );
};

Plans.navigationOptions = {
  header: null,
};

export default Plans;

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
