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
        <Image source={require('../images/tetons.jpg')} style={styles.backgroundImage}>
          <Text style={this.props.style.welcome}>
            Welcome to SnowSchoolers!
          </Text>

          <Text style={this.props.style.instructions}>
            Experience the Snowies with personalized lessons
          </Text>

          <TouchableOpacity onPress={this._onPressBookLesson.bind(this)}>
            <Text>
              Book Lesson
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this._navigate('updatelesson')}>
            <Text>
              Update Lesson
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this._navigate('lessondetails')}>
            <Text>
              Lesson Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this._navigate('whatsnext')}>
            <Text>
              Whats Next
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressNotFound.bind(this)}>
            <Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    //resizeMode: 'cover',
  },
});

export default Home;
