import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class NotFound extends Component {
  _onPressGoBack() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          404 Not Found!! :(
        </Text>
        <TouchableOpacity onPress={this._onPressGoBack.bind(this)}>
          <Text>
            Go Back
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

export default NotFound;
