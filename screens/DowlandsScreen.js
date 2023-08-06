import React, { useState } from "react";
import tw from "twrnc";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import { Tab, TabView, Dialog } from "@rneui/themed";
import Icon from "react-native-vector-icons/AntDesign";
import IconFont from "react-native-vector-icons/FontAwesome";

export default function DowlandsScreen() {
  const [index, setIndex] = React.useState(0);
 

  return (
    <View
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <View style={tw`pb-4 bg-black`}>
        <Image
          source={require("../assets/banner.jpg")}
          style={{
            resizeMode: "cover",
            width: "100%",
            height: 300,
          }}
        />
        <Text style={tw`text-white text-4xl font-bold py-4`}>{movie.name}</Text>
        <View style={tw`flex flex-row pb-2`}>
          <Text style={tw`text-stone-300 px-2 `}>{movie.year}</Text>
          <Text style={tw`text-stone-300 px-2 mx-2 bg-stone-700`}>
            {movie.age}+
          </Text>
          <Text style={tw`text-stone-300 px-2 uppercase`}>
            {movie.seasons} seasons
          </Text>
        </View>
        <View>
          <Text style={tw`text-white py-4`}>{movie.description}</Text>
        </View>

        <View style={tw`flex flex-row py-4`}>
          <TouchableOpacity
            style={tw`flex flex-col justify-beetween content-center items-center px-1 mx-4`}
          >
            <Icon name="plus" size={25} style={tw`m-auto`} color="#fff" />
            <Text style={tw`text-white`}>Wish list</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex flex-col justify-beetween content-center items-center px-1 mx-4`}
          >
            <IconFont
              name="thumbs-o-up"
              size={25}
              style={tw`m-auto`}
              color="#fff"
            />
            <Text style={tw`text-white`}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex flex-col justify-beetween content-center items-center px-1 mx-4`}
          >
            <Icon name="sharealt" size={25} style={tw`m-auto`} color="#fff" />
            <Text style={tw`text-white`}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex flex-col justify-beetween content-center items-center px-1 mx-4`}
          >
            <Icon name="download" size={25} style={tw`m-auto`} color="#fff" />
            <Text style={tw`text-white`}>Dowland</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
