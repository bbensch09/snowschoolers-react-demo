import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Picker,
  Modal,
  DatePickerIOS
} from 'react-native';

import SCButton from './SCButton';

class BookLesson extends Component {
  constructor(props) {
    super(props);

    //var timezone = (-1) * (new Date()).getTimezoneOffset() / 6;

    this.state = {
      lessonType: "",
      mountain: "",
      lessonDate: new Date().toISOString().slice(0, 10),
      lessonLength: "",
      modalVisible: false,
      activeModal: "lessonType",
      // for the DatePickerIOS component:
      timeZoneOffsetInHours: ""//timezone
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
  _onPressSubmit() {
    console.log("making POST req to make lesson. . . ");
    fetch('http://localhost:3000/lessons', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        activity: this.state.lessonType,
        location: this.state.mountain,
        lesson_time_id: 1,
        instructor_id: 1
      })
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);

      // the fake backend returns back the object with id included of the
      // from the thing you have just submitted
      var newLessonId = responseJson.id;

      this.props.navigator.push({
        id: 'updatelesson',
        passProps: {
          lessonId: newLessonId, // pass the lesson id to the next component via props
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });

  }
  setModalVisible(visible, pickerType) {
    this.setState({ modalVisible: visible, activeModal: pickerType });
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
    // Use this to display the state on the screen with Text components
    var debugState = this._getDebugState();
    const items = ["Ski", "Mountain"];
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
    else if (this.state.activeModal === 'lessonLength') {
      modalPicker =
      <Picker selectedValue={this.state.lessonLength}
        onValueChange={(lessonLength) => this.setState({lessonLength})}
        style={styles.pickerArea}>
        <Picker.Item label="" value="" />
        <Picker.Item label="Morning" value="Morning" />
        <Picker.Item label="Afternoon" value="Afternoon" />
        <Picker.Item label="Full Day" value="Full Day" />
      </Picker>
    }

    return (
      <View style={this.props.style.container}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          {/*<Text>Debug:</Text>
          <Text>{debugState}</Text>*/}

          <Text style={this.props.style.welcome}>SnowSchoolers</Text>

          <View style={{borderWidth: 2, borderRadius: 12, marginLeft: 20, marginRight: 20, paddingTop: 20, paddingBottom: 20}}>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', textDecorationLine: 'underline' }}>
              Book a Lesson Today
            </Text>
            <Text style={{ paddingLeft: 20, paddingRight: 20 }}>
              Personalized one-on-one attention from an expert
              <Text style={{fontWeight: 'bold'}}> Snow Schoolers </Text>
              instructor is the best way to experience the Snowies!
            </Text>
          </View>
        </View>

        <View style={{ flex: 2, backgroundColor: 'rgba(222, 250, 250, 1)', justifyContent: 'center', alignItems: 'stretch' }}>

          <TouchableHighlight
            style={[styles.inputText, styles.formControl]}
            onPress={() => this.setModalVisible(!this.state.modalVisible, 'lessonType')}
            underlayColor={'gray'}>
            <Text>{this.state.lessonType ? this.state.lessonType : 'Lesson Type'}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.inputText, styles.formControl]}
            onPress={() => this.setModalVisible(!this.state.modalVisible, 'mountain')}>
            <Text>{this.state.mountain ? this.state.mountain : 'Mountain'}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.inputText, styles.formControl]}
            onPress={() => this.setModalVisible(!this.state.modalVisible, 'lessonDate')}>
            <Text>{this.state.lessonDate ? this.state.lessonDate : 'Date'}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.inputText, styles.formControl]}
            onPress={() => this.setModalVisible(!this.state.modalVisible, 'lessonLength')}>
            <Text>{this.state.lessonLength ? this.state.lessonLength : 'Length'}</Text>
          </TouchableHighlight>

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

          <SCButton
            label='Book Lesson'
            color='info'
            onPress={this._onPressSubmit.bind(this)}
          />

          <SCButton
            label='Go Back'
            color='info'
            onPress={this._onPressGoBack.bind(this)}
          />
        </View>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});

export default BookLesson;
