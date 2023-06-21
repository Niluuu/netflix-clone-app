import React from "react";
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import tw from "twrnc";

const Header = ({ title }) => {
  return (
    <View
      style={tw`p-4 max-w-fit min-h-fit bg-black sticky top-0`}
      animHeaderValue={0}
    >
      <View style={tw`flex-row justify-between content-center`}>
        <View>
          {!title ? (
            <Image
              source={require("../assets/netflix-logo.png")}
              style={{
                width: 40,
                height: 40,
                backfaceVisibility: "hidden",
              }}
            />
          ) : (
            <Text style={tw`text-white`}>{title}</Text>
          )}
        </View>
        <View style={tw`flex-row justify-between content-center items-center`}>
          <Icon name="search1" size={25} style={tw`pr-6`} color="#fff" />
          <Image
            source={require("../assets/ava.jpg")}
            style={{ width: 25, height: 25, borderRadius: 5 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
