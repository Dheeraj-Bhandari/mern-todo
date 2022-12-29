
import * as actionTypes from "../actions/type";

export const todosReducers = (state =null, action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [action.payload, ...state];

    case actionTypes.GETALL_TODO:
      return [action.payload];


    case actionTypes.DELETE_TODO:
      return state.filter(todo=>todo._id !=action.payload._id);


    case actionTypes.UPDATE_TODO:
      

      return state.map(ele=>{
        return ele._id===action.payload._id ? ({...ele, data:action.payload.data}) : ele
     })


    case actionTypes.TOGGLE_TODO:
      
 
    return state.map(ele=>{
       return ele._id===action.payload._id ? ({...ele, done:!ele.done}) : ele
    })

    default:
      return state;
  }
};
