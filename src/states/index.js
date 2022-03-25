import { combineReducers } from 'redux';

import { reduce as BrandSelectReducer } from './BrandNumberState';

// Register your redux store under a unique namespace
export const namespace = 'outbound-brand';

// Combine the reducers
export default combineReducers({
  BrandSelector: BrandSelectReducer,
});


// import { combineReducers, createStore } from 'redux';

// import { reduce as CustomTaskListReducer } from './CustomTaskListState';
// import { dataReducer } from './BrandNumberState';

// // Register your redux store under a unique namespace
// export const namespace = 'outbound-brand';

// // Combine the reducers
// // export default combineReducers({
// //   customTaskList: CustomTaskListReducer,
// // });

// export default combineReducers({
//   dataReducer: dataReducer,
// });

// //export const store = createStore(combineReducers);
