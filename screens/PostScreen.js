import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { TouchableOpacity} from 'react-native-gesture-handler';

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.route.params){
      this.props.navigation.navigate("Home");
    }
    else {
      return (
       <View style = {styles.container}>
        <SafeAreaView style = {styles.droidSafeArea} />
        <View style = {styles.appTitle}>
          <View style = {styles.appIcon}>
            <Image source = {require("../assets/logo.png")} style = {styles.iconImage}></Image>
          </View>
        <View style = {styles.appTitleTextContainer}>
          <Text style = {styles.appTitleText}>Spectagram</Text>
        </View>
        </View>
        <View style = {styles.storyContainer}>
          <ScrollView style = {styles.storyCard}>
            <Image
              source={require("../assets/post.jpeg")}
              style={styles.image}
            ></Image>
            <View style = {styles.dataContainer}>
              <View style = {styles.titleTextContainer}>
                <Text style = {styles.storyAuthorText}>{this.props.route.params.post.author}</Text>
                <Text style = {styles.storyAuthorText}>{this.props.route.params.post.created_on}</Text>
                <Text style = {styles.storyAuthorText}>{this.props.route.params.post.caption}</Text>
              </View>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </ScrollView>
        </View>
       </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  storyContainer: {
    flex: 1
  },
  storyCard: {
    margin: RFValue(20),
    backgroundColor: "#2a2a2a",
    borderRadius: RFValue(20)
  },
  image: {
    width: "100%",
    alignSelf: "center",
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: "contain",
    marginTop: 20
  },
  dataContainer: {
    flexDirection: "row",
    padding: RFValue(20)
  },
  titleTextContainer: {
    flex: 0.8
  },
  storyAuthorText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white",
    marginLeft: 30,
    alignSelf: 'center'
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    flexDirection: "row",
    backgroundColor: "#eb3948",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});
