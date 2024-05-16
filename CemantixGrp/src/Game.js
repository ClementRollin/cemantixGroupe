import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Game() {
    const navigation = useNavigation();

    // Fonction pour naviguer vers une autre page
    const handleStartHomePress = () => {
        navigation.navigate('Home');
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

      <View style={styles.section}>
        <View style={styles.searchContainer}>
          <Text style={styles.visuallyHidden}>Search:</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Entrez un mot..."
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text>Valider</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.returnButtonContainer}>
        <TouchableOpacity style={styles.returnButton} onPress={handleStartHomePress}>
          <Text>Retour à l'accueil</Text>
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
    button: {
      fontFamily: 'Roboto',
      fontWeight: '700',
      textTransform: 'uppercase',
    },
    nav: {
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
      height: '50%',
    },
    logo: {
      width: 150,
        height: 100,
    },
    section: {
      height: '50%',
    },
    searchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 50,
    },
    searchInput: {
        backgroundColor : 'white',
      width: '50%',
      height: 30,
      borderWidth: 0,
      borderRadius: 10,
      paddingHorizontal: 20,
      fontSize: 18,
    },
    searchButton: {
      borderWidth: 0,
      borderRadius: 10,
      height: 30,
      paddingHorizontal: 20,
      backgroundColor: '#FDD604',
      color: '#1F1F1F',
      cursor: 'pointer',
    },
    visuallyHidden: {
      position: 'absolute',
      width: 1,
      height: 1,
      margin: -1,
      padding: 0,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      borderWidth: 0,
    },
    returnButtonContainer: {
      height: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
    },
    returnButton: {
      borderWidth: 0,
      borderRadius: 10,
      height: 30,
      width: '50%',
      paddingHorizontal: 20,
      backgroundColor: '#FDD604',
      color: '#1F1F1F',
      cursor: 'pointer',
    },
  });
  
