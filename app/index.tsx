<<<<<<< HEAD
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
=======
import { StyleSheet, Text, View, Image } from "react-native";
>>>>>>> aedfadeb3a6c0f4cf8b4a43f3355555edd492049
import React from "react";

// Create Mock Data for Main Page
//Stories
const stories = [
  {
    id: "1",
    name: "User1",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "User2",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    name: "User3",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: "4",
    name: "User4",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "5",
    name: "User5",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "6",
    name: "User6",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Posts

const posts = [
  {
    id: "1",
    username: "john_doe",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    postImage:
      "https://images.pexels.com/photos/30237034/pexels-photo-30237034/free-photo-of-chateau-de-le-lude-in-golden-hour.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 120,
    caption: "Enjoying the sunset 🌅 #blessed",
  },
  {
    id: "2",
    username: "alice_smith",
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    postImage:
      "https://images.pexels.com/photos/15062488/pexels-photo-15062488/free-photo-of-snow-near-castle-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 98,
    caption: "Best day ever! ☀️",
  },
];

const MainPage = () => {
  return (
<<<<<<< HEAD
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
          }}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Insta Clone</Text>
      </View>

      {/* Stories Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storyContainer}
      >
        {stories.map((story) => (
          <View key={story.id} style={styles.story}>
            <Image source={{ uri: story.image }} style={styles.storyImage} />
            <Text style={styles.storyText} numberOfLines={1}>
              {story.name}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Posts Section */}
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            {/* User Info */}
            <View style={styles.userInfo}>
              <Image
                source={{ uri: item.profileImage }}
                style={styles.profileImage}
              />
              <Text style={styles.username}>{item.username}</Text>
            </View>

            {/* Post Image */}
            <Image source={{ uri: item.postImage }} style={styles.postImage} />

            {/* Likes and Captions */}
            <View style={styles.postDetails}>
              <Text style={styles.likes}>{item.likes} likes</Text>
              <Text style={styles.caption}>
                <Text style={styles.bold}>{item.username}</Text> {item.caption}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Adjust for Android status bar
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#d6249f",
    resizeMode: "cover",
    marginRight: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color : "white" 
  },
  storyContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  story: {
    alignItems: "center",
    marginRight: 15,
    width: 90,
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#d6249f",
    resizeMode: "cover",
  },
  storyText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
    width: 85,
    overflow: "hidden",
    paddingBottom: 15,
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white"
  },
  postImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    resizeMode: "cover",
  },
  postDetails: {
    padding: 10,
  },
  likes: {
    fontWeight: "bold",
    color: "white"
  },
  caption: {
    marginTop: 5,
    color: "white"
  },
    bold: {
        fontWeight: "bold",
    },
});
=======
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
        <View style={styles.musicTab}>
          <Text>Music</Text>
        </View>
        <View style={styles.podcastsTab}>
          <Text>Podcasts</Text>
        </View>
        <View style={styles.newsTab}>
          <Text>News</Text>
        </View>
      </View>

      {/*VIDEOS*/}
      <View>
        <Image
          source={{
            uri: "https://wallpaperaccess.com/full/682452.jpg",
          }}
          style={styles.videoThumbNail}
        />
      </View>
      <View style={styles.videoInfoContainer}>
        <View>
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/2416486.jpg",
            }}
            style={styles.videoAccountIcon}
          />
        </View>
        <View>
          <Text>Chill Relaxing Music - Driving Through Nature</Text>
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
    justifyContent: "space-between",
  },

  navigationTab: {
    width: 25,
    height: 25,
    backgroundColor: "lightgrey",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  allTab: {
    backgroundColor: "lightgrey",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  musicTab: {
    backgroundColor: "lightgrey",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  podcastsTab: {
    backgroundColor: "lightgrey",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  newsTab: {
    backgroundColor: "lightgrey",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  videoThumbNail: {
    width: "auto",
    height: 250,
  },

  videoInfoContainer: {
    flexDirection: "row",
  },

  videoAccountIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
>>>>>>> aedfadeb3a6c0f4cf8b4a43f3355555edd492049
