import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, View, ScrollView, Image } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import NavBar from "./components/NavBar.js";

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navbartop}>
          <Image style={styles.dragon} source={require("./assets/dragon.png")}/>
          <Text style={styles.navbartopText}>A XXXXX Government Agency Website</Text>
        </View>
        <View style={styles.navbarbot}>
          <View style={styles.navSection}>
            <NavBar />
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.viewPage}>
        <Text>ScrollView</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffF',
    justifyContent: 'center',
  },
  viewPage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: "#252934",
    zIndex: '1'
  },
  navbartop: {
    height: '34px',
    backgroundColor: '#EEEEEE',
    width: '100%',
    alignItems: 'center',
    flexDirection: "row",
    paddingLeft: '15vw',
  },
  navbartopText: {
    fontFamily: "Roboto_400Regular",
    color: "#404040",
    fontSize: '15px',
    letterSpacing: '0.75px',
    fontWeight: '100'
  },
  dragon: {
    height: '20px',
    width: '20px',
    marginRight: '7px'
  },
  navbar: {
    width: '100%',
    zIndex: '2',
    position: "absolute",
    top: '0px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbarbot: {
    backgroundColor: 'white',
    width: '100%',
    height: '82px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navSection: {
    flexDirection: "row",
    width: '70vw',
    height: '100%',
    minWidth: '50vw',
    alignItems: "center",
    minWidth: "1300px"
  }
});
