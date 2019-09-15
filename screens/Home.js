import React, { Component } from "react";
import styled from "styled-components";
import AppIntroSlider from "react-native-app-intro-slider";
import { HeadCard, CardThree, PlanCard } from "../components";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {};
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <Container>
            <Header>
              <Avatar source={require("../assets/images/morty.png")}></Avatar>
              <Name>Hi, Uchechukwu</Name>
            </Header>
            <HeadCard />
            <ScrollContainer>
              <Title>PLANS</Title>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                indicatorStyle="black"
              >
                <PlanCard />
                <PlanCard />
              </ScrollView>
            </ScrollContainer>

            <CardThree />
            <CardThree />
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  Scroll: {
    width: "100%",
    backgroundColor: "red",
    height: 100,
  },
});

const Header = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  flex-direction: row;
`;

const Avatar = styled.Image`
  height: 44px;
  width: 44;
  border-radius: 22px;
  position: absolute;
  background-color: #0165fc;
`;

const Name = styled.Text`
  margin-left: 50px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px;
  background-color: #f8f8ff;
`;

const Title = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

const ScrollContainer = styled.View`
  width: 100%;
  /* background-color: red; */

  height: 160px;
  margin-bottom: 5px;
`;
export default Home;
