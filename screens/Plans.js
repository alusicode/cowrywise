import React, { Component } from "react";
import styled from "styled-components";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { red, white } from "ansi-colors";

class Plans extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    activeTab: false
  };

  toggle = () => {
    this.setState({
      activeTab: !this.state.activeTab
    });
  };

  state = {};
  render() {
    const aT = this.state.activeTab;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Header style={styles.bbtm}>
            <Title>Plans</Title>
          </Header>

          <SwitchNav>
            <TouchableOpacity
              onPress={this.toggle}
              style={[styles.tab, aT ? " " : styles.switchBg]}
            >
              <Button>My Savings</Button>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.toggle}
              style={[styles.tab, aT ? styles.switchBg : ""]}
            >
              <Button>My Investments</Button>
            </TouchableOpacity>
          </SwitchNav>
          <ScrollView style={{ width: "100%" }}>
            {this.state.activeTab ? (
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
  }
}

const styles = StyleSheet.create({
  bbtm: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)"
  },
  switchBg: {
    backgroundColor: "#0165fc"
  },
  tab: {
    width: "50%"
  }
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
  color: white;
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
export default Plans;
