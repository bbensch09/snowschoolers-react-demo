import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ScrollView,
  Picker,
  Modal,
  DatePickerIOS,
} from 'react-native';

import SCTextInput from './SCTextInput';
import SCButton from './SCButton';

class UpdateLesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessonType: '',
      mountain: '',
      lessonDate: new Date().toISOString().slice(0, 10),
      timeZoneOffsetInHours: "",//timezone
      slot: '',
      lessonLength: '', // this is different from the one in BookLesson!
      startTime: '',
      students: [],
      lessonLevel: '',
      lessonObjectives: '',
      agree: false,
      modalVisible: false,
      activeModal: 'lessonType'
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
          id: 'home'
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  setModalVisible(visible, pickerType) {
    if (pickerType) {
      this.setState({ modalVisible: visible, activeModal: pickerType });
    }
    else {
      this.setState({ modalVisible: visible });
    }
  }
  onLessonDateChange(lessonDate) {
    this.setState({lessonDate: lessonDate.toISOString().slice(0, 10)});
  }
  onTimezoneChange(event) {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  }
  render() {
    var modalPicker;

    if (this.state.activeModal === 'lessonType') {
      modalPicker =
      <Picker selectedValue={this.state.lessonType}
        onValueChange={(lessonType) => this.setState({lessonType})}
        style={styles.pickerArea}>
        <Picker.Item label="" value="" />
        <Picker.Item label="Ski" value="Ski" />
        <Picker.Item label="Snowboard" value="Snowboard" />
      </Picker>
    }
    else if (this.state.activeModal === 'mountain') {
      modalPicker =
      <Picker selectedValue={this.state.mountain}
        onValueChange={(mountain) => this.setState({mountain})}
        style={styles.pickerArea}>
        <Picker.Item label="" value="" />
        <Picker.Item label="Mt. Hotham" value="Mt. Hotham" />
        <Picker.Item label="Falls Creek" value="Falls Creek" />
        <Picker.Item label="Mt. Buller" value="Mt. Buller" />
      </Picker>
    }
    else if (this.state.activeModal === 'lessonDate') {
      modalPicker =
      <DatePickerIOS
        date={new Date(this.state.lessonDate)}
        mode="date"
        timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
        onDateChange={this.onLessonDateChange.bind(this)}
      />
    }
    else if (this.state.activeModal === 'slot') {
      modalPicker =
      <Picker selectedValue={this.state.slot}
        onValueChange={(slot) => this.setState({slot})}
        style={styles.pickerArea}>
        <Picker.Item label="" value="" />
        <Picker.Item label="Morning" value="Morning" />
        <Picker.Item label="Afternoon" value="Afternoon" />
        <Picker.Item label="Full Day" value="Full Day" />
      </Picker>
    }
    /*
      inconsistency: in the web app, lessonLength in BookLesson
      should have been 'slot'; Be aware in this scene that lessonLength will
      be for: 2 hours, 3 hours, or 6 hours, and not the morning,
      afternoon, full day!
    */
    else if (this.state.activeModal === 'lessonLength') {
      modalPicker =
      <Picker selectedValue={this.state.lessonLength}
        onValueChange={(lessonLength) => this.setState({lessonLength})}
        style={styles.pickerArea}>
        <Picker.Item label="" value="" />
        <Picker.Item label="2 hours" value="2 hours" />
        <Picker.Item label="3 hours" value="3 hours" />
        <Picker.Item label="6 hours" value="6 hours" />
      </Picker>
    }
    else if (this.state.activeModal === 'startTime') {
      var slots;
      if (this.state.slot === 'Morning' || this.state.slot === 'Full Day') {
        slots = ["9:00am", "9:30am"];
      }
      else if (this.state.slot === 'Afternoon') {
        slots = ["1:00pm", "1:30pm"];
      }
      else {
        slots = [];
      }

      var pickerItems = slots.map((slot) => {
        return <Picker.Item key={slot} label={slot} value={slot} />;
      });

      modalPicker =
      <Picker selectedValue={this.state.startTime}
        onValueChange={(startTime) => this.setState({startTime})}
        style={styles.pickerArea}>
        <Picker.Item label="" value="" />
        {pickerItems}
      </Picker>
    }
    else if (this.state.activeModal === 'lessonLevel') {
      modalPicker =
      <Picker selectedValue={this.state.lessonLevel}
        onValueChange={(lessonLevel) => this.setState({lessonLevel})}
        style={styles.pickerArea}>
        <Picker.Item label="" value="" />
        <Picker.Item label="First-time on the mountain" value="First-time on the mountain" />
        <Picker.Item label="Beginner" value="Beginner" />
        <Picker.Item label="Intermediate" value="Intermediate" />
        <Picker.Item label="Advanced" value="Advanced" />
      </Picker>
    }

    return (
      <View style={[this.props.style.container, { backgroundColor: 'rgba(222, 250, 250, 1)' }]}>
        <ScrollView style={{marginTop: 40}}>
          <Text style={styles.heading}>
            Update Your Lesson
          </Text>

          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => alert("Modal closed")}>

            <View style={styles.modalView}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Please select an option:</Text>

                {modalPicker}

                <SCButton
                  label='OK'
                  color='info'
                  onPress={() => { this.setModalVisible(!this.state.modalVisible)}}
                />
              </View>
            </View>

          </Modal>

          {/*<SCTextInput
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
          />*/}

          <Text style={styles.controlLabel}>Start Time</Text>
          <SCButton
            label={this.state.startTime ? this.state.startTime : "Pick a start time"}
            onPress={() => this.setModalVisible(!this.state.modalVisible, 'startTime')}
          />

          <Text style={styles.heading2}>Student <Text style={{fontWeight: 'bold'}}>Info</Text></Text>
          <SCButton
            label="Add Student"
            color="success"
            onPress={() => null}
          />

          {/* Todo: Add Student section */}


          <Text style={styles.heading2}>Lesson Objectives</Text>

          <Text style={styles.controlLabel}>Skill Level</Text>
          <SCButton
            label={this.state.lessonLevel ? this.state.lessonLevel : "Skill Level"}
            onPress={() => this.setModalVisible(!this.state.modalVisible, 'lessonLevel')}
          />

          {/* right now multiline is not working . . .*/}
          <SCTextInput
            placeholder="What do you hope to get out of this lesson?"
            label="Objectives"
            style={{height: 60}}
            numberOfLines={4}
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
            label="Previous"
            color="success"
            onPress={this._onPressGoBack.bind(this)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  },
  pickerArea: {
    //height: 50,
    // position: 'relative',
    // flex: 2,
    // borderColor: 'red',
    // borderWidth: 1
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    //borderColor: 'blue',
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  modalContent: {
    backgroundColor: 'white',
    //borderColor: 'gold',
    //borderWidth: 2,
    borderRadius: 6,
    marginLeft: 20,
    marginRight: 20,
    padding: 10
  },
  modalTitle: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16
  },
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlLabel: {
    fontWeight: 'bold',
    marginLeft: 16,
  },
});

export default UpdateLesson;
