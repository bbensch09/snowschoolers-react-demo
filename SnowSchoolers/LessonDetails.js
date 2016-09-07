import React, { Component } from 'react';
import {
  Image,
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
      <View style={styles.container}>
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

        <TouchableOpacity>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
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
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    borderColor: 'silver',
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {
    fontSize: 15,
    flex: 1,
  },
  lessonDetails: {
    alignSelf: 'flex-start',
    fontSize: 20,
    margin: 10,
  },
});

// export default LessonDetails;
