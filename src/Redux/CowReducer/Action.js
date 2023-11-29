import {
  GET_ALL_COWS_REQUEST,
  GET_ALL_COWS_FAILURE,
  GET_ALL_COWS_SUCCESS,


  GET_ALL_DISEASE_REQUEST,
  GET_ALL_DISEASE_FAILURE,
  GET_ALL_DISEASE_SUCCESS,

  GET_ALL_DOCTOR_REQUEST,
  GET_ALL_DOCTOR_FAILURE,
  GET_ALL_DOCTOR_SUCCESS,
} from "./ActionType";

import axios from "axios";

export const getAllCowsRequest = () => ({
  type: GET_ALL_COWS_REQUEST,
});

export const getAllCowsFailure = (error) => ({
  type: GET_ALL_COWS_FAILURE,
  payload: error,
});

export const getAllCowsSuccess = (data) => ({
  type: GET_ALL_COWS_SUCCESS,
  payload: data,
});

export const getAllCows = () => (dispatch) => {
  dispatch(getAllCowsRequest());
  axios
    .get("http://localhost:8080/api/v1/cowmodel")
    .then((res) => {
      dispatch(getAllCowsSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getAllCowsFailure(error.message));
    });
  }


    export const getAllDiseasesRequest = () => ({
      type: GET_ALL_DISEASE_REQUEST,
    });
    
    export const getAllDiseaseFailure = (error) => ({
      type: GET_ALL_DISEASE_FAILURE,
      payload: error,
    });
    
    export const getAllDiseasesSuccess = (data) => ({
      type: GET_ALL_DISEASE_SUCCESS,
      payload: data,
    });
    
    export const getAllDisease = () => (dispatch) => {
      dispatch(getAllDiseasesRequest());
      axios
        .get("http://localhost:8080/durga")
        .then((res) => {
          dispatch(getAllDiseasesSuccess(res.data));
        })
        .catch((error) => {
          dispatch(getAllDiseaseFailure(error.message));
        });
};


export const getAllDoctorsRequest = () => ({
  type: GET_ALL_DOCTOR_REQUEST,
});

export const getAllDoctorsFailure = (error) => ({
  type:  GET_ALL_DOCTOR_FAILURE,
  payload: error,
});

export const getAllDoctorsSuccess = (data) => ({
  type: GET_ALL_DOCTOR_SUCCESS,
  payload: data,
});

export const getDoctors = () => (dispatch) => {
  dispatch(getAllDoctorsRequest());
  axios
    .get("http://localhost:8080/doctor")
    .then((res) => {
      dispatch(getAllDoctorsSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getAllDoctorsFailure(error.message));
    });
  }

