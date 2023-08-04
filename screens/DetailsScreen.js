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
  StyleSheet,
} from "react-native";
import { Dialog } from "@rneui/themed";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/AntDesign";
import IconFont from "react-native-vector-icons/FontAwesome";
import Tab from "../theme/components/Tab";

const movie = {
  name: "Wednesday",
  year: "2020",
  age: "18",
  seasons: 4,
  description:
    "Wednesday is an American coming-of-age supernatural mystery comedy horror television series based on the character Wednesday Addams by Charles Addams. Created by Alfred Gough and Miles Millar, it stars Jenna Ortega as the titular character, with Gwendoline Christie, Riki Lindhome, Jamie McShane, Hunter Doohan, Percy Hynes White, Emma Myers, Joy Sunday, Georgie Farmer, Naomi J. Ogawa, Christina Ricci, and Moosa Mostafa appearing in supporting roles. Four out of the eight episodes are directed by Tim Burton, who also serves as executive producer. It revolves around Wednesday Addams, who attempts to solve a murder mystery at her new school.",
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

export default function DetailsScreen({ route, navigation }) {
  const [index, setIndex] = useState(0);
  const [dialog, setDialog] = useState(false);
  const video = React.useRef(null);

  const toggleDialog = () => setDialog(!dialog);

  const seasonsList = new Array(4);

  return (
    <SafeAreaView style={tw`bg-black`}>
      <ScrollView
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
      >
        <View style={tw`pb-4`}>
          <Video
            ref={video}
            style={styles.video}
            source={require("../assets/video.mp4")}
            useNativeControls
            resizeMode="contain"
            isLooping
            audioPan
          />
          <Text style={tw`text-white text-4xl font-bold py-4`}>
            {movie.name}
          </Text>
          <View style={tw`flex flex-row pb-2`}>
            <Text style={tw`text-stone-300 px-2 `}>{movie.year}</Text>
            <Text style={tw`text-stone-300 px-2 mx-2 bg-stone-700`}>
              {movie.age}+
            </Text>
            <Text style={tw`text-stone-300 px-2 uppercase`}>
              {movie.seasons} seasons
            </Text>
          </View>
        </View>
        <TouchableOpacity
          // onPress={() => navigation.goBack()}
          activeOpacity={0.6}
          style={tw`flex flex-row justify-center items-center bg-white py-2 rounded my-2`}
        >
          <IconFont name="play" size={20} style={tw`mx-2`} color="#000" />
          <Text onPress={navigation.navigate("DetailsScreen")}>Watch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          // onPress={() => navigation.goBack()}
          style={tw`flex flex-row justify-center items-center bg-stone-800 py-2 rounded`}
        >
          <Icon name="download" size={20} style={tw`mx-2`} color="#fff" />
          <Text style={tw`text-white`}>Dowland</Text>
        </TouchableOpacity>
        <View>
          <Text style={tw`text-white py-4`}>{movie.description}</Text>
        </View>

        {/* Actions */}
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

        {/* Tab */}
        {/* TODO: Fix tab view */}
        <Tab />

        <View>
          <TouchableOpacity
            onPress={toggleDialog}
            activeOpacity={0.3}
            style={tw`py-2 rounded w-26 flex flex-row justify-center items-center`}
          >
            <Text style={tw`text-white`}>1 Season</Text>
          </TouchableOpacity>

          <Dialog
            isVisible={dialog}
            onBackdropPress={toggleDialog}
            overlayStyle={{ backgroundColor: "transperent" }}
          >
            <FlatList
              data={seasonsList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  key={item}
                  style={tw`rounded pl-1 m-auto`}
                  onPressOut={toggleDialog}
                >
                  <Text style={tw`text-white text-2xl font-bold py-2`}>
                    {item} seasons
                  </Text>
                </TouchableOpacity>
              )}
            />
          </Dialog>
          <FlatList
            data={movie.episodes}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.6}
                key={item.id}
                style={tw`rounded py-4 flex flex-row py-2`}
                onPress={() => {
                  navigation.navigate("DetailsScreen", {
                    itemId: item.id,
                  });
                }}
              >
                <View style={tw`pr-2 `}>
                  <View style={tw`flex flex-row py-2`}>
                    <ImageBackground
                      style={{
                        resizeMode: "cover",
                        alignSelf: "flex-start",
                        width: 140,
                        height: 100,
                        overflow: "hidden",
                      }}
                      source={require("../assets/banner.jpg")}
                    />
                    <View style={tw`w-50 px-4`}>
                      <Text style={tw`text-l text-white font-bold`}>
                        {item.name}
                      </Text>
                      <Text style={tw`text-l text-white text-stone-300`}>
                        {item.min} min
                      </Text>
                    </View>
                  </View>
                  <Text style={tw`text-white text-stone-300`}>
                    {item.description}
                  </Text>
                </View>
                <Icon
                  name="download"
                  size={22}
                  style={tw`mx-2 py-6`}
                  color="#fff"
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 300,
  },
});
