import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

const styles = StyleSheet.create({
  b1bContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: "90%",
  },
  b1bTop: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  b1bTopImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    alignItems: "flex-start"
  },
  b1bTopLogo1: {
    width: "60px",
    height: "60px",
  },
  b1bTopLogo2: {
    marginLeft: "8px",
    width: "60px",
    height: "60px"
  },
  b1bTopDownloadContainer: {
    height: "100%",

  },
  b1bTopDCLogoContainer: {
    height: "50%",
    flexDirection: "row",

  },
  filler: {
    flex: 1,
  },
  b1bTopDCLogoText: {
    fontFamily: "Roboto_400Regular",
    fontWeight: "800",
    fontSize: "20px",
    color: "white",
  },
  b1bTopDCDownloadContainer: {
    height: "50%",
    alignItems: "space-between",
    width: "250px"
  },
  b1bTopDCDownload: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  b1bTopDCApple: {
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: "5px",
    borderColor: "#AAAAAA",
    borderWidth: "1px",
    justifyContent: "center",
    alignItems: "center",
    padding: "3px"
  },
  b1bTopDCGoogle: {
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: "5px",
    borderColor: "#AAAAAA",
    borderWidth: "1px",
    justifyContent: "center",
    alignItems: "center",
    padding: "3px"
  },
  appleIcon: {
    height: "28px",
    width: "28px",
    objectFit: "contain",
  },
  playstoreIcon: {
    height: "28px",
    width: "28px",
    objectFit: "contain",
  },
  downloadbtnContainerA: {
    
  },
  downloadbtnContainerG: {
    
  },
  downloadBtnLarge: {
    fontFamily: "Roboto_400Regular",
    color: "white",
    fontSize: "17px"

  },
  downloadBtnSmall: {
    fontFamily: "Roboto_400Regular",
    color: "white",
    fontSize: "10px"
  },
  b1bBtm: {
    height: "50%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "flex-end"
  }
})

const Bot1banner = () => {

    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

  return (
    <View style={styles.b1bContainer}>
      <View style={styles.b1bTop}>
        <View style={styles.b1bTopImageContainer}>
          <Image source={require("../assets/NSww.png")} style={styles.b1bTopLogo1}/>
          <Image source={require("../assets/onensw.png")} style={styles.b1bTopLogo2}/>
        </View>
        <View style={styles.b1bTopDownloadContainer}>
          <View style={styles.b1bTopDCLogoContainer}>
            <View style={styles.filler}></View>
            <Text style={styles.b1bTopDCLogoText}>Download OneNS app</Text>
          </View>
          <View style={styles.b1bTopDCDownloadContainer}>
            <View style={styles.b1bTopDCDownload}>
              <View style={styles.b1bTopDCApple}>
                <Image source={require("../assets/appleIcon.png")} style={styles.appleIcon}/>
                <View style={styles.downloadbtnContainerA}>
                  <Text style={styles.downloadBtnSmall}>Download on the</Text>
                  <Text style={styles.downloadBtnLarge}>App Store</Text>
                </View>
              </View>
              <View style={styles.b1bTopDCGoogle}>
                <Image source={require("../assets/playstoreIcon.png")} style={styles.playstoreIcon}/>
                <View style={styles.downloadbtnContainerG}>
                  <Text style={styles.downloadBtnSmall}>GET IT ON</Text>
                  <Text style={styles.downloadBtnLarge}>Google Play</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.b1bBtm}>
        <View style={styles.b1bBtmNavContainer}>
          <View style={styles.b1bBtmNCLeft}>

          </View>
          <View style={styles.b1bBtmNCRight}>

          </View>
        </View>
        <View style={styles.b1bBtmSocialMediaContainer}>
          <View style={styles.fbIcon}>

          </View>
          <View style={styles.igIcon}>
            
          </View>
          <View style={styles.ttIcon}>
            
          </View>
          <View style={styles.xIcon}>
            
          </View>
          <View style={styles.ytIcon}>
            
          </View>
          <View style={styles.liIcon}>
            
          </View>
        </View>
      </View>

    </View>
  )
}

export default Bot1banner