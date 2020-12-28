import {ADD_INCIDENT, DELETE_INCIDENT, CHANGE_INCIDENT} from './types';

export const addIncident = (title, description, latitude, longitude) => ({
  type: ADD_INCIDENT,
  title,
  description,
  latitude,
  longitude,
});

export const deleteIncident = (id) => ({
  type: DELETE_INCIDENT,
  id,
});

export const changeIncident = (id, title, description) => ({
  type: CHANGE_INCIDENT,
  id,
  title,
  description,
});
