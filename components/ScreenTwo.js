import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  // PermissionsAndroid,
  // Platform,
} from "react-native";
// import RNFetchBlob from "rn-fetch-blob";

export default function ScreenTwo({ route }) {
  const dataImg = route.params.dataImg;
  const [show, setShow] = useState();
  console.log(dataImg);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: Dimensions.get("window").width,
          height: 300,
          backgroundColor: "black",
        }}
        source={{ uri: dataImg }}
      ></ImageBackground>
      <TouchableOpacity
        style={{
          alignItems: "flex-end",
          position: "absolute",
          justifyContent: "flex-end",
          right: 30,
          bottom: 80,
        }}
        onPress={() => {
          // checkPermission();
        }}
      >
        {show ? (
          <Image
            style={{ width: 40, height: 40, resizeMode: "cover" }}
            source={{
              uri: "https://img.icons8.com/glyph-neue/344/fa314a/download.png",
            }}
          ></Image>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "flex-end",
          position: "absolute",
          justifyContent: "flex-end",
          right: 30,
          bottom: 30,
        }}
        onPress={() => {
          setShow(!show);
        }}
      >
        <Image
          style={{ width: 40, height: 40, resizeMode: "cover" }}
          source={{
            uri: "https://img.icons8.com/ios-filled/344/fa314a/add.png",
          }}
        ></Image>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
