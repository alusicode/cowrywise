import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import {
  PlansStack,
  HomeStack,
  ActionsStack,
  TransactionsStack,
  StashStack,
} from "./Stacks";
import Stash from "../screens/Stash";
import Plans from "../screens/Plans";
import Transactions from "../screens/Transactions";
import Actions from "../screens/Actions";

const tabNavigator = createBottomTabNavigator({
  Home: HomeStack,

  Plans: PlansStack,

  Actions: ActionsStack,
  Transactions: TransactionsStack,
  Stash: StashStack,
});

export default tabNavigator;
