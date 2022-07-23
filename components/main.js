import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Main({ navigation }) {
  const arr = [];
  const [state, setState] = useState([]);
  const apiKey = "ebd99ca135125a88075c1c2674edcc16";
  const data = {
    method: "flickr.photos.search",
    api_key: apiKey,
    text: "cat", // Search Text
    sort: "interestingness-desc",
    per_page: 100,
    license: "4",
    extras: "owner_name,license",
    format: "json",
    nojsoncallback: 1,
  };

  const parameters = new URLSearchParams(data);

  const url = `https://api.flickr.com/services/rest/?${parameters}`;
  // console.log(url);

  const imgURl = (img, size) => {
    let path = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}`;
    if (size) {
      path += `_${size}`;
    }
    path += ".jpg";
    return path;
  };
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => response.photos.photo)
      .then((j) => {
        j.map((source) => {
          arr.push(imgURl(source));
        });
        setState(arr);
        // console.log(arr);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(state);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false}>
        <ScrollView horizontal={true}>
          <FlatList
            // keyExtractor ={(items)=>items.id
            // }

            data={state}
            numColumns={2}
            renderItem={({ item }) => {
              console.log(item);
              return (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    navigation.navigate("ScreenTwo", { dataImg: item });
                  }}
                >
                  <Image
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 10,
                      margin: 7,
                      alignItems: "center",
                      flex: 1,
                    }}
                    source={{ uri: item }}
                  ></Image>
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
