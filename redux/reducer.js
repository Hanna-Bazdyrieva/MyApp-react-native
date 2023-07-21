// // import { statusFilters } from "./constants";
// // const initialState = [];
// // export const rootReducer = (state = initialState, action) => {
// // 	console.log("rootReducer state, action", state, action);
// // };
// // const filtersInitialState = {
// //   status: statusFilters.all,
// // };
// // export const filtersReducer = (state = filtersInitialState, action) => {
// //   // Reducer code
// // };
// const postsInitState = [];
// const userInitState = {};

// export const postsReducer = (state = postsInitState, action) => {
// 	// console.log("postsReducer state, action", state, action);
// };

// export const userReducer = (state = userInitState, action) => {
// 	// console.log("userReducer state, action", state, action);
// };

// function todosReducer(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO': {
//       return state.concat(action.payload)
//     }
//     case 'TOGGLE_TODO': {
//       const { index } = action.payload
//       return state.map((todo, i) => {
//         if (i !== index) return todo

//         return {
//           ...todo,
//           completed: !todo.completed,
//         }
//       })
//     }
//     case 'REMOVE_TODO': {
//       return state.filter((todo, i) => i !== action.payload.index)
//     }
//     default:
//       return state
//   }
// }
