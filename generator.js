import React,{useEffect,useState} from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import axios from 'axios'; 

export default class Generator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Random fact generator</Text>
          <Image source={require("./assets/dog.jpg")} style={styles.dog} />
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.title}>Click here for a random fact</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleFactButtonPress}
          >
            <Image source={require("./assets/arrow.png")} style={styles.arrow} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleFactButtonPress = async () => {
    try {
      const response = await axios.get('https://api-ninjas.com/api/facts');
      const fact = response.data.fact;
      alert(fact); 
    } catch (error) {
      console.error('Error fetching random fact:', error);
      alert('Error fetching random fact. Please try again.');
    }
  };

    
     






}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingLeft: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: 'black',
    fontSize: 40,
    marginRight: 10,
  },
  dog: {
    height: 100,
    width: 100,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Times New Roman',
    marginBottom: 10,
  },
  arrow: {
    width: 30,
    height: 30
  }
});
