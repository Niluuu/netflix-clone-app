import React, { useEffect, useRef } from "react";
import tw from "twrnc";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/AntDesign";
import IconFont from "react-native-vector-icons/FontAwesome";
import { movieCategories } from "../utils/testMovie";

const HomeScreen = ({ navigation }) => {
  const video = useRef(null);

  useEffect(() => {
    if (video.current) {
      video.current.playAsync();
    }
  }, []);

  return (
    <SafeAreaView style={tw`bg-black`}>
      <ScrollView
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
      >
        {/* Banner */}
        <View style={tw`max-w-fit h-96 relative`}>
          <View style={tw`w-full`}>
            <Video
              ref={video}
              style={styles.video}
              source={require("../assets/video.mp4")}
              rate={1.0}
              volume={1.0}
              isMuted
              resizeMode="cover"
              shouldPlay={false}
            />
            <View
              style={tw`flex-row justify-center items-center content-center absolute bottom-0 left-0 px-6 py-2  w-full`}
            >
              <TouchableOpacity
                style={tw`flex flex-col justify-beetween content-center items-center px-1 mx-4`}
              >
                <Icon name="plus" size={25} style={tw`m-auto`} color="#fff" />
                <Text style={tw`text-white`}>Wish list</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DetailsScreen");
                }}
                style={tw`flex flex-row justify-beetween content-center items-center px-4 py-2 mx-4 bg-white rounded`}
              >
                <IconFont name="play" size={18} style={tw`pr-2`} color="#000" />
                <Text style={tw`text-black`}>Watch now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`flex flex-col justify-beetween content-center items-center px-1 mx-4`}
              >
                <Icon
                  name="exclamationcircleo"
                  size={25}
                  style={tw`m-auto`}
                  color="#fff"
                />
                <Text style={tw`text-white`}>Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Layout */}
        <View style={tw`w-full h-full`}>
          <View style={tw`mb-8`}>
            {movieCategories ? (
              <Text style={tw`text-white font-bold text-lg`}>
                {movieCategories.title}
              </Text>
            ) : null}
            <FlatList
              data={movieCategories.movies}
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
            {movieCategories ? (
              <Text style={tw`text-white font-bold text-lg`}>Popular</Text>
            ) : null}
            <FlatList
              data={movieCategories.movies}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "170%",
    height: 380,
  },
});

export default HomeScreen;
