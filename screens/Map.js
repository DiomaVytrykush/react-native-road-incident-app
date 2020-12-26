import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import ModalWindow from '../components/Modal';

const Map = ({route}) => {
  const [title, setTitle] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(true);

  const [description, setDescription] = React.useState('');
  const [region, setRegion] = React.useState({
    latitude: 49.4058459,
    longitude: 24.3179882792436,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const {allIncidents, setAllIncident} = route.params;

  const addIncedent = (e) => {
    const newIncedent = {
      latlng: e.nativeEvent.coordinate,
      id: (new Date() - Math.floor(Math.random() * 10000000000)).toString(),
      title,
      description,
      photos: null,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setAllIncident([...allIncidents, newIncedent]);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
      <MapView
        style={{flex: 1}}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        onPress={(e) => addIncedent(e)}>
        {allIncidents.map((marker, index) => (
          <Marker key={index} coordinate={marker.latlng} showCallout>
            <Callout tooltip>
              <View>
                <View style={styles.window}>
                  <View style={styles.modalElement}>
                    <Text>Title:</Text>
                    <TextInput
                      value={marker.title ? marker.title : title}
                      onChangeText={(e) => setTitle(e)}
                      placeholder="Write here"
                    />
                  </View>
                  <View style={styles.modalElement}>
                    <Text>Description:</Text>
                    <TextInput
                      value={
                        marker.description ? marker.description : description
                      }
                      onChangeText={(e) => setDescription(e)}
                      placeholder="Write here"
                    />
                  </View>
                  <Text style={styles.description}>
                    Coordinate:
                    {marker.latlng.latitude}&&
                    {marker.latlng.longitude}
                  </Text>
                  <Image
                    style={styles.image}
                    source={require('../assets/car.jpg')}></Image>
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 200,
  },
  image: {
    height: 100,
    width: 'auto',
  },
});

export default Map;
