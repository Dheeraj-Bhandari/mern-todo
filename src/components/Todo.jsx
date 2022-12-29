import React, {useState}from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo , updateTodo , deleteTodo} from '../redux/actions';

const Todo = ({todo,id}) => {
    const [editing, setEditing] = useState(false)
    const [text, settext] = useState(todo.data)
    const dispatch = useDispatch();
    
    const onFormSubmit=(e)=>{
        e.preventDefault();
        setEditing(!editing)
        dispatch(updateTodo(id, text))
    }
  

  return (
   <li  key={id} className="task"
   style={{textDecoration :todo.done? "line-through" : "",
        color:todo.done? "#bdc3c7" : "#34495e"
        }}  
   onClick={()=>dispatch(toggleTodo(id))}
   >
    <form action="" style={{display: !editing ? "none" : "block"}}
    onSubmit={(e)=>onFormSubmit(e)}
    >
        <input type="text"  value={text}
        className="editTodo" onChange={(e)=>settext(e.target.value)}
        />
    </form>
    <span style={{display: editing ? "none" : "block"}}>{todo.data}</span>
    <span><i className="fas fa-trash" onClick={()=>dispatch(deleteTodo(id))} ></i></span>
    <span><i className="fas fa-pen" onClick={()=>setEditing(!editing)}></i></span>
   </li>
  )
}

export default Todo