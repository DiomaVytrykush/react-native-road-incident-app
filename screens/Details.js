import React from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const Details = ({route, navigation}) => {
  const {marker} = route.params;

  const [title, settitle] = React.useState(marker.title);

  const saveChanges = () => {
    navigation.navigate('Map', {title});
  };

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={(e) => settitle(e)}
        placeholder="Write here"
      />
      <TextInput>{marker.description}</TextInput>
      <TextInput>
        {marker.latlng.latitude}&&
        {marker.latlng.longitude}
      </TextInput>
      <TouchableOpacity onPress={saveChanges}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
