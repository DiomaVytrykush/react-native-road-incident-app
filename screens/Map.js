import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {connect} from 'react-redux';
import {addIncident} from '../redux/actions/incidents';

const Map = ({navigation, incidents, addIncident}) => {
  const [region, setRegion] = React.useState({
    latitude: 49.4058459,
    longitude: 24.3179882792436,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const addIncidentFunc = (e) => {
    addIncident(
      'Tap to edit',
      'Tap to edit',
      e.nativeEvent.coordinate.latitude,
      e.nativeEvent.coordinate.longitude,
    );
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
        onPress={(e) => addIncidentFunc(e)}>
        {incidents.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            showCallout
            onCalloutPress={() => navigation.navigate('Details', {marker})}>
            <Callout tooltip>
              <View>
                <View style={styles.window}>
                  <View style={styles.modalElement}>
                    <Text>Title:</Text>
                    <Text>{marker.title}</Text>
                  </View>
                  <View style={styles.modalElement}>
                    <Text>Description:</Text>
                    <Text>{marker.description}</Text>
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
  modalElement: {
    flexDirection: 'row',
  },
});

const mapStateToProps = (state) => {
  return {
    incidents: state.incidentReducer.incidentsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIncident: (title, description, latitude, longitude) =>
      dispatch(addIncident(title, description, latitude, longitude)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
