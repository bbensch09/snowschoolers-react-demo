import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

export default
class SCTextInput extends Component {
  render() {
    return (
      <View>
        <Text style={styles.controlLabel}>{this.props.placeholder}</Text>
        <TextInput
          placeholder={this.props.placeholder}
          style={[styles.inputText, styles.formControl]}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    //flex: 1,
    alignSelf: 'stretch',
    height: 25,
    backgroundColor: 'antiquewhite',
  },
  formControl: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    padding: 6,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    height: 40,
  },
  controlLabel: {
    fontWeight: 'bold',
    marginLeft: 16,
  },
});
