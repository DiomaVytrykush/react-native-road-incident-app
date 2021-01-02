import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import ModalWindow from '../components/Modal';
import {connect} from 'react-redux';
import {deleteIncident} from '../redux/actions/incidents';
import Button from '../components/Button';

const Incidents = ({navigation, incidents, deleteIncident}) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {incidents.length != 0 ? (
          <View>
            {incidents.map((i) => (
              <View key={i.id} style={styles.incedents}>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteIncident(i.id)}>
                  <Image
                    style={styles.image}
                    source={require('../assets/delete.png')}></Image>
                </TouchableOpacity>
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
          <Button
            text={'Go to map'}
            onPress={() => navigation.navigate('Map')}
            styleButton={{width: '45%'}}
          />
          <Button
            text={'Create incident'}
            onPress={() => setModalVisible(!modalVisible)}
            styleButton={{width: '45%', backgroundColor: '#238057'}}
          />
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
  scrollView: {flex: 1, backgroundColor: '#fff'},
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  incedents: {flexDirection: 'column', marginTop: 30},
  deleteButton: {
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  image: {
    width: 30,
    height: 30
  },
  buttonWrapper: {
    flex: 1,
    marginVertical: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noIncedents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    incidents: state.incidentReducer.incidentsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteIncident: (id) => dispatch(deleteIncident(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Incidents);
