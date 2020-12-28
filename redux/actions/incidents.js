import {ADD_INCIDENT, DELETE_INCIDENT, CHANGE_INCIDENT} from './types';

export const addIncedent = (title, description, latitude, longitude) => ({
  type: ADD_INCIDENT,
  title,
  description,
  latitude,
  longitude,
});

export const deleteIncedent = (id) => ({
  type: DELETE_INCIDENT,
  id,
});

