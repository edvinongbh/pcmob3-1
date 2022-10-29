import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BlockRGB from "./components/BlockRGB";

function HomeScreen({ navigation }) {
  const [colorArray, setColorArray] = useState([
    { red: 255, green: 0, blue: 0, id: "0" },
  ]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <BlockRGB red={item.red} green={item.green} blue={item.blue} />
      </TouchableOpacity>
    );
  }

  function addColor() {
    setColorArray([
      {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255),
        id: colorArray.length.toString(),
      },
      ...colorArray,
    ]);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={addColor}
        style={{ height: 40, justifyContent: "center" }}
      >
        <Text>Add Color</Text>
      </TouchableOpacity>

      <FlatList
        data={colorArray}
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
    </View>
  );
}

function DetailsScreen() {
  return <Text>Details Screen</Text>;
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
