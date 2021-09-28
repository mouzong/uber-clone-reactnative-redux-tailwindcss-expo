import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const menu = [
  {
    id: "1",
    title: "Get a ride",
    image: require("../assets/ride.png"),
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Order food",
    image: require("../assets/eat.png"),
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={menu}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-60 rounded shadow-sm`}
        >
          <View>
            <Image
              source={item.image}
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
