import React from "react";
import tw from "twrnc";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconFont from "react-native-vector-icons/FontAwesome";

const Movies = {
  title: "Trends now",
  movies: [
    { id: "1", imagePath: require("../assets/movie-1.jpg") },
    { id: "2", imagePath: require("../assets/movie-2.jpg") },
    { id: "3", imagePath: require("../assets/movie-1.jpg") },
    { id: "4", imagePath: require("../assets/movie-2.jpg") },
  ],
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`bg-black`}>
      <ScrollView>
        {/* Banner */}
        <View style={tw`max-w-fit h-96 relative`}>
          <View style={tw`w-full`}>
            <ImageBackground
              source={require("../assets/banner.jpg")}
              style={{
                resizeMode: "cover",
                alignSelf: "flex-start",
                width: "100%",
                height: "100%",
                aspectRatio: 6 / 3,
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
        <View style={tw`w-full h-full`}>
          <View style={tw`mb-8`}>
            {Movies ? (
              <Text style={tw`text-white font-bold text-lg`}>
                {Movies.title}
              </Text>
            ) : null}
            <FlatList
              data={Movies.movies}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  key={item.id}
                  style={tw`rounded pl-1`}
                  onPress={() => {
                    navigation.navigate("DetailsScreen", {
                      itemId: item.id,
                    });
                  }}
                >
                  <ImageBackground
                    source={item.imagePath}
                    style={{
                      resizeMode: "cover",
                      alignSelf: "flex-start",
                      width: 140,
                      height: 200,
                      overflow: "hidden",
                    }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={tw`h-full`}>
            {Movies ? (
              <Text style={tw`text-white font-bold text-lg`}>Popular</Text>
            ) : null}
            <FlatList
              data={Movies.movies}
              horizontal
              renderItem={({ item }) => (
                <View key={item.id} style={tw`rounded pl-1`}>
                  <ImageBackground
                    source={item.imagePath}
                    style={{
                      resizeMode: "cover",
                      alignSelf: "flex-start",
                      width: 140,
                      height: 200,
                      overflow: "hidden",
                    }}
                  />
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
