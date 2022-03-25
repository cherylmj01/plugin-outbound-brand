const ACTION_DISMISS_BAR = 'DISMISS_BAR';

const initialState = {
  brand: {},
};

export class Actions {  
  static dismissBar = () => ({
    type: ACTION_DISMISS_BAR,
    payload: {GreenDot: "+18887776666",
    Target: "+16789045659",
    Walmart: "+15554443333"}
  }
  );  
}

export function reduce(state = initialState, action) {
  // eslint-disable-next-line sonarjs/no-small-switch
  console.log("PETER123C", action.type);
  switch (action.type) {
    case ACTION_DISMISS_BAR: {
      return {
        ...state,
        brand: action.payload,
      };
    }

    default:
      return {123: 123};
  }
}
