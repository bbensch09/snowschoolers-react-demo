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
  constructor(props) {
    super(props);
    this.state = {
      instructor: 'No instructor assigned yet',
      showButton: true,
    }
  }

  _onPressGoBack() {
    this.props.navigator.pop();
  }

  confirmInstructor() {
    this.setState({
      instructor: 'Your instructor is Jon Snow',
      showButton: false,
    })
  }

  hideButton() {
    if (this.state.showButton) {
      return (
        <TouchableOpacity
          onPress={this.confirmInstructor.bind(this)}
          style={[styles.backButton, {backgroundColor: 'green'}]}
          activeOpacity={0.7}>
          <Text style={styles.buttonText}>
            Accept This Lesson Request
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
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
          {this.state.instructor}
        </Text>

        <View>
          <Text style={styles.lessonDetails}>Basic <Text style={{fontWeight: 'bold'}}>Info</Text></Text>

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
        </View>

        <View>
          <Text style={styles.lessonDetails}>Objectives <Text style={{fontWeight: 'bold'}}>and Experience</Text></Text>

          <Text style={styles.label}>Skill Level:</Text>
          <View style={styles.textContainer}><Text style={styles.text}>Beginner</Text></View>

          <Text style={styles.label}>Objectives:</Text>
          <View style={styles.textContainer}><Text style={styles.text}>Learn to ski then win the Olympics!</Text></View>
        </View>

        <View>
          <Text style={styles.lessonDetails}>Student <Text style={{fontWeight: 'bold'}}>Info</Text></Text>
          <Text style={styles.label}>Name: <Text style={{fontWeight: 'normal'}}>Brian Student</Text></Text>
          <Text style={styles.label}>Age Range: <Text style={{fontWeight: 'normal'}}>Under 10</Text></Text>
          <Text style={styles.label}>Gender: <Text style={{fontWeight: 'normal'}}>Male</Text></Text>
          <Text style={styles.label}>About the student: <Text style={{fontWeight: 'normal'}}>I am the student</Text></Text>
          <Text style={styles.label}>Previous Experience: <Text style={{fontWeight: 'normal'}}>Snowboarded a total of 3 times or less</Text></Text>
        </View>

        {this.hideButton()}

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
    // fontWeight: 'bold',
  },
  backButton: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#5bc0de',
    flexDirection: 'row',
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

// export default LessonDetails;
