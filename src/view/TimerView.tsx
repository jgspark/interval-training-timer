import React, { useState } from "react";
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { Timer } from "react-native-progress-timer";


interface CustomInputBox {
  title: string;
}

const CustomInputBox = (props: CustomInputBox) => {
  const { title } = props;
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      padding: 10,
    }}>
      <Text>
        {title}
      </Text>
      <TextInput style={{
        backgroundColor: "#f00",
      }} />
    </View>
  );
};

interface TimerViewProps {
  remainingTime: Number | any;
}

const TimerView = (props: TimerViewProps) => {

  const { remainingTime } = props;

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Timer
          remainingTime={remainingTime}
          size={350}
          showsText={true}
          animated={true}
          direction={"counter-clockwise"}
          borderColor={"#d9dcdd"}
          borderWidth={3}
          thickness={5}
          color={"#faac02"}
          style={options.style}
          textStyle={options.textStyle}
        ></Timer>
      </View>
    </SafeAreaView>
  );
};

const options = {
  style: {
    margin: "auto",
  },
  textStyle: {
    color: "#000000",
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  highlight: {
    backgroundColor: "#ffffff",
  },
  play: {
    underlayColor: "#ffffff",
    borderColor: "#d9dcdd",
    textStyle: {
      color: "#000000",
    },
    style: {
      backgroundColor: "#ffffff",
    },
  },
  cancel: {
    underlayColor: "#ffffff",
    borderColor: "#d9dcdd",
    textStyle: {
      color: "#000000",
    },
    style: {
      backgroundColor: "#ffffff",
    },
  },
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    alignItems: "center",
    alignContent: "center",
  },
});

export default TimerView;
