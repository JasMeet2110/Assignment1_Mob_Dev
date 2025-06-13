import React from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MainPage = ({ navigation }: { navigation: any }) => {
  const showAlert = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.logoContainer}>
              <Image
                source={{
                  uri: "https://www.interstellarrift.com/wiki/images/d/d8/Youtube-logo-png-photo-0.png",
                }}
                style={styles.logo}
              />
              <Text style={styles.logoText}>YouTube</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>🔔</Text>
              <Text style={styles.notificationBadge}>16</Text>
            </View>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>🔍</Text>
            </View>
            <View style={styles.profileIcon}>
              <Text style={styles.icon}>👤</Text>
            </View>
          </View>
        </View>

        {/* Navigation Menu */}
        <View>
          <ScrollView horizontal style={styles.navMenu} showsHorizontalScrollIndicator={false}>
            <View style={styles.navItem}><Text style={styles.navText}>All</Text></View>
            <View style={styles.navItem}><Text style={styles.navText}>Satsang</Text></View>
            <View style={styles.navItem}><Text style={styles.navText}>Music</Text></View>
            <View style={styles.navItem}><Text style={styles.navText}>Podcasts</Text></View>
            <View style={styles.navItem}><Text style={styles.navText}>Live</Text></View>
            <View style={styles.navItem}><Text style={styles.navText}>Gaming</Text></View>
            <View style={styles.navItem}><Text style={styles.navText}>Trending</Text></View>
          </ScrollView>
        </View>

        {/* Main Content */}
        <ScrollView style={styles.mainContent}>
          {/*Video Card 1*/}
          <View style={styles.videoCard}>
            <Image
              source={{ uri: "https://wallpaperaccess.com/full/2416436.jpg" }}
              style={styles.thumbnail}
            />
            <View style={styles.videoInfo}>
              <Image
                source={{ uri: "https://wallpaperaccess.com/full/682452.jpg" }}
                style={styles.channelIcon}
              />
              <View style={styles.videoDetails}>
                <Text style={styles.videoTitle}>Sample Video Title</Text>
                <Text style={styles.channelName}>
                  Channel Name • 1M views • 16 seconds ago
                </Text>
              </View>
            </View>
          </View>

          {/*Video Card 2*/}
          <View style={styles.videoCard}>
            <Image
              source={{ uri: "https://wallpapers.com/images/hd/1080p-nature-background-nfkrrkh7da3eonyn.jpg" }}
              style={styles.thumbnail}
            />
            <View style={styles.videoInfo}>
              <Image
                source={{ uri: "https://wallpapers.com/images/hd/1080p-nature-background-nfkrrkh7da3eonyn.jpg" }}
                style={styles.channelIcon}
              />
              <View style={styles.videoDetails}>
                <Text style={styles.videoTitle}>Sample Video Title</Text>
                <Text style={styles.channelName}>
                  Channel Name • 2M views • 20 seconds ago
                </Text>
              </View>
            </View>
          </View>

          {/* Shorts Section */}
          <Text style={styles.shortsHeader}>Shorts</Text>
          <ScrollView horizontal style={styles.shortsContainer} showsHorizontalScrollIndicator={false}>
            <View style={styles.shortCard}>
              <Image source={{ uri: "https://picsum.photos/150/250" }} style={styles.shortThumbnail} />
              <Text style={styles.shortTitle}>Short #1 😊</Text>
            </View>
            <View style={styles.shortCard}>
              <Image source={{ uri: "https://picsum.photos/150/250" }} style={styles.shortThumbnail} />
              <Text style={styles.shortTitle}>Short #2 🎥</Text>
            </View>
          </ScrollView>
        </ScrollView>

        {/* Alert Button (outside scroll) */}
        <View style={styles.alertButtonContainer}>
          <TouchableOpacity style={styles.alertButton} onPress={showAlert}>
            <Text style={styles.alertButtonText}>Alert</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation (outside scroll) */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.bottomNavItem}>
            <Text style={styles.bottomNavIcon}>🏠</Text>
            <Text style={styles.bottomNavText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem}>
            <Text style={styles.bottomNavIcon}>🧭</Text>
            <Text style={styles.bottomNavText}>Explore</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewContainer: { 
    flex: 1, backgroundColor: "black", 
    padding: 16 },

  mainContainer: { 
    flex: 1, backgroundColor: "#000" },
    
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: 10, 
    backgroundColor: "#000" },

  headerLeft: { 
    flexDirection: "row", 
    alignItems: "center" },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: { 
    width: 70, 
    height: 30,
  },

  headerRight: { 
    flexDirection: "row", 
    alignItems: "center" },
    
  iconContainer: { 
    marginHorizontal: 8, 
    position: "relative" },

  icon: { 
    fontSize: 20 },

  notificationBadge: { 
    position: "absolute", 
    top: -5, 
    right: -5, 
    backgroundColor: "red", 
    borderRadius: 10, 
    paddingHorizontal: 4, 
    fontSize: 10, 
    color: "#fff" },

  profileIcon: { 
    width: 30, 
    height: 30, 
    borderRadius: 15, 
    backgroundColor: "#666", 
    justifyContent: "center", 
    alignItems: "center", 
    marginLeft: 8 },

  navMenu: { 
    backgroundColor: "black", 
    paddingVertical: 4, 
    marginBottom: 10 },

  navItem: { 
    paddingHorizontal: 15, 
    paddingVertical: 4, 
    marginHorizontal: 4, 
    backgroundColor: "#272727", 
    borderRadius: 8 },

  navText: { 
    color: "#fff", 
    fontSize: 14 },

  mainContent: { 
    flex: 1 },

  videoCard: { 
    marginBottom: 20 },
    
  thumbnail: { 
    width: "100%", 
    height: 200 },

  videoInfo: { 
    flexDirection: "row",
     padding: 10 },

  channelIcon: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    marginRight: 10 },

  videoDetails: { 
    flex: 1 },

  videoTitle: { 
    color: "#fff", 
    fontSize: 16, 
    marginBottom: 4 },

  channelName: { 
    color: "#999", 
    fontSize: 14 },

  shortsHeader: { 
    color: "#fff", 
    fontSize: 20, 
    fontWeight: "bold", 
    padding: 10 },

  shortsContainer: { 
    paddingLeft: 10 },

  shortCard: { 
    marginRight: 10, 
    width: 150 },
    
  shortThumbnail: { 
    width: 150, 
    height: 250, 
    borderRadius: 8 },

  shortTitle: { 
    color: "#fff", 
    fontSize: 14, 
    marginTop: 4 },

  bottomNav: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    paddingVertical: 10, 
    borderTopWidth: 1, 
    borderTopColor: "#272727" },

  bottomNavItem: { 
    alignItems: "center" },

  bottomNavIcon: { 
    fontSize: 24, marginBottom: 4 },

  bottomNavText: { 
    color: "#fff", 
    fontSize: 12 },

  alertButtonContainer: { 
    alignItems: "center", 
    justifyContent: "center", 
    marginVertical: 10 },

  alertButton: { 
    backgroundColor: "#FF0000", 
    padding: 15, 
    borderRadius: 8, 
    marginHorizontal: 20, 
    alignItems: "center" },

  alertButtonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold" },

  logoText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  debug: { 
    backgroundColor: "red" },
});

export default MainPage;