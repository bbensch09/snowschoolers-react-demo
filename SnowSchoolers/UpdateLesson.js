import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

class UpdateLesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessonType: '',
      mountain: '',
      lessonDate: '',
      slot: '',
      lessonLength: '',
      startTime: '',
      students: [],
      lessonLevel: '',
      lessonObjectives: '',
      agree: false,
    };
  }
  _onPressGoBack() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={this.props.style.container}>
        <ScrollView style={{marginTop: 40}}>
          <Text style={styles.heading}>
            Update Your Lesson
          </Text>
          <Text style={styles.heading2}>Basic <Text style={{fontWeight: 'bold'}}>Info</Text></Text>

          <Text style={styles.controlLabel}>Lesson Type</Text>
          <TextInput
            placeholder="Lesson Type"
            style={[styles.inputText, styles.formControl]}
            value={this.state.lessonType}
            onChangeText={(text) => this.setState({lessonType: text})}
          />

          <Text style={styles.controlLabel}>Mountain</Text>
          <TextInput
            placeholder="Mountain"
            style={[styles.inputText, styles.formControl]}
            value={this.state.mountain}
            onChangeText={(text) => this.setState({mountain: text})}
          />

          <Text style={styles.controlLabel}>Date</Text>
          <TextInput
            placeholder="Date"
            style={[styles.inputText, styles.formControl]}
            value={this.state.lessonDate}
            onChangeText={(text) => this.setState({lessonDate: text})}
          />

          <Text style={styles.controlLabel}>Slot</Text>
          <TextInput
            placeholder="Slot"
            style={[styles.inputText, styles.formControl]}
            value={this.state.slot}
            onChangeText={(text) => this.setState({slot: text})}
          />

          <Text style={styles.controlLabel}>Length</Text>
          <TextInput
            placeholder="Length"
            style={[styles.inputText, styles.formControl]}
            value={this.state.lessonLength}
            onChangeText={(text) => this.setState({lessonLength: text})}
          />

          <Text style={styles.controlLabel}>Start Time</Text>
          <TextInput
            placeholder="Pick a start time"
            style={[styles.inputText, styles.formControl]}
            value={this.state.startTime}
            onChangeText={(text) => this.setState({startTime: text})}
          />

          <Text style={styles.heading2}>Student <Text style={{fontWeight: 'bold'}}>Info</Text></Text>
          <TouchableOpacity style={[styles.button, styles.formControl, styles.btnSuccess]} onPress={() => null}>
            <Text style={styles.buttonText}>
              Add Student
            </Text>
          </TouchableOpacity>

          {/* Todo: Add Student section */}


          <Text style={styles.heading2}>Lesson Objectives</Text>

          <Text style={styles.controlLabel}>Skill Level</Text>
          <TextInput
            placeholder="Ability Level"
            style={[styles.inputText, styles.formControl]}
            value={this.state.lessonLevel}
            onChangeText={(text) => this.setState({lessonLevel: text})}
          />

          <Text style={styles.controlLabel}>Objectives</Text>
          <TextInput
            placeholder="What do you hope to get out of this lesson?"
            style={[styles.inputText, styles.formControl]}
            numberOfLines={5}
            multiline={true}
            value={this.state.lessonObjectives}
            onChangeText={(text) => this.setState({lessonObjectives: text})}
          />

          <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 16}}>
            <TouchableOpacity
              style={{width: 20, height: 20, backgroundColor: 'green'}}
              onPress={() => this.setState({agree: !this.state.agree})}
            >
              <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold'}}>{this.state.agree ? 'X' : ''}</Text>
            </TouchableOpacity>
            <Text>I agree to the Terms and Conditions</Text>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={[styles.button, styles.formControl, styles.btnSuccess]} onPress={() => this.props.navigator.push({
            id: 'lessondetails'
          })}>
            <Text style={styles.buttonText}>
              Submit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.formControl, styles.btnSuccess]}
            onPress={this._onPressGoBack.bind(this)}>
            <Text style={styles.buttonText}>
              Go Back
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: 'blue',
//     fontWeight: 'bold',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

const styles = StyleSheet.create({
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
  btnSuccess: {
    backgroundColor: '#5cb85c',
    borderColor: '#4cae4c',
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
  controlLabel: {
    fontWeight: 'bold',
    marginLeft: 16,
  },
  heading: {
    fontSize: 22,
    marginLeft: 12,
  },
  heading2: {
    fontSize: 16,
    marginLeft: 12,
  }
});

export default UpdateLesson;
