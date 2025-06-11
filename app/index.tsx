import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Index() {
  return (
    <View style={styles.background}>
      {/*HEADER*/}
      <View style={styles.header}>
        <View style={styles.leftSideHeader}>
          <Image
            source={{
              uri: "https://www.interstellarrift.com/wiki/images/d/d8/Youtube-logo-png-photo-0.png",
            }}
            style={styles.logo}
          />
          <Text style={styles.text}>YouTube</Text>
        </View>

        <View style={styles.rightSideHeader}>
          <Image
            source={{
              uri: "https://icon-library.com/images/display-icon/display-icon-19.jpg",
            }}
            style={styles.airplayIcon}
          />
          <Image
            source={{
              uri: "https://th.bing.com/th/id/R.13bc99d70664f0bac01cdb924ba08d3c?rik=DL1npswdF%2fmO8w&pid=ImgRaw&r=0",
            }}
            style={styles.notificationBellIcon}
          />
          <Image
            source={{
              uri: "https://icon-library.com/images/ios-search-icon/ios-search-icon-23.jpg",
            }}
            style={styles.searchIcon}
          />
        </View>
      </View>

      {/*TABS*/}
      <View style={styles.tabsContainer}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/R.ec0fbeda30ff1549bf47f7f27337b036?rik=dMgk2AWW9mxQsA&riu=http%3a%2f%2fwww.freeiconspng.com%2fuploads%2fcompass-icon-5.png&ehk=qSTuFj3PsyFFkaUoB9qYqBxc1p%2fnB04lxZzTqM7U0Ig%3d&risl=&pid=ImgRaw&r=0",
          }}
          style={styles.navigationTab}
        />
        <View style={styles.allTab}>
          <Text>All</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 100,
  },

  leftSideHeader: {
    flexDirection: "row",
    gap: 10,
  },
  rightSideHeader: {
    flexDirection: "row",
  },

  logo: {
    width: 70,
    height: 30,
    padding: 3,
  },

  text: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "black",
  },

  airplayIcon: {
    width: 30,
    height: 25,
  },

  notificationBellIcon: {
    width: 20,
    height: 25,
  },

  searchIcon: {
    width: 20,
    height: 25,
  },

  tabsContainer: {
    flexDirection: "row",
  },

  navigationTab: {
    width: 25,
    height: 25,
  },

  allTab: {
    backgroundColor: "lightgrey",
    width: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
