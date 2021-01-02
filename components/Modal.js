import React from 'react';
import {View, Text, StyleSheet, Modal, TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import {addIncident} from '../redux/actions/incidents';
import Button from './Button';

const ModalWindow = ({modalVisible, setModalVisible, addIncident}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');

  const modalElement = (label, value, setValue) => {
    return (
      <View style={styles.modalElement}>
        <Text>{label}</Text>
        <TextInput
          value={value}
          onChangeText={(e) => setValue(e)}
          placeholder="Write here"
          style={styles.input}
        />
      </View>
    );
  };

  const addIncedentFucn = () => {
    if (
      title.trim() === '' ||
      description.trim() === '' ||
      latitude.trim() === '' ||
      longitude.trim() === ''
    ) {
      Alert.alert('All filds are required');
    } else {
      addIncident(title, description, latitude, longitude);
      setModalVisible(!modalVisible);
    }
  };

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {modalElement('Title:', title, setTitle)}
          {modalElement('Description:', description, setDescription)}
          <Text style={{marginVertical:10}}>Coordinates:</Text>
          {modalElement('Latitude:', latitude, setLatitude)}
          {modalElement('Longitude:', longitude, setLongitude)}
          <View style={styles.buttonWrapper}>
            <Button
              text={'Hide Modal'}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              styleButton={{width: '45%'}}
            />
            <Button
              text={'Create'}
              onPress={() => addIncedentFucn()}
              styleButton={{width: '45%', backgroundColor: '#238057'}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(100,100,100, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonWrapper: {
    flex: 1,
    marginVertical: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginVertical: 10,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addIncident: (title, description, latitude, longitude) =>
      dispatch(addIncident(title, description, latitude, longitude)),
  };
};

export default connect(null, mapDispatchToProps)(ModalWindow);
