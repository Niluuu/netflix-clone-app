import React, { Component } from "react";
import {
  Button,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconFont from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";

const MOVIES = [
  { id: "1223", imagePath: "../assets/movie-1.jpg" },
  { id: "322", imagePath: "../assets/movie-2.jpg" },
];

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={tw`relative bg-black`}>
        {/* Header */}
        <View style={tw`p-4 max-w-fit min-h-fit bg-black`}>
          <View style={tw`flex-row justify-between content-center`}>
            <View>
              <Image
                source={require("../assets/netflix-logo.png")}
                style={{ width: 40, height: 40, backfaceVisibility: "hidden" }}
              />
            </View>
            <View
              style={tw`flex-row justify-between content-center items-center`}
            >
              <Icon name="search1" size={25} style={tw`pr-6`} color="#fff" />
              <Image
                source={require("../assets/ava.jpg")}
                style={{ width: 25, height: 25, borderRadius: 5 }}
              />
            </View>
          </View>
        </View>

        {/* Banner */}
        <View style={tw`max-w-fit h-96 relative`}>
          <View style={tw`w-full`}>
            <ImageBackground
              source={require("../assets/banner.jpg")}
              style={{
                resizeMode: "cover",
                alignSelf: 'flex-start',
                width: "100%",
                height: "100%",
                aspectRatio: 6/3
              }}
            />
            <View
              style={tw`flex-row justify-center items-center content-center absolute bottom-0 left-0 px-6 py-2  w-full`}
            >
              <View
                style={tw`flex flex-col justify-beetween content-center items-center px-1 mx-4`}
              >
                <Icon name="plus" size={25} style={tw`m-auto`} color="#fff" />
                <Text style={tw`text-white`}>Wish list</Text>
              </View>
              <TouchableOpacity
                style={tw`flex flex-row justify-beetween content-center items-center px-4 py-2 mx-4 bg-white rounded`}
              >
                <IconFont name="play" size={18} style={tw`pr-2`} color="#000" />
                <Text style={tw`text-black`}>Watch now</Text>
              </TouchableOpacity>
              <View
                style={tw`flex flex-col justify-beetween content-center items-center px-1 mx-4`}
              >
                <Icon
                  name="exclamationcircleo"
                  size={25}
                  style={tw`m-auto`}
                  color="#fff"
                />
                <Text style={tw`text-white`}>Wish list</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Layout */}
        <View style={tw`bg-red-600`}>
          <FlatList
            data={MOVIES}
            renderItem={(movie) => (
              <TouchableHighlight key={movie.id}>
                <View style={{ backgroundColor: "white" }}>
                  <Text>{movie.id}</Text>
                </View>
              </TouchableHighlight>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
