import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

const LoginIsland = () => {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.islandContainer}>
        <View style={styles.islandLeft}>
            <View style={styles.islandTopLeft}>
                <Text style={styles.islandLeftText}>OneNS. SUPPORTING YOUR NS EXPERIENCE.</Text>
            </View>
            <View style={styles.islandBottomLeft}>
                <View style={styles.logoContainer}>
                    <Image source={require("../assets/NSw.png")} style={styles.logo1}/>
                    <Image source={require("../assets/onensw.png")} style={styles.logo2}/>
                </View>
            </View>
        </View>
        <View style={styles.islandRight}>
            <View style={styles.islandTopRight}>
                    <Text style={styles.islandTopRightText}>
                        Login to manage your national service matters
                    </Text>
                    <View style={styles.islandTopRightBot}>
                        <View style={styles.itrbLeft}>
                            <View style={styles.loginTypeHeader}>
                                <Image source={require("../assets/mailbox.png")} style={styles.loginTypeHeaderImage} />
                                <Text style={styles.loginTypeHeaderText}>MAILBOX</Text>
                            </View>
                            <Text style={styles.loginTopBodyText}>Singpass login for Singaporeans and Permanent Residents</Text>
                            <View style={styles.loginBtnContainer}>
                                <Pressable style={styles.loginBtn}> 
                                    <Text style={styles.loginBtnText}>LOGIN</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.itrbRight}>
                            <View style={styles.loginTypeHeader}>
                                <Image source={require("../assets/messenger.png")} style={styles.loginTypeHeaderImage} />
                                <Text style={styles.loginTypeHeaderText}>MSG</Text>
                            </View>
                            <Text style={styles.loginTopBodyText}>Login to MHA portal for MHA servicemen</Text>
                            <View style={styles.loginBtnContainer2}>
                            <Pressable style={styles.loginBtn2}> 
                                <Text style={styles.loginBtnText2}>MSG portal</Text>
                                <Image source={require("../assets/redirect.png")} style={styles.redirectIcon} />
                            </Pressable>
                        </View>
                        </View>
                    </View>
                    <View style={styles.itrbb}>
                        <Text style={styles.itrbbText}>For Pre-Enlistees without Singpass, please click <Pressable><Text style={styles.itrbbLink}>here</Text></Pressable> to login.</Text>
                    </View>
            </View>
            <View style={styles.islandBottomRight}>
                <View style={styles.ibrTitle}>
                    <Text style={styles.ibrTitleText}>
                        Business
                    </Text>
                </View>
                <View style={styles.ibrSubtitle}>
                    <Text style={styles.ibrSubtitleText}>
                        Singpass login for employers
                    </Text>
                </View>
                <View style={styles.ibrBlueBoxContainer}>
                    <View style={styles.ibrBlueBox}>
                        <View style={styles.ibrBlueBoxContents}>
                            <View style={styles.ibrBlueBoxHeader}>
                                <Image source={require("../assets/infoicon.png")} style={styles.ibrBlueBoxHeaderIcon}/>
                                <Text style={styles.ibrBlueBoxHeaderText}>Facing issues accessing Employer eServices?</Text>
                            </View>
                            <View style={styles.ibrBlueBoxText}>
                                <Text style={styles.ibrBlueBoxTextContent}>
                                    If you are a third-party entity or an employer experiencing difficulties accessing Employer eServices, please visit our <Pressable><Text style={styles.loginBtnText2}>FAQs</Text></Pressable> or <Pressable><Text style={styles.loginBtnText2}>Contact Us</Text></Pressable> for assistance.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ibrLoginBtnContainer}>
                    <Pressable style={styles.loginBtn3}> 
                        <Text style={styles.loginBtnText3}>LOGIN</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    islandContainer: {
    backgroundColor: "#1B1E27",
    height: "82%",
    width: "66%",
    borderRadius: "10px",
    flexDirection: "row",
    minWidth: "1300px",
    },
    islandLeft: {
        width: "50%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    islandTopLeft: {
        width: "80%",
        height: "45%",
        justifyContent: "flex-end",
    },
    islandBottomLeft: {
        width: "80%",
        height: "45%",
        justifyContent: "flex-end"
    },
    islandLeftText: {
        fontFamily: "Roboto_400Regular",
        color: "white",
        fontSize: "40px",
        fontWeight: "900",
        width: "50%",
        minWidth: "250px"
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    logo1: {
        width: "90px",
        height: "90px",
    },
    logo2: {
        marginLeft: "14px",
        width: "90px",
        height: "90px"
    },
    islandRight: {
        width: "50%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "white",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        justifyContent: "center",
    },
    islandTopRight: {
        width: "80%",
        height: "45%",
    },
    islandBottomRight: {
        width: "80%",
        height: "45%",
    },
    islandTopRightText: {
        fontFamily: "Roboto_400Regular",
        fontSize: "30px",
        fontWeight: "bold",
        height: "20%"
    },
    islandTopRightBot: {
        width: "100%",
        height: "70%",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    itrbLeft: {
        height: "80%",
        width: "50%",
        justifyContent: "space-around"
    },
    itrbRight: {
        height: "80%",
        width: "50%",
        justifyContent: "space-around"
    },
    loginTypeHeader: {
        height: "20%",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "2%"
    },
    loginTypeHeaderImage: {
        height: "35px",
        width: "35px",
        objectFit: "cover"
    },
    loginTypeHeaderText: {
        marginLeft: "3%",
        fontFamily: "Roboto_400Regular",
        fontWeight: "bold",
        fontSize: "15px",
        letterSpacing: "0.75px"
    },
    loginBtnContainer: {
        width: "100%",
        minWidth: "190px",
        justifyContent: "center",
        marginRight: "10px",
    },
    loginBtn: {
        backgroundColor: "#dd2c30",
        height: "52px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        width: "75%"
    },
    loginBtnText: {
        fontFamily: "Roboto_400Regular",
        fontWeight: "600",
        fontSize: "18px",
        letterSpacing: "0.75px",
        color: "white"
    },
    loginTopBodyText: {
        color: "#888888",
        fontFamily: "Roboto_400Regular",
        fontSize: "16px",
        letterSpacing: "0.5px",
        width: "90%",
        lineHeight: '25px'
    },
    loginBtnContainer2: {
        width: "100%",
        minWidth: "190px",
        justifyContent: "center",
        marginRight: "10px",
    },
    loginBtn2: {
        height: "52px",
        alignItems: "center",
        width: "75%",
        flexDirection: "row"
    },
    loginBtnText2: {
        fontFamily: Roboto_400Regular,
        fontWeight: "400",
        fontSize: "16px",
        color: "#dd2c30",
        textDecorationLine: 'underline'
    },
    redirectIcon: {
        marginLeft: "10px",
        height: "25px",
        width: "25px",
        objectFit: "cover"
    },
    itrbb: {
        height: "10%",
        width: "100%",
        justifyContent: "flex-end",
    },
    itrbbText: {
        fontFamily: "Roboto_400Regular",
        color: "#888888",
        fontSize: "16px"
    },
    itrbbLink: {
        fontFamily: "Roboto_400Regular",
        textDecorationLine: 'underline',
        color: "#dd2c30"
    },
    ibrTitle: {
        height: "20%",
        justifyContent: "flex-end"
    },
    ibrTitleText: {
        fontFamily: "Roboto_400Regular",
        fontSize: "25px",
        fontWeight: "800"
    },
    ibrSubtitle: {
        height: "10%",
        justifyContent: "flex-end"
    },
    ibrSubtitleText: {
        fontFamily: "Roboto_400Regular",
        fontSize: "16px",
        color: "#888888",
    },
    ibrBlueBoxContainer: {
        height: "50%",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    ibrBlueBox: {
        borderRadius: "15px",
        backgroundColor: "#dde0f8",
        width: "100%",
        height: "90%",
        alignItems: "center",
        justifyContent: "center"
    },
    ibrBlueBoxContents: {
        height: "80%",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "15px"
    }, 
    ibrBlueBoxHeader: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
        width: "95%",
    },
    ibrBlueBoxHeaderText: {
        color: "#0007AD",
        fontFamily: "Roboto_400Regular",
        fontWeight: "800",
        fontSize: "17px",
        letterSpacing: "0.5px"
    },
    ibrBlueBoxHeaderIcon: {
        height: "23px",
        width: "23px"
    },
    ibrBlueBoxText: {
        width: "95%"
    },
    ibrBlueBoxTextContent: {
        fontFamily: "Roboto_400Regular",
        fontSize: "16px",
        fontWeight: "100",
        letterSpacing: "0.5px",
        lineHeight: "30px"
    },
    ibrLoginBtnContainer: {
        height: "20%",
        justifyContent: "flex-end"
    },
    loginBtn3: {
        height: "52px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        width: "37.5%",
        borderColor: "#888888",
        borderWidth: "2px"
    },
    loginBtnText3: {
        fontFamily: "Roboto_400Regular",
        fontWeight: "600",
        fontSize: "18px",
        letterSpacing: "0.75px",
        color: "black"
    },
});

export default LoginIsland