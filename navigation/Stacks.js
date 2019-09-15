import { createStackNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import React from "react";
import Stash from "../screens/Stash";
import Plans from "../screens/Plans";
import Transactions from "../screens/Transactions";
import Actions from "../screens/Actions";
import { red } from "ansi-colors";

export const HomeStack = createStackNavigator({
  Home: Home,
});
HomeStack.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    // You can return any component that you like here!
    return <Ionicons name="ios-home" size={25} color={tintColor} />;
  },
};

export const PlansStack = createStackNavigator({
  Plans: Plans,
});
PlansStack.navigationOptions = {
  header: null,
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    // You can return any component that you like here!
    return <Ionicons name="logo-buffer" size={25} color={tintColor} />;
  },
};

export const ActionsStack = createStackNavigator({
  Actions: Actions,
});
ActionsStack.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    // You can return any component that you like here!
    return <Ionicons name="ios-flash" size={25} color={tintColor} />;
  },
};

export const TransactionsStack = createStackNavigator({
  Transactions: Transactions,
});
TransactionsStack.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    // You can return any component that you like here!
    return <Ionicons name="ios-paper" size={25} color={tintColor} />;
  },
};
export const StashStack = createStackNavigator({
  Stash: Stash,
});
StashStack.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    // You can return any component that you like here!
    return <Ionicons name="ios-wallet" size={25} color={tintColor} />;
  },
};
