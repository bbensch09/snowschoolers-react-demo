import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class LessonDetails extends Component {
  _onPressGoBack() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={[styles.lessonDetails, {fontSize: 40}]}>
          Lesson Details
        </Text>
        <Text style={[styles.lessonDetails, {color: 'gray'}]}>
          Requester: Brian Student
        </Text>
        <Text style={[styles.lessonDetails, {color: 'gray'}]}>
          No instructor assigned yet
        </Text>
        <Text style={styles.lessonDetails}>Basic Info</Text>

        <Text style={styles.label}>Lesson Type:</Text>
        <View style={styles.textContainer}><Text style={styles.text}>Snowboard</Text></View>

        <Text style={styles.label}>Mountain:</Text>
        <View style={styles.textContainer}><Text style={styles.text}>Alta</Text></View>

        <Text style={styles.label}>Date:</Text>
        <View style={styles.textContainer}><Text style={styles.text}>2016-08-28</Text></View>

        <Text style={styles.label}>Slot:</Text>
        <View style={styles.textContainer}><Text style={styles.text}>Morning</Text></View>

        <Text style={styles.label}>Duration:</Text>
        <View style={styles.textContainer}><Text style={styles.text}>2 hours</Text></View>

        <Text style={styles.label}>Start Time:</Text>
        <View style={styles.textContainer}><Text style={styles.text}>9:00 am</Text></View>

        <Text style={styles.label}>Skill Level:</Text>
        <View style={styles.textContainer}><Text style={styles.text}>Beginner</Text></View>

        <Text style={styles.label}>Objectives:</Text>
        <View style={styles.textContainer}><Text style={styles.text}>Learn to ski then win the Olympics!</Text></View>

        <TouchableOpacity
          onPress={this._onPressGoBack.bind(this)}
          style={styles.backButton}
          activeOpacity={0.7}>
          <Text style={styles.buttonText}>
            Go Back
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    padding: 5,
    fontSize: 15,
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    backgroundColor: 'lightgray',
    alignSelf: 'flex-start',
    borderColor: 'silver',
    borderRadius: 5,
    borderWidth: 2,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  text: {
    fontSize: 15,
    flex: 1,
    color: 'blue',
    fontWeight: 'bold',
  },
  lessonDetails: {
    alignSelf: 'flex-start',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  backButton: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'blue',
    flexDirection: 'row',
    padding: 10,
    margin: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

// export default LessonDetails;
