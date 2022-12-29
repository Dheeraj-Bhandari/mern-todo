
// import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Todos from "./components/Todos";

import "./App.css"
import TodoForm from "./components/TodoForm";
function App() {
  return (
    <div >
      <Header/>
      <TodoForm/>
      <Todos/>
      {/* <Routes>

    <Route  path="/"  element={<Welcome/>}/>
    <Route  path="/register"  element={<Register/>}/>

      </Routes> */}
      

    </div>
  );
}

export default App;
