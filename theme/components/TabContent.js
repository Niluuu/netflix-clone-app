import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import tw from "twrnc";
import { Dialog } from "@rneui/themed";
import Icon from "react-native-vector-icons/AntDesign";

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
    { id: "1", imagePath: require("../../assets/movie-1.jpg") },
    { id: "2", imagePath: require("../../assets/movie-2.jpg") },
    { id: "3", imagePath: require("../../assets/movie-1.jpg") },
    { id: "4", imagePath: require("../../assets/movie-2.jpg") },
  ],
};


const Movies = {
  title: "Trends now",
  movies: [
    { id: "1", imagePath: require("../../assets/movie-1.jpg") },
    { id: "2", imagePath: require("../../assets/movie-2.jpg") },
    { id: "3", imagePath: require("../../assets/movie-1.jpg") },
    { id: "4", imagePath: require("../../assets/movie-2.jpg") },
  ],
};

const seasonsList = Array.from({ length: movie.seasons }, (_, index) => index + 1);;

export const TabEpisodes = () => {
  const [dialog, setDialog] = useState(false);
  const [season, setSeason] = useState(1);

  const toggleDialog = () => setDialog(!dialog);

  console.log('seasonsList', seasonsList)
  return (
    <View>
      <TouchableOpacity
        onPress={toggleDialog}
        activeOpacity={0.3}
        style={tw`py-2 rounded w-26 flex flex-row justify-center items-center`}
      >
        <Text style={tw`text-white`}>{season} Season</Text>
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
              onPressOut={() => {setSeason(item), toggleDialog()} }
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
              //   navigation.navigate("DetailsScreen", {
              //     itemId: item.id,
              //   });
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
                  source={require("../../assets/banner.jpg")}
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
  );
};

export const TabThrillers = () => {
  return (
    <View>
      <FlatList
        data={movie.episodes}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            key={item.id}
            style={tw`rounded py-4 flex flex-row py-2`}
            onPress={() => {
              //   navigation.navigate("DetailsScreen", {
              //     itemId: item.id,
              //   });
            }}
          >
            <View style={tw`flex flex-row py-4`}>
              <ImageBackground
                style={{
                  resizeMode: "cover",
                  alignSelf: "flex-start",
                  width: 380,
                  height: 180,
                  overflow: "hidden",
                }}
                source={require("../../assets/banner.jpg")}
              />
              <Icon
                name="download"
                size={22}
                style={tw`mx-2 py-6`}
                color="#fff"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export const TabSimilar = () => {
  return (
    <View>
      <FlatList
        numColumns={3}
        data={Movies.movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            key={item.id}
            style={tw`rounded py-4 flex flex-row py-2`}
            onPress={() => {
              //   navigation.navigate("DetailsScreen", {
              //     itemId: item.id,
              //   });
            }}
          >
            <View style={tw`flex flex-row p-2 `}>
              <ImageBackground
                style={{
                  resizeMode: "cover",
                  alignSelf: "flex-start",
                  width: 120,
                  height: 180,
                  overflow: "hidden",
                }}
                source={item.imagePath}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
