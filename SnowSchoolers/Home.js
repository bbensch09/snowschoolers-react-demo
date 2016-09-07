import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

class Home extends Component {
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
    return (
      <View style={this.props.style.container}>
        <Image source={require('./images/tetons.jpg')} style={styles.backgroundImage}>
          <Text style={this.props.style.welcome}>
            Welcome to SnowSchoolers!
          </Text>

          <Text style={this.props.style.instructions}>
            Experience the Snowies with personalized lessons
          </Text>

          <TouchableOpacity style={styles.button} onPress={this._onPressBookLesson.bind(this)}>
            <Text style={styles.text}>
              Book Lesson
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this._navigate('updatelesson')}>
            <Text style={styles.text}>
              Update Lesson
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this._navigate('lessondetails')}>
            <Text style={styles.text}>
              Lesson Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this._navigate('whatsnext')}>
            <Text style={styles.text}>
              Whats Next
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this._onPressNotFound.bind(this)}>
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
  backgroundImage: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    //resizeMode: 'cover',
  },
  button: {
    
  },
  text: {
    fontSize: 20,
  },

});

export default Home;
