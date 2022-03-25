const UPDATE_DIALER_BRAND = "UPDATE_BRAND";
const SET_DIALER_DESTINATION = "DIALER_DESTINATION";

const initialState = {
    brandsNumber: {},
    isConfirmed: false,
  };

  export class Actions {

    static updateBrand = (brand) => ({
      type: UPDATE_DIALER_BRAND,
      brand,
    });

     static setToBrand= (brand) => ({
      type: SET_DIALER_DESTINATION,
      brand,
    });
  }

  export function reduce(state = initialState, action) {

    switch (action.type){
      
      case UPDATE_DIALER_BRAND: {
        return {
          ...state,
          brandsNumber: action.brand,
          isConfirmed: true,
        };
      }

      case SET_DIALER_DESTINATION: {
        return {
          ...state,
          tobrandsNumber: action.brand,
        };
      }
     
      default:
        return state;      
    }

  }

// export const loadData = (data) => {
//       return{
//         type:'LOAD_DATA',
//         payload: data
//       }; 
//   };

// export const dataReducer = (value=initialState, action) => {
//     if(action.type === "LOAD_DATA"){
//         return{
//             ...value,
//             brand: action.payload,
//         } ;
//     }
//     return value;
// };
