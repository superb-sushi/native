import { StyleSheet, View, FlatList, Image, Text, Pressable } from 'react-native';
import Search from "./SearchBar.js"
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

const NavBarItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
);

const NavBar = () => {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const DATA = [
    {
      id: '2',
      title: "Support"
    }, 
    {
      id: '1',
      title: "About Us"
    }, 
    {
      id: '0',
      title: "Explore OneNs"
    }
  ];

  return (
    <View style={styles.navbarContent}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/NS.png")} style={styles.logo1}/>
        <Image source={require("../assets/onens.png")} style={styles.logo2}/>
      </View>

      <Search />

      <View style={styles.flatList}>
        <FlatList
          horizontal
          inverted
          data={DATA}
          renderItem={({item}) => <NavBarItem item={item} />}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.loginBtnContainer}>
        <Pressable style={styles.loginBtn}> 
          <Text style={styles.loginBtnText}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navbarContent: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between"
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo1: {
    width: "60px",
    height: "60px",
  },
  logo2: {
    marginLeft: "8px",
    width: "60px",
    height: "60px"
  },
  flatList: {
    width: '32%',
    minWidth: "400px"
  },
  item: {
    width: "150px",
    alignItems: "center",
  },
  title: {
    fontFamily: "Roboto_400Regular",
    color: "black",
    fontSize: '15px',
    letterSpacing: '0.9px',
    fontWeight: '600',
  },
  loginBtnContainer: {
    width: "13%",
    minWidth: "190px",
    height: "100%",
    justifyContent: "center",
    marginRight: "10px",
  },
  loginBtn: {
    backgroundColor: "#dd2c30",
    height: "52px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px"
  },
  loginBtnText: {
    fontFamily: Roboto_400Regular,
    fontWeight: "600",
    fontSize: "18px",
    letterSpacing: "0.75px",
    color: "white"
  }
});

export default NavBar;