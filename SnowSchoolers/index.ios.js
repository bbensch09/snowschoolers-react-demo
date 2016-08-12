/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

// Require all custom component views here
import Home from './Home';
import BookLesson from './BookLesson';
import UpdateLesson from './UpdateLesson';
import LessonDetails from './LessonDetails';
import WhatsNext from './WhatsNext';
import NotFound from './NotFound';

class SnowSchoolers extends Component {
  // Define all the routes
  renderScene(route, navigator) {
    var component;

    switch(route.id) {
      case 'home':
        component = <Home navigator={navigator} style={styles} />
        break;

      case 'booklesson':
        component = <BookLesson navigator={navigator} style={styles} />
        break;

      case 'updatelesson':
        component = <UpdateLesson navigator={navigator} style={styles} />
        break;

      case 'lessondetails':
        component = <LessonDetails navigator={navigator} style={styles} />
        break;

      case 'whatsnext':
        component = <WhatsNext navigator={navigator} style={styles} />
        break;

      case 'notfound':
      default:
        component = <NotFound navigator={navigator} style={styles} />
    }

    return component;
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'SnowSchoolers', id: 'home' }}
        renderScene={this.renderScene}
      />
    );
  }
}

// Global styles
const styles = StyleSheet.create({
  // parent container for all the views
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    //backgroundColor: '#F5FCFF',
  },
  // home page welcome message
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
  // home page instructions
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SnowSchoolers', () => SnowSchoolers);
