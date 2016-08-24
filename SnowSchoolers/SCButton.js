import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export default
class SCButton extends Component {
  render() {
    let color;
    switch(this.props.color) {
      case 'info':
        color = styles.btnInfo;
        break;
      default:
        color = styles.btnDefault;
    }
    return (
      <TouchableOpacity style={[styles.button, styles.formControl, color]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    //flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 25,
    backgroundColor: 'rgb(242, 242, 242)',
  },
  btnInfo: {
    backgroundColor: '#5bc0de',
    borderColor: '#46b8da',
  },
  btnDefault: {
    backgroundColor: 'rgba(255, 253, 250, 1)',
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  formControl: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    padding: 6,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
