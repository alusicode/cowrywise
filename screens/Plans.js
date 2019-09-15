import React, { Component, useState } from "react";
import styled from "styled-components";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Plans = ({ navigation }) => {
  const [activeId, setActive] = useState(1);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header style={styles.bbtm}>
          <Title>Plans</Title>
        </Header>

        <SwitchNav>
          <TouchableOpacity
            onPress={() => setActive(1)}
            style={[styles.tab, activeId == 1 ? styles.switchBg : " "]}
          >
            <Button style={{ color: activeId == 1 ? "white" : "#0165fc" }}>
              My Savings
            </Button>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive(2)}
            style={[styles.tab, activeId == 2 ? styles.switchBg : " "]}
          >
            <Button style={{ color: activeId == 2 ? "white" : "#0165fc" }}>
              My Investments
            </Button>
          </TouchableOpacity>
        </SwitchNav>
        <ScrollView style={{ width: "100%" }}>
          {activeId == 1 ? (
            <TabTwo>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </TabTwo>
          ) : (
            <TabOne>
              <Card></Card>
            </TabOne>
          )}
        </ScrollView>
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

const Button = styled.Text`
  padding: 5px 10px;
  text-align: center;
  color: ${(props) => (props.on ? "white" : "red")};
`;

const SwitchNav = styled.View`
  border: 1px solid blue;
  width: 100%;
  flex-direction: row;
  width: 90%;
  margin: 20px auto;
  border-radius: 5px;
`;

const Card = styled.View`
  height: 120px;
  background: white;
  width: 90%;
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
`;

const TabOne = styled.View``;

const TabTwo = styled.View``;
