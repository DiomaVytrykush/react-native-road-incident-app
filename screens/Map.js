import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';

const Map = ({route}) => {
  const {allIncidents} = route.params;
  const [region, setRegion] = React.useState({
    latitude: 49.4058459,
    longitude: 24.3179882792436,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [markers, setMarkers] = React.useState(allIncidents);

  return (
    <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
      <MapView
        style={{flex: 1}}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        // onPress={(e) => {
        //   setMarkers([
        //     ...markers,
        //     {
        //       latlng: e.nativeEvent.coordinate,
        //       title: '',
        //       description: '',
        //     },
        //   ]);
        // }}
      >
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker.latlng} showCallout>
            <Callout tooltip>
              <View>
                <View style={styles.window}>
                  <TextInput
                    onChangeText={(e) => setMarkers([...markers], e)}
                    defaultValue={`Title: ${marker.title}`}
                  />
                  <TextInput
                    onChangeText={(e) => setMarkers([...markers], e)}
                    defaultValue={`Description: ${marker.description}`}
                  />
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
