import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import tw from "twrnc";
import { TabEpisodes, TabSimilar, TabThrillers } from "./TabContent";



export default function Tab() {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    { title: "Episode", content: <TabEpisodes /> },
    { title: "Thrillers", content: <TabThrillers /> },
    { title: "Similar", content: <TabSimilar /> },
  ];

  return (
    <View style={tw`py-6`}>
      <View style={tw`flex flex-row `}>
        {tabsData.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={{
              padding: 10,
              borderTopColor: index === activeTab ? "red" : "gray",
              borderTopWidth: 3,
              width: 130,
            }}
            onPress={() => setActiveTab(index)}
          >
            <Text style={tw`text-white m-auto`}>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={tw`py-6`}>{tabsData[activeTab].content}</View>
    </View>
  );
}
