import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

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

  const deleteIncident = (id) => {
    const incidentDeleted = allIncidents.filter((item) => item.id !== id);

    setAllIncident(incidentDeleted);
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
                  <Text>Delete</Text>
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
            <TouchableOpacity
              style={styles.navigateButton}
              title="Go to Map"
              onPress={() => navigation.navigate('Map', {allIncidents})}>
              <Text>Go to map of incedents</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.noIncedents}>There are no incidents</Text>
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
  incedents: {flexDirection: 'column', marginTop: 50},
  deleteButton: {
    position: 'absolute',
    right: 20,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 20,
    padding: 10,
    width: 80,
    alignItems: 'center',
    top: -12,
  },
  navigateButton: {
    marginTop: 100,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noIncedents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Incidents;
