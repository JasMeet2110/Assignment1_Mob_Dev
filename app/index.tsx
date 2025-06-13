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