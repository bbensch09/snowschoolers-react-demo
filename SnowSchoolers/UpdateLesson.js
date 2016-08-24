import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import SCTextInput from './SCTextInput';
import SCButton from './SCButton';

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
  componentWillMount() {
    console.log(this.props);
    var lessonId = this.props.lessonId;
    // if no lesson id was given, set it to 1
    if (!lessonId) { lessonId = 1; }

    fetch('http://localhost:3000/lessons/' + lessonId)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

        // Update the state to reflect the data in the backend
        this.setState({
          lessonType: responseJson.activity,
          mountain: responseJson.location,
          lessonDate: "2016-08-18",
          slot: "Morning"
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  _onPressSubmit() {
    console.log("UpdateLesson: _onPressSubmit()");
    // lessonId is passed via props from previous scene
    // (should it be made into a state property?)
    var lessonId = this.props.lessonId;

    fetch('http://localhost:3000/lessons/' + lessonId, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        activity: this.state.lessonType,
        location: this.state.mountain,
        lesson_time_id: 1,
        ability_level: this.state.lessonLevel,
        objectives: this.state.lessonObjectives,
        terms_accepted: this.state.agree,
        start_time: this.state.startTime,
        instructor_id: 1,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

        this.props.navigator.push({
          id: 'lessondetails'
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={[this.props.style.container, { backgroundColor: 'rgba(222, 250, 250, 1)' }]}>
        <ScrollView style={{marginTop: 40}}>
          <Text style={styles.heading}>
            Update Your Lesson
          </Text>
          <Text style={styles.heading2}>Basic <Text style={{fontWeight: 'bold'}}>Info</Text></Text>

          <SCTextInput
            placeholder="LessonType"
            value={this.state.lessonType}
            onChangeText={(text) => this.setState({lessonType: text})}
          />

          <SCTextInput
            placeholder="Mountain"
            value={this.state.mountain}
            onChangeText={(text) => this.setState({mountain: text})}
          />

          <SCTextInput
            placeholder="Date"
            value={this.state.lessonDate}
            onChangeText={(text) => this.setState({lessonDate: text})}
          />

          <SCTextInput
            placeholder="Slot"
            value={this.state.slot}
            onChangeText={(text) => this.setState({slot: text})}
          />

          <SCTextInput
            placeholder="Length"
            value={this.state.lessonLength}
            onChangeText={(text) => this.setState({lessonLength: text})}
          />

          <SCTextInput
            placeholder="Pick a start time"
            label="Start Time"
            value={this.state.startTime}
            onChangeText={(text) => this.setState({startTime: text})}
          />

          <Text style={styles.heading2}>Student <Text style={{fontWeight: 'bold'}}>Info</Text></Text>
          <SCButton
            label="Add Student"
            color="success"
            onPress={() => null}
          />

          {/* Todo: Add Student section */}


          <Text style={styles.heading2}>Lesson Objectives</Text>

          <SCTextInput
            placeholder="Ability Level"
            label="Skill Level"
            value={this.state.lessonLevel}
            onChangeText={(text) => this.setState({lessonLevel: text})}
          />

          {/* right now multiline is not working . . .*/}
          <SCTextInput
            placeholder="What do you hope to get out of this lesson?"
            label="Objectives"
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
          <SCButton
            label="Submit"
            color="success"
            onPress={this._onPressSubmit.bind(this)}
          />

          <SCButton
            label="Go Back"
            color="success"
            onPress={this._onPressGoBack.bind(this)}
          />
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
