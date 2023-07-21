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
  const movie = {
    name: "Wednesday",
    year: "2020",
    age: "18",
    seasons: 4,
    description:
      "Wednesday is an American coming-of-age supernatural mystery comedy horror television series based on the character Wednesday Addams",
    episodes: [
      {
        name: "Some episode name",
        id: "someid",
        min: 57,
        video: "url",
        description:
          "Wednesday is an American coming-of-age supernatural mystery comedy horror television series based on the character Wednesday Addams",
      },
      {
        name: "2 Some episode name longer than first one ",
        min: 47,
        id: "2someid",
        video: "url",
        description:
          "Wednesday is an American coming-of-age supernatural mystery comedy horror television series based on the character Wednesday Addams",
      },
    ],
    similar: [
      { id: "1", imagePath: require("../assets/movie-1.jpg") },
      { id: "2", imagePath: require("../assets/movie-2.jpg") },
      { id: "3", imagePath: require("../assets/movie-1.jpg") },
      { id: "4", imagePath: require("../assets/movie-2.jpg") },
    ],
  };

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
            <Text style={tw`text-white`}>Wish list</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex flex-col justify-beetween content-center items-center px-1 mx-4`}
          >
            <Icon name="sharealt" size={25} style={tw`m-auto`} color="#fff" />
            <Text style={tw`text-white`}>Wish list</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex flex-col justify-beetween content-center items-center px-1 mx-4`}
          >
            <Icon name="download" size={25} style={tw`m-auto`} color="#fff" />
            <Text style={tw`text-white`}>Wish list</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Tab
        value={index}
        onChange={setIndex}
        titleStyle={{ color: "white" }}
        indicatorStyle={{
          backgroundColor: "rgb(220 38 38)",
          height: 4,
          position: "absolute",
          top: 0,
        }}
      >
        <Tab.Item>Episode</Tab.Item>
        <Tab.Item containerStyle={{ whiteSpace: "nowrap" }}>Thrillers</Tab.Item>
        <Tab.Item>Similar</Tab.Item>
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item
          style={{ backgroundColor: "red", width: "100%", height: "50%" }}
        >
          <Text style={tw`text-white`}>Wish list</Text>
        </TabView.Item>
        <TabView.Item
          style={{ backgroundColor: "red", width: "100%", height: "50%" }}
        >
          <Text style={tw`text-white`}>Favorite</Text>
        </TabView.Item>
        <TabView.Item
          style={{ backgroundColor: "blue", width: "100%", height: "50%" }}
        >
          <Text style={tw`text-white`}>more</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
}
