import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    // Fonction pour naviguer vers une autre page
    const handleStartGamePress = () => {
        navigation.navigate('Game');
    };

    
  return (
    <View style={styles.body}>
      <View style={styles.nav}>
        <View style={styles.navItemsContainer}>
          <TouchableOpacity style={styles.navItem}>
          <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
          <AntDesign name="setting" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.navLogoContainer}>
          <Image style={styles.logo} source={require('./integration/images/logo.png')} />
        </View>
      </View>
        <View style={styles.boardContainer}>
          <Text style={styles.boardDate}>Stats du 4 mars 2024</Text>
          <View style={styles.board}>
            <View style={styles.boardResultNumber}>
              <Text style={styles.boardResultNumberTitle}>Trouvé par 100 personnes</Text>
            </View>
          </View>
        </View>

      <View style={styles.startGameButtonContainer}>
        <TouchableOpacity style={styles.startGameButton} onPress={handleStartGamePress}>
          <Text>Commencer à jouer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#1F1F1F',
    height: '100%',
  },
  nav: {
    marginTop: 40,
    height: '20%',
  },
  navItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    height: '50%',
  },
  navItem: {
    borderRadius: 25,
    width: 50,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDD604',
    color: '#1F1F1F',
    borderWidth: 0,
    marginHorizontal: 5,
  },
  navLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 100,
  },
  boardContainer: {
    marginTop: 30,
    height: '50%',
  },
  boardDate: {
    marginVertical: 5,
    color: '#FDD604',
    fontSize: 16,
    letterSpacing: 1,
    textAlign: 'center',
  },
  board: {
    height: '80%',
    borderColor: '#FDD604',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  boardResultNumber: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontSize: 20,
    color: '#FDD604',
    marginVertical: 10,
  },
  boardResultNumberTitle: {
    color: 'white',
  },
  boardTable: {
    width: '100%',
    borderColor: '#FDD604',
    borderWidth: 1,
    borderRadius: 10,
  },
  startGameButtonContainer: {
    backgroundColor: '#FDD604',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startGameButton: {
    borderRadius: 10,
    height: 50,
    width: '60%',
    paddingHorizontal: 20,
    backgroundColor: '#FDD604',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
