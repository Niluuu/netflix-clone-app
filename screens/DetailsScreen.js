import React from "react";
import tw from "twrnc";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconFont from "react-native-vector-icons/FontAwesome";

const movie = {
  name: "Wednesday",
  year: "2020",
  age: "18",
  seasons: 1,
  description:
    "Wednesday is an American coming-of-age supernatural mystery comedy horror television series based on the character Wednesday Addams by Charles Addams. Created by Alfred Gough and Miles Millar, it stars Jenna Ortega as the titular character, with Gwendoline Christie, Riki Lindhome, Jamie McShane, Hunter Doohan, Percy Hynes White, Emma Myers, Joy Sunday, Georgie Farmer, Naomi J. Ogawa, Christina Ricci, and Moosa Mostafa appearing in supporting roles. Four out of the eight episodes are directed by Tim Burton, who also serves as executive producer. It revolves around Wednesday Addams, who attempts to solve a murder mystery at her new school.",
};

export default function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params;

  return (
    <SafeAreaView style={tw`bg-black min-h-full`}>
      <View style={tw`w-full pb-4`}>
        <Image
          source={require("../assets/banner.jpg")}
          style={{
            resizeMode: "cover",
            width: "100%",
            height: 300,
          }}
        />
        <Text style={tw`text-white text-4xl font-bold`}>{movie.name}</Text>
        <View style={tw`flex flex-row pb-2`}>
          <Text style={tw`text-slate-400 px-2 `}>{movie.year}</Text>
          <Text style={tw`text-slate-400 px-2 mx-2 bg-gray-500`}>
            {movie.age}+
          </Text>
          <Text style={tw`text-slate-400 px-2 uppercase`}>
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
        <Text>Watch</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.3}
        // onPress={() => navigation.goBack()}
        style={tw`flex flex-row justify-center items-center bg-gray-600 py-2 rounded`}
      >
        <Icon name="download" size={20} style={tw`mx-2`} color="#000" />
        <Text>Dowland</Text>
      </TouchableOpacity>
      <View>
        <Text style={tw`text-white py-2`}>{movie.description}</Text>
      </View>
      {/* Tab */}
    </SafeAreaView>
  );
}
