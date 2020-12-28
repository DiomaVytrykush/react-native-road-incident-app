import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {addIncedent} from '../redux/actions/incidents';

const ModalWindow = ({modalVisible, setModalVisible, addIncedent}) => {
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
      addIncedent(title, description, latitude, longitude);
      setModalVisible(!modalVisible);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {modalElement('Title:', title, setTitle)}
          {modalElement('Description:', description, setDescription)}
          <Text>Coordinates:</Text>
          {modalElement('Latitude:', latitude, setLatitude)}
          {modalElement('Longitude:', longitude, setLongitude)}
          <TouchableOpacity
            style={styles.openButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.openButton, backgroundColor: 'green'}}
            onPress={() => addIncedentFucn()}>
            <Text style={styles.textStyle}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
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
  openButton: {
    marginTop: 50,
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalElement: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addIncedent: (title, description, latitude, longitude) =>
      dispatch(addIncedent(title, description, latitude, longitude)),
  };
};

export default connect(null, mapDispatchToProps)(ModalWindow);
