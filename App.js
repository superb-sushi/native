import { StyleSheet, Text, SafeAreaView, View, ScrollView, Image } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import NavBar from "./components/NavBar.js";
import LoginIsland from './components/LoginIsland.js';
import Bot1banner from './components/Bot1banner.js';

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
          <Text style={styles.navbartopText}>A XXXXX Government Agency Website <Text style={styles.blueUnderline}>How to identify</Text></Text>
        </View>
        <View style={styles.navbarbot}>
          <View style={styles.navSection}>
            <NavBar />
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.viewPage}>
        <View style={styles.loginIsland}>
          <LoginIsland />
        </View>
        <View style={styles.bot1banner}>
          <Bot1banner />
        </View>
        <View style={styles.bot2banner}>

        </View>
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
    height: '100vh',
    minHeight: "1500px",
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
    fontSize: '14px',
    letterSpacing: '0.75px',
    fontWeight: '100'
  },
  dragon: {
    height: '20px',
    width: '20px',
    marginRight: '7px'
  },
  blueUnderline: {
    textDecorationLine: "underline",
    color: "#5057FD",
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
  },
  loginIsland: {
    backgroundColor: "#252934",
    height: "100vh",
    width: "100%",
    marginTop: "116px",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bot1banner: {
    backgroundColor: "#363b49",
    height: "23vh",
    width: "100%",
    minHeight: "310px",
    justifyContent: "center",
    alignItems: "center"
  }, 
  bot2banner: {
    backgroundColor: "#1B1E27",
    height: "11vh",
    width: "100%",
    minHeight: "130px"
  }
});
