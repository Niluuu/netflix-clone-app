import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export default function App() {
  const [value, setValue] = useState("");

  const handleSubmit = async () => {
    console.log("value", value);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello world" }],
    });

    completion.then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );

    console.log("completion", completion);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>Chat Ai</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.message}>
          <Text>Name: Message form someone.</Text>
        </View>
      </View>
      <View style={styles.input_container}>
        <View style={styles.row}>
          <View style={styles.input_box}>
            <TextInput
              placeholder="some text"
              style={styles.input}
              value={value}
              onChangeText={(val) => setValue(val)}
            />
          </View>
          <Button
            onPress={handleSubmit}
            title="Submit"
            color="#841584"
            accessibilityLabel="Submit button"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer_text}>Footer text</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  header: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  header_title: {
    fontWeight: "200",
  },
  main: {
    height: 100,
    width: 100,
    flex: 5,
  },
  message: {
    color: "#808080",
    width: 250,
    padding: 15,
  },
  input_container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  input_box: { padding: 10 },
  input: {
    borderColor: "#841584",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250
  },
  footer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    bottom: 0,
    flex: 1,
  },
  footer_text: {
    fontWeight: "200",
    color: "#808080",
  },
});
