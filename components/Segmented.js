import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
const SegmentedControl = () => {
  const [activeId, setActive] = useState(1);
  return (
    <View style={{ flex: 1, width: "100%" }}>
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
    </View>
  );
};

export default SegmentedControl;

const styles = StyleSheet.create({
  bbtm: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  switchBg: {
    backgroundColor: "#0165fc",
  },
  tab: {},
});

const Button = styled.Text`
  padding: 5px 10px;
  text-align: center;
  color: ${(props) => (props.on ? "white" : "red")};
`;

const SwitchNav = styled.View`
  border: 1px solid blue;

  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;

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
