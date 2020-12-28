import {createStore, combineReducers} from 'redux';
import incidentReducer from './reducers/incidentReducer';

const rootReducer = combineReducers({incidentReducer});

const configureStore = () => createStore(rootReducer);

export default configureStore;
