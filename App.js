import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { TextInput, Button, Text, View } from "react-native";

const useFontSize = () => {
  const [fontSize, setFontSize] = useState(16);

  const handleFontSizeChange = (newSize) => {
    setFontSize(newSize);
  };

  return { fontSize, handleFontSizeChange };
};

const App = () => {
  const { fontSize, handleFontSizeChange } = useFontSize();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    const newSize = parseInt(inputValue, 10);
    if (!isNaN(newSize)) {
      handleFontSizeChange(newSize);
    }
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize }}>Hello World</Text>
      <TextInput
        placeholder="Enter font size"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginTop: 20 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default App;
