import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

class BookLesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessonType: "",
      mountain: "",
      lessonDate: "",
      lessonLength: "",
    };
  }
  _onPressGoBack() {
    this.props.navigator.pop();
  }
  _getDebugState() {
    var debugState = [];
    for (var key in this.state) {
      debugState.push(
        <Text key={key}>{key}: {this.state[key]}{"\n"}</Text>
      );
    }
    return debugState;
  }
  render() {
    // Use this to display the state on the screen with Text components
    var debugState = this._getDebugState();

    return (
      <View style={this.props.style.container}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text>Debug:</Text>
          <Text>{debugState}</Text>

          <Text style={{ alignSelf: 'center', fontWeight: 'bold', textDecorationLine: 'underline' }}>
            Book a Lesson Today
          </Text>
          <Text style={{ paddingLeft: 20, paddingRight: 20 }}>
            Personalized one-on-one attention from an expert
            <Text style={{fontWeight: 'bold'}}> Snow Schoolers </Text>
            instructor is the best way to experience the Snowies!
          </Text>
        </View>

        <View style={{ flex: 1, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'stretch' }}>
          <TextInput
            style={[styles.inputText, styles.formControl]}
            placeholder="Lesson Type"
            value={this.state.lessonType}
            onChangeText={(text) => this.setState({lessonType: text})}
          />

          <TextInput
            style={[styles.inputText, styles.formControl]}
            placeholder="Mountain"
            value={this.state.mountain}
            onChangeText={(text) => this.setState({mountain: text})}
          />

          <TextInput
            style={[styles.inputText, styles.formControl]}
            placeholder="Date"
            value={this.state.lessonDate}
            onChangeText={(text) => this.setState({lessonDate: text})}
          />

          <TextInput
            style={[styles.inputText, styles.formControl]}
            placeholder="Length"
            value={this.state.lessonLength}
            onChangeText={(text) => this.setState({lessonLength: text})}
          />

          <TouchableOpacity style={[styles.button, styles.formControl, styles.btnInfo]} onPress={() => this.props.navigator.push({
            id: 'updatelesson'
          })}>
            <Text style={styles.buttonText}>
              Book Lesson
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.formControl, styles.btnInfo]} onPress={this._onPressGoBack.bind(this)}>
            <Text style={styles.buttonText}>
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  //   color: 'blue',
  //   fontWeight: 'bold',
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
  inputText: {
    //flex: 1,
    alignSelf: 'stretch',
    height: 25,
    backgroundColor: 'antiquewhite',
  },
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
    borderRadius: 6,
    height: 40,
  },
});

export default BookLesson;
