import React from "react";
import tw from "twrnc";
import { SafeAreaView, Text, Button } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params;

  return (
    <SafeAreaView style={tw`bg-black min-h-full`}>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
