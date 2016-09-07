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
    let activeOpacityNum = 0.7;
    return (
      <View style={styles.container}>
        <Image source={require('./images/tetons.jpg')} style={styles.backgroundImage}>
          <Text style={styles.welcome}>
            Welcome to SnowSchoolers!
          </Text>

          <Text style={styles.instructions}>
            Experience the Snowies with personalized lessons
          </Text>

          <TouchableOpacity
              style={[styles.button, {marginTop: 50}]}
              onPress={this._onPressBookLesson.bind(this)}
              activeOpacity={activeOpacityNum}>
            <Text style={styles.text}>
              Book Lesson
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={() => this._navigate('updatelesson')}
              activeOpacity={activeOpacityNum}>
            <Text style={styles.text}>
              Update Lesson
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={() => this._navigate('lessondetails')}
              activeOpacity={activeOpacityNum}>
            <Text style={styles.text}>
              Lesson Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={() => this._navigate('whatsnext')}
              activeOpacity={activeOpacityNum}>
            <Text style={styles.text}>
              Whats Next
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={this._onPressNotFound.bind(this)}
              activeOpacity={activeOpacityNum}>
            <Text style={styles.text}>
              Not Found
            </Text>
          </TouchableOpacity>
        </Image>
      </View>
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
    // flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // resizeMode: 'cover',
  },
  button: {
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: 'blue',
    borderRadius: 12,
    width: 300,
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 45,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
  // home page instructions
  instructions: {
    textAlign: 'center',
    color: 'yellow',
    marginBottom: 5,
    fontSize: 16,
  },

});

// export default Home;
