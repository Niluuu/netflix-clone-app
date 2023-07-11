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
import { Tab, TabView, Dialog } from "@rneui/themed";
import Icon from "react-native-vector-icons/AntDesign";
import IconFont from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native-gesture-handler";

const movie = {
  name: "Wednesday",
  year: "2020",
  age: "18",
  seasons: 4,
  description:
    "Wednesday is an American coming-of-age supernatural mystery comedy horror television series based on the character Wednesday Addams by Charles Addams. Created by Alfred Gough and Miles Millar, it stars Jenna Ortega as the titular character, with Gwendoline Christie, Riki Lindhome, Jamie McShane, Hunter Doohan, Percy Hynes White, Emma Myers, Joy Sunday, Georgie Farmer, Naomi J. Ogawa, Christina Ricci, and Moosa Mostafa appearing in supporting roles. Four out of the eight episodes are directed by Tim Burton, who also serves as executive producer. It revolves around Wednesday Addams, who attempts to solve a murder mystery at her new school.",
};

export default function DetailsScreen({ route, navigation }) {
  const [index, setIndex] = useState(0);
  const [dialog, setDialog] = useState(false);

  const toggleDialog = () => setDialog(!dialog);


  const seasonsList = new Array(movie.seasons);
  console.log('seasonsList', seasonsList)
  return (
    <SafeAreaView style={tw`bg-black`}>
      <ScrollView
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
      >
        <View style={tw`pb-4`}>
          <Image
            source={require("../assets/banner.jpg")}
            style={{
              resizeMode: "cover",
              width: "100%",
              height: 300,
            }}
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
          <Text>Watch</Text>
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
          {/* <Text style={tw`text-white py-4`}>{movie.description}</Text> */}
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
          <TabView.Item></TabView.Item>
          <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
            <Text>Favorite</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
            <Text>more</Text>
          </TabView.Item>
        </TabView>

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
                      1 seasons
                    </Text>
                  </TouchableOpacity>
                )}
              />
          </Dialog>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
