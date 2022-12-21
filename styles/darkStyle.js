import react from "react";
import { StyleSheet } from "react-native";

const darkMode = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    width: "90%",
    marginTop:50,
    marginLeft: 12,
    marginRight: "auto",
    position: "absolute",
    top: 20,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 7,
  },
  place: {
    backgroundColor: "gray",
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
    color: "white",
  },
  placesmall: {
    color: "gray",
    fontSize: 16,
    color: "#C0C0C0",
  },
});


export default darkMode