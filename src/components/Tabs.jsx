import { TABS } from "../redux/actions/type";
import { toggleTab } from "../redux/actions";
import React from 'react'
import { useDispatch } from "react-redux";
export const Tabs = ({currentTab}) => {
    const dispatch = useDispatch()
  return (
    
        TABS.map((tab)=>{
            return <button 
            onClick={()=>{
                dispatch(toggleTab(tab));
            }}
            className=  {tab===currentTab ? 'button selected' : "button"}
            
            
            >  {tab}</button>
        })

   
  )
}
