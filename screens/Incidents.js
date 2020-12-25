import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ModalWindow from '../components/Modal';

const incidents = [
  {
    latlng: {
      latitude: 49.4058459,
      longitude: 24.3179882792436,
    },
    id: 0,
    title: 'Hello',
    description: 'description',
    photos: null,
    createdAt: new Date().toISOString().split('T')[0],
  },
  {
    latlng: {
      latitude: 49.44135415341,
      longitude: 24.3441341421,
    },
    id: 1,
    title: 'Hello2',
    description: 'description2',
    photos: null,
    createdAt: new Date().toISOString().split('T')[0],
  },
  {
    latlng: {
      latitude: 49.414235415341,
      longitude: 24.3451341421,
    },
    id: 3,
    title: 'Hello3',
    description: 'description3',
    photos: null,
    createdAt: new Date().toISOString().split('T')[0],
  },
];

const Incidents = ({navigation}) => {
  const [allIncidents, setAllIncident] = React.useState(incidents);
  const [modalVisible, setModalVisible] = React.useState(false);

  const deleteIncident = (id) => {
    const incidentDeleted = allIncidents.filter((item) => item.id !== id);

    setAllIncident(incidentDeleted);
  };

  const addIncident = () => {
    const newIncedent = {
      latlng: {
        latitude: 49.4058459,
        longitude: 24.3179882792436,
      },
      id: 0,
      title: 'Hello',
      description: 'description',
      photos: null,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setAllIncident([...incidents, newIncedent]);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {allIncidents.length != 0 ? (
          <View>
            {allIncidents.map((i) => (
              <View key={i.id} style={styles.incedents}>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteIncident(i.id)}>
                  <Text>X</Text>
                </TouchableOpacity>
                <Text style={{margin: 5}}>ID: {i.id}</Text>
                <Text style={{margin: 5}}>Name: {i.title}</Text>
                <Text style={{margin: 5}}>Description: {i.description}</Text>
                <Text style={{margin: 5}}>Created at: {i.createdAt}</Text>
                <Text style={{margin: 5}}>
                  Coordinate: {i.latlng.latitude}&&{i.latlng.longitude}
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.noIncedents}>There are no incidents</Text>
        )}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.navigateButton}
            onPress={() => navigation.navigate('Map', {allIncidents})}>
            <Text>Go to map</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>Create incedent</Text>
          </TouchableOpacity>
        </View>
        {modalVisible && (
          <ModalWindow
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {flex: 1},
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 50,
  },
  incedents: {flexDirection: 'column', marginTop: 30},
  deleteButton: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 20,
    padding: 10,
    width: 80,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonWrapper: {
    marginTop: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigateButton: {
    marginRight: 50,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
    height: 60,
  },
  createButton: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
    height: 60,
  },
  noIncedents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Incidents;
