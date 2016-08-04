import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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

        <TouchableOpacity onPress={this._onPressNotFound.bind(this)}>
          <Text>
            Not Found
          </Text>
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
    backgroundColor: '#F5FCFF',
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
});

export default Home;
