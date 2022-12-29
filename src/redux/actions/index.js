import axios from "axios";
import { ADDNEW_TODO  , GETALL_TODO ,TOGGLE_TODO, UPDATE_TODO , DELETE_TODO , TOGGLE_TAB} from "./type";


const API_URL = `https://dheeraj-kumar-pw06-084-msav.vercel.app/`
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };


export const addNewTodo=(data) => async(dispatch)=>{

    try {
        console.log("Inside addTodo")
       const res =  await axios.post(`${API_URL}/todos`, {data},axiosConfig)
        dispatch({type: ADDNEW_TODO, payload: res.data})

    } catch (error) {
        console.log(error.messages)
    }

}
export const getTodos=() => async(dispatch)=>{

    try {
        
       const res =  await axios.get(`${API_URL}/todos`)
        dispatch({type: GETALL_TODO, payload: res.data})

    } catch (error) {
        console.log(error.messages)
    }


}
export const toggleTodo=(id) => async(dispatch)=>{

    try {
        // console.log(id)
       const res =  await axios.patch(`${API_URL}/todos/${id}`)
    //    console.log("res ",res)
        dispatch({type: TOGGLE_TODO, payload: res.data})

    } catch (error) {
        console.log(error.messages)
    }

}
export const updateTodo=(id, data) => async(dispatch)=>{

    try {
        // console.log(id)
       const res =  await axios.put(`${API_URL}/todos/${id}`, {data})
    //    console.log("res ",res)
        dispatch({type: UPDATE_TODO, payload: res.data})

    } catch (error) {
        console.log(error.messages)
    }

}
export const deleteTodo=(id) => async(dispatch)=>{

    try {
        // console.log(id)
       const res =  await axios.delete(`${API_URL}/todos/${id}`)
    //    console.log("res ",res)
        dispatch({type: DELETE_TODO, payload: res.data})

    } catch (error) {
        console.log(error.messages)
    }

}
export const toggleTab=(tab) => async(dispatch)=>{

 
        dispatch({type: TOGGLE_TAB, selected:tab})

    

}