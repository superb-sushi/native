import { StyleSheet, View, Image, TextInput, Pressable } from 'react-native';
import {useState} from "react";
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

const Search = () => {

  const [searchVal, setSearchVal] = useState("");

  const [isSBActive, setIsSBActive] = useState(false);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  const handleSearchValue = (val) => {
    setSearchVal(val)
    val == "" ? setIsSBActive(false) : setIsSBActive(true);
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.searchContainer}>
      <Image source={isSBActive ? require("../assets/activeSearch.png") : require("../assets/search.png")} style={styles.searchIcon}/>
      <View style={styles.searchInputContainer}>
        <TextInput placeholder={"What are you looking for?"} value={searchVal} onChangeText={(val) => handleSearchValue(val)} style={searchVal == "" ? styles.searchInput : styles.searchInputFilled} onFocus={() => setIsSBActive(true)}/>
        {searchVal !== "" ? <Pressable onPress={() => handleSearchValue("")}><Image source={require("../assets/clear.png")} style={styles.clearIcon}/></Pressable> :<View></View>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    marginLeft: "4%",
    minWidth: "42%",
    height: "80px",
    alignItems: "center",
    flexDirection: "row"
  },
  searchIcon: {
    height: "24px",
    width: "24px",
    objectFit: "contain",
    marginLeft: "10px"
  },
  searchInputContainer: {
    width: "88%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "18px"
  },
  searchInput: {
    width: "100%",
    fontFamily: "Roboto_400Regular",
    color: "#888888",
    height: "24px",
    fontSize: "17px",
    fontWeight: "100",
    outlineStyle: "none"
  },
  searchInputFilled: {
    width: "100%",
    fontFamily: "Roboto_400Regular",
    color: "black",
    height: "24px",
    fontSize: "17px",
    fontWeight: "100",
    outlineStyle: "none"
  },
  clearIcon: {
    marginLeft: "14px",
    height: "13px",
    width: "13px",
    objectFit: "contain"
  },
});

export default Search