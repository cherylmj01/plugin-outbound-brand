const UPDATE_DIALER_BRAND = "UPDATE_BRAND";
const SET_DIALER_DESTINATION = "DIALER_DESTINATION";
const GET_PHONE_NUMBER = "GET_PHONE_NUMBER";

const initialState = {
    brandsNumber: {},
    isConfirmed: false,
    brandNumberList: {},
  };

  function getBrandNumberList() {
    return fetch('https://scarlet-salmon-5915.twil.io/assets/BrandNumbers.json')
    .then((response) => response.json())
    .catch((err) => {
      return `Error: ${err}`;
    });
  }
  
  export class Actions {

    static updateBrand = (brand) => ({
      type: UPDATE_DIALER_BRAND,
      payload: brand,
    });

     static setToBrand = (brand) => ({
      type: SET_DIALER_DESTINATION,
      payload: brand,
    });

    static getPhoneNumbers = () => ({
      type: GET_PHONE_NUMBER,
      payload: getBrandNumberList(),
    });
  }

  export function reduce(state = initialState, action) {
  
    // console.log('ACTION_CALLED',action,action.type);

    switch (action.type){
      
      case UPDATE_DIALER_BRAND: {
        return {
          ...state,
          brandsNumber: action.payload,
          isConfirmed: true,
        };
      }

      case SET_DIALER_DESTINATION: {
        return {
          ...state,
          tobrandsNumber: action.payload,
        };
      }

      case `${GET_PHONE_NUMBER}_PENDING`: {
        return state;
      }

      case `${GET_PHONE_NUMBER}_FULFILLED`: {
        // console.log("PHONE NUMBERS WERE LOADED", action)
        return {
          ...state,
          brandNumberList: action.payload,
        };
      }

      case `${GET_PHONE_NUMBER}_REJECTED`: {
        return {
          ...state,
          error: action.payload.error,
        };
      }
   
      default:
        return state;      
    }

  }
