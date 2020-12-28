import React from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {changeIncident} from '../redux/actions/incidents';

const Details = ({route, navigation, changeIncident}) => {
  const {marker} = route.params;

  const [title, setTitle] = React.useState(marker.title);
  const [description, setDescription] = React.useState(marker.description);

  const saveChanges = () => {
    changeIncident(marker.id, title, description);
    navigation.navigate('Map');
  };

  return (
    <View>
      <TextInput
        defaultValue={title}
        onChangeText={(e) => setTitle(e)}
        placeholder="Write here"
      />
      <TextInput
        defaultValue={description}
        onChangeText={(e) => setDescription(e)}
        placeholder="Write here"
      />
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

const mapDispatchToProps = (dispatch) => {
  return {
    changeIncident: (id, title, description) =>
      dispatch(changeIncident(id, title, description)),
  };
};

export default connect(null, mapDispatchToProps)(Details);
