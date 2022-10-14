import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";
import { Card } from "react-native-paper";
const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: isAndroid ? 40 : 0 ,backgroundColor:"transparent"}}>
      <View style={styles.container1}>
        <Text style={{ top: 20, padding: 16, fontSize: 15 }}>
          Welcome Vineeth,
        </Text>
        <View style={styles.img}>
          <Image
            source={require("./assets/logo.png")}
            style={{ width: "40%", height: "45%" }}
          />
        </View>
        <ExpoStatusBar style="auto" />
      </View>

      <View style={styles.container}>
        <View style={styles.mainCardView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.subCardView}>
              <Image
                source={require("./assets/fruit2.png")}
                resizeMode="contain"
                style={{
                  borderRadius: 0,
                  height: 50,
                  width: 50,
                }}
              />
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                  fontWeight: "bold",

                  
                }}
              >
                {"DIET PLANS"}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: "85%",
                }}
              >
              
              </View>
            </View>
          </View>
          <View
            style={{
              height: 25,
              backgroundColor: "pink",
              borderWidth: 0,
              width: 25,
              marginLeft: -26,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <Text style={{ color: "white" }}>0</Text>
          </View>
        </View>
        <View style={styles.mainCardView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.subCardView}>
              <Image
                source={require("./assets/fitness.png")}
                resizeMode="contain"
                style={{
                  borderRadius: 25,
                  height: 50,
                  width: 50,
                }}
              />
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                  fontWeight: "bold",

                  
                }}
              >
                {"FITNESS"}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: "85%",
                }}
              >
              
              </View>
            </View>
          </View>
          <View
            style={{
              height: 25,
              backgroundColor: "pink",
              borderWidth: 0,
              width: 25,
              marginLeft: -26,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <Text style={{ color: "white" }}>0</Text>
          </View>
        </View>
        <View style={styles.mainCardView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.subCardView}>
              <Image
                source={require("./assets/book.png")}
                resizeMode="contain"
                style={{
                  borderRadius: 25,
                  height: 50,
                  width: 50,
                }}
              />
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                  fontWeight: "bold",

                  
                }}
              >
                {"NUTRITION FACTS"}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: "85%",
                }}
              >
              
              </View>
            </View>
          </View>
          <View
            style={{
              height: 25,
              backgroundColor: "pink",
              borderWidth: 0,
              width: 25,
              marginLeft: -26,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <Text style={{ color: "white" }}>{">>"}</Text>
          </View>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#22faa0",

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: { backgroundColor: "", flexDirection: "row", flex: 1 },
  cover: { padding: 30, width: "50%", height: "10%" },
  text: { padding: 30 },
  container: {
    flex: 4,
    flexDirection: "row", // set elements horizontally, try column.
    padding: 20,
  },
  powderblue: {
    width: 60,
    height: 60,
    backgroundColor: "powderblue",
  },
  skyblue: {
    width: 60,
    height: 60,
    backgroundColor: "skyblue",
  },
  steelblue: {
    width: 60,
    height: 60,
    backgroundColor: "steelblue",
  },
  container: {
    flex: 3,
    backgroundColor: "#f9f6ee",
  },
  mainCardView: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 0,
    backgroundColor: "transparent",
    // borderColor: "green",
    // borderWidth: 1,
    // borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
});
