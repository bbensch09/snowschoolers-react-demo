import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Home extends Component {
  _navigate(id) {
    this.props.navigator.push({
      id: id
    });
  }
  _onPressBookLesson() {
    this._navigate('booklesson');
  }
  _onPressNotFound() {
    this._navigate('notfound');
  }
  render() {
    const ActiveOpacityNum = 0.7;
    return (

      <Image source={require('../images/tetons.jpg')} style={styles.backgroundImage}>
        <Text style={styles.welcome}>
          Snow Schoolers
        </Text>

        <Text style={styles.instructions}>
          Experience the Snowies with personalized lessons
        </Text>

        <TouchableOpacity
            style={[styles.button, {marginTop: 20}]}
            onPress={this._onPressBookLesson.bind(this)}
            activeOpacity={ActiveOpacityNum}>
          <Text style={styles.text}>
            Book Lesson
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => this._navigate('updatelesson')}
            activeOpacity={ActiveOpacityNum}>
          <Text style={styles.text}>
            Update Lesson
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => this._navigate('lessondetails')}
            activeOpacity={ActiveOpacityNum}>
          <Text style={styles.text}>
            Lesson Details
          </Text>
        </TouchableOpacity>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    // backgroundColor: '#F5FCFF',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // resizeMode: 'stretch',
    width: undefined,
    height: undefined,
  },
  button: {
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: 'navy',
    borderRadius: 8,
    width: 300,
    margin: 8,
    padding: 10,
  },
  text: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontWeight: 'bold',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  // home page instructions
  instructions: {
    textAlign: 'center',
    color: 'cyan',
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 3,
  },

});

// export default Home;
