import {
  StyleSheet,
  Text,
  View,
  Image,
  Appearance,
  TextInput,
  Pressable
} from "react-native";
import darkStyle from "../styles/darkStyle"
import React, { useState,useLayoutEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const MapScreen = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme);
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme);
  });
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown:false
    })
  },[])

  const data = [
    {
      image:
        "https://sdk.bitmoji.com/render/panel/49490f4e-eabb-4cab-bcb6-69f361d66706-b04e0b03-724c-49a0-aed6-acaaa095e117-v1.png?transparent=1&palette=1",
      id: "1",
      latitude: "13.1295",
      longitude: "77.5877",
      name: "sujan",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/49490f4e-eabb-4cab-bcb6-69f361d66706-349ae33a-71ac-4e93-aa23-6fea888cbce8-v1.png?transparent=1&palette=1",
      id: "2",
      latitude: "13.1155",
      longitude: "77.6070",
      name: "suhas",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/49490f4e-eabb-4cab-bcb6-69f361d66706-36c5b152-0741-4b18-9b2d-2172a549e359-v1.png?transparent=1&palette=1",
      id: "3",
      latitude: "13.0977",
      longitude: "77.5839",
      name: "ashish",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/5ec9454b-e321-4007-a4fb-e1b511ef9e1d-38316d96-fa28-4778-a8a6-ba912e79183c-v1.png?transparent=1&palette=1",
      id: "4",
      latitude: "13.0490",
      longitude: "77.5936",
      name: "abhi",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/49490f4e-eabb-4cab-bcb6-69f361d66706-59a79c14-e33e-41db-b2e3-8f6cfc1593ed-v1.png?transparent=1&palette=1",
      id: "5",
      latitude: "13.0623",
      longitude: "77.5871",
      name: "akash",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/5ec9454b-e321-4007-a4fb-e1b511ef9e1d-e759ecce-8359-457f-a330-eebed37ae9c7-v1.png?transparent=1&palette=1",
      id: "6",
      latitude: "13.0354",
      longitude: "77.5988",
      name: "Preetham",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/a2ef820f-0ca5-4391-8b2e-c79483edfe04-d8fa313e-d0e8-4d84-9769-a3238cf96fc0-v1.png?transparent=1&palette=1",
      id: "7",
      latitude: "13.0897",
      longitude: "77.5458",
      name: "supreeth",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/be347acc-bb01-4f7a-9dd4-2b72d1a9d8c7-a854125f-f81a-4b79-a80c-30d522cbb799-v1.png?transparent=1&palette=1",
      id: "8",
      latitude: "13.1042",
      longitude: "77.5713",
      name: "Keerthi",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/be347acc-bb01-4f7a-9dd4-2b72d1a9d8c7-37498be4-7dec-4bcd-8c46-f04e0229ef0a-v1.png?transparent=1&palette=1",
      id: "9",
      latitude: "13.0811",
      longitude: "77.5562",
      name: "Deepthi",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/be347acc-bb01-4f7a-9dd4-2b72d1a9d8c7-c4234bcc-b963-4277-9878-39f5088de39e-v1.png?transparent=1&palette=1",
      id: "10",
      latitude: "13.1222",
      longitude: "77.6306",
      name: "Priya",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/49490f4e-eabb-4cab-bcb6-69f361d66706-00b2b490-1f1a-4e1e-bfc7-764d868e876d-v1.png?transparent=1&palette=1",
      id: "11",
      latitude: "13.0659",
      longitude: "77.6524",
      name: "Shreya",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <MapView
        zoomEnabled={true}
        userInterfaceStyle={theme === "light" ? "light" : "dark" }
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 12.972442,
          longitude: 77.580643,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {data.map((emoji, i) => (
          <Marker
            key={i}
            title="Bangalore"
            description={"city"}
            coordinate={{
              latitude: parseFloat(emoji.latitude),
              longitude: parseFloat(emoji.longitude),
            }}
          >
            <Image
              source={{ uri: emoji.image }}
              style={{ width: 100, height: 100, resizeMode: "cover" }}
            />
          </Marker>
        ))}
      </MapView>

      <View
        style={{
          position: "absolute",
          bottom: 30,
          left: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={theme === "light" ? styles.place : darkStyle.place}>
          <Image
            style={{ width: 80, height: 60, borderRadius: 5 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtjcbeobPeIBoY3L8srq69glC2CCNucKrYg&usqp=CAU",
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={theme === "light" ? styles.placeText : darkStyle.placeText}>Loakal Hamburk</Text>
            <Text style={theme === "light" ? styles.placesmall : darkStyle.placesmall}>Pub In prague</Text>
          </View>
        </View>
      </View>
      <View style={theme === "light" ? styles.searchBar : darkStyle.searchBar}>
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search items"
        />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>
      <View
        style={{
          position: "absolute",
          top: 130,
          right: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
        onPress={() => setTheme("dark")}
          style={{
            backgroundColor: "#B0B0B0",
            width: 34,
            height: 34,
            borderRadius: 17,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="settings" size={18} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    marginTop:50,
    width: "90%",
    marginLeft: 12,
    marginRight: "auto",
    position: "absolute",
    top: 20,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 7,
  },
  place: {
    backgroundColor: "white",
    width: "96%",
    height: 80,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  placeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  placesmall: {
    color: "gray",
    fontSize: 16,
  },
});
