import {ADD_INCIDENT, DELETE_INCIDENT, CHANGE_INCIDENT} from '../actions/types';

const initialState = {
  incidentsList: [
    {
      latlng: {
        latitude: 49.4058459,
        longitude: 24.3179882792436,
      },
      id: (new Date() - Math.floor(Math.random() * 10000000000)).toString(),
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
      id: (new Date() - Math.floor(Math.random() * 10000000000)).toString(),
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
      id: (new Date() - Math.floor(Math.random() * 10000000000)).toString(),
      title: 'Hello3',
      description: 'description3',
      photos: null,
      createdAt: new Date().toISOString().split('T')[0],
    },
  ],
};

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCIDENT:
      const newIncedent = {
        id: (new Date() - Math.floor(Math.random() * 10000000000)).toString(),
        title: action.title,
        description: action.description,
        latlng: {latitude: action.latitude, longitude: action.longitude},
      };
      return {
        ...state,

        incidentsList: [...state.incidentsList, newIncedent],
      };
    case DELETE_INCIDENT:
      return {
        ...state,
        incidentsList: state.incidentsList.filter(
          (item) => item.id !== action.id,
        ),
      };
    case CHANGE_INCIDENT:
      return {
        ...state,
        incidentsList: state.incidentsList.map((incident) =>
          incident.id === action.id
            ? {
                ...incident,
                title: action.title,
                description: action.description,
              }
            : incident,
        ),
      };
    default:
      return state;
  }
};

export default initialReducer;
