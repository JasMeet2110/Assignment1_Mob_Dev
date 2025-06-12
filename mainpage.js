import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

const MainPage = ({ navigation }) => {
  const showAlert = () => {
    Alert.alert('Alert Button pressed');
  };

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.time}>08:55</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>📺</Text>
          </View>
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
      <ScrollView horizontal style={styles.navMenu} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Satsang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Podcasts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Live</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        {/* Featured Video */}
        <TouchableOpacity 
          style={styles.videoCard}
          onPress={() => navigation.navigate('Video')}
          activeOpacity={0.9}
        >
          <Image
            source={{ uri: 'https://pixabay.com/illustrations/youtube-icon-youtube-youtube-logo-6953528/' }}
            style={styles.thumbnail}
          />
          <View style={styles.videoInfo}>
            <Image
              source={{ uri: 'https://pixabay.com/illustrations/car-vehicle-sports-car-racing-car-49278/' }}
              style={styles.channelIcon}
            />
            <View style={styles.videoDetails}>
              <Text style={styles.videoTitle}>Sample Video Title</Text>
              <Text style={styles.channelName}>Channel Name • 1M views • 16 seconds ago</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Shorts Section */}
        <Text style={styles.shortsHeader}>Shorts</Text>
        <ScrollView horizontal style={styles.shortsContainer} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity 
            style={styles.shortCard}
            activeOpacity={0.7}
          >
            <Image
              source={{ uri: 'https://picsum.photos/150/250' }}
              style={styles.shortThumbnail}
            />
            <Text style={styles.shortTitle}>Short #1 😊</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.shortCard}
            activeOpacity={0.7}
          >
            <Image
              source={{ uri: 'https://picsum.photos/150/250' }}
              style={styles.shortThumbnail}
            />
            <Text style={styles.shortTitle}>Short #2 🎥</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Alert Button */}
        <TouchableOpacity style={styles.alertButton} onPress={showAlert}>
        <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>

        {/* Bottom Navigation */}
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

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    color: '#fff',
    fontSize: 16,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginHorizontal: 8,
    position: 'relative',
  },
  icon: {
    fontSize: 20,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 4,
    fontSize: 10,
    color: '#fff',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  navMenu: {
    backgroundColor: '#000',
    paddingVertical: 8,
  },
  navItem: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 4,
    backgroundColor: '#272727',
    borderRadius: 8,
  },
  navText: {
    color: '#fff',
    fontSize: 14,
  },
  mainContent: {
    flex: 1,
  },
  videoCard: {
    marginBottom: 20,
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  videoInfo: {
    flexDirection: 'row',
    padding: 10,
  },
  channelIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  videoDetails: {
    flex: 1,
  },
  videoTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4,
  },
  channelName: {
    color: '#999',
    fontSize: 14,
  },
  shortsHeader: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  shortsContainer: {
    paddingLeft: 10,
  },
  shortCard: {
    marginRight: 10,
    width: 150,
  },
  shortThumbnail: {
    width: 150,
    height: 250,
    borderRadius: 8,
  },
  shortTitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#272727',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  bottomNavText: {
    color: '#fff',
    fontSize: 12,
  },
  alertButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 8,
    margin: 20,
    alignItems: 'center',
  },
  alertButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 8,
    margin: 20,
    alignItems: 'center',
  },
  alertButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainPage;