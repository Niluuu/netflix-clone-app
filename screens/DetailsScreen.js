import React, { useState } from "react";
import tw from "twrnc";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Tab, TabView } from "@rneui/themed";
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
  const [index, setIndex] = useState(0);
  const [dialog, setDialog] = useState(false);

  const toggleDialog = () => setDialog(!dialog);

  return (
    <SafeAreaView style={tw`bg-black`}>
      <ScrollView>
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
          <Tab.Item containerStyle={{ whiteSpace: "nowrap" }}>
            Thrillers
          </Tab.Item>
          <Tab.Item>Similar</Tab.Item>
        </Tab>

        <TabView
          value={index}
          onChange={setIndex}
          animationType="spring"
          tabItemContainerStyle={{
            backgroundColor: "red",
          }}
        >
          <TabView.Item>
            <TouchableOpacity onPress={toggleDialog}>
              <Text>1 Season</Text>
            </TouchableOpacity>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
            <Text>Favorite</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
            <Text>more</Text>
          </TabView.Item>
        </TabView>
      </ScrollView>
    </SafeAreaView>
  );
}
