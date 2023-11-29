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

const initialState = {
  cowData: [],
  diseasData: [],
  doctorData:[],
  cowError: "",
  diseaseError: "",
  doctorError:"",
  cowLoading: false,
  diseaseLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COWS_REQUEST:
      return {
        ...state,
        cowLoading: true,
        cowError: "",
      };
    case GET_ALL_COWS_FAILURE:
      return {
        ...state,
        cowLoading: false,
        cowError: "Something went wrong",
      };
    case GET_ALL_COWS_SUCCESS:
      return {
        ...state,
        cowLoading: false,
        cowError: "",
        cowData: action.payload,
      };

    case GET_ALL_DISEASE_REQUEST:
      return {
        ...state,
        diseaseLoading: true,
        diseaseError: "",
      };
    case GET_ALL_DISEASE_FAILURE:
      return {
        ...state,
        diseaseLoading: false,
        diseaseError: "Something went wrong",
      };
    case GET_ALL_DISEASE_SUCCESS:
      return {
        ...state,
        diseaseLoading: false,
        diseaseError: "",
        diseasData: action.payload,
      };
    


      case GET_ALL_DOCTOR_REQUEST:
  return {
    ...state,
    doctorLoading: true,
    doctorError: "",
  };
case GET_ALL_DOCTOR_FAILURE:
  return {
    ...state,
    doctorLoading: false,
    doctorError: "Something went wrong",
  };
case GET_ALL_DOCTOR_SUCCESS:
  return {
    ...state,
    doctorLoading: false,
    doctorError: "",
    doctorData: action.payload,
  };
  
    default:
      return state;
  }
};

export default reducer;

