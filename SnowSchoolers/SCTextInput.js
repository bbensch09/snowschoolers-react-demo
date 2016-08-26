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
    let label = this.props.label;
    // If not given a label, use given placeholder
    if (!label) {
      label = this.props.placeholder;
    }
    return (
      <View>
        <Text style={styles.controlLabel}>{label}</Text>
        <TextInput
          placeholder={this.props.placeholder}
          style={[styles.inputText, styles.formControl, this.props.style]}
          multiline={this.props.multiline}
          numberOfLines={this.props.numberOfLines}
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
    backgroundColor: 'rgba(255, 253, 250, 1)',
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
  },
  controlLabel: {
    fontWeight: 'bold',
    marginLeft: 16,
  },
});
