import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ModalWindow from '../components/Modal';
import {connect} from 'react-redux';
import {deleteIncident} from '../redux/actions/incidents';

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
            onPress={() => navigation.navigate('Map')}>
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
