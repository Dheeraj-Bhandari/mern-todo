import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/actions/index";
import { Tabs } from "./Tabs";
import Todo from "./Todo";
import {DONE_TODOS,ACTIVE_TODOS,ALL_TODOS} from '../redux/actions/type'
const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector(state=>state.currentTab)
  console.log(todos);
  useEffect(() => {
    dispatch(getTodos());
    console.log("inside useffect");
  }, []);


  const getTodo=()=>{
    if(currentTab === ALL_TODOS){
      return todos;
    }
    else if(currentTab===ACTIVE_TODOS){
      return todos.filter(todo=>todo!=todo.done)
    }
    else if(currentTab===DONE_TODOS){
      return todos.filter(todo=>todo.done)
    }
  }
  return (
    <article>
      <div>
        <Tabs  currentTab={currentTab} />
      </div>
      <ul>
        {todos
          ? todos.map((ele) => {
              return <Todo todo={ele} id={ele._id} key={ele._id} />;
            })
          : ""}
      </ul>
    </article>
  );
};

export default Todos;
