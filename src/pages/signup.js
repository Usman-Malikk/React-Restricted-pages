import React from 'react'
import "./signup.css"
import {useNavigate} from "react-router-dom"
import { useCookies } from 'react-cookie';

function Signup() {
  let navigate = useNavigate()
  const [cookies, setCookie,removeCookie] = useCookies(['success']);
    // let submitform =()=>
    // {
    //   setCookie('successresult', false, { path: '/' });

    // }
  return (
    <div className="formdiv">
    <form onSubmit={(event)=>
    {
      event.preventDefault()
        // submitform()
    }}>
      <h1>Sign up</h1>
      <label>Name</label>
      <input type="text" name="name" placeholder="enter yout name" /><br/>
      <label>Name</label>
      <input
        type="password"
        name="password"
        placeholder="enter your password"
      /><br/>

      <button onClick={()=>
      {
        setCookie('successresult', "malik usman", { path: '/' });
      }}> Set cookie</button>
    <button onClick={()=>
    {
      removeCookie("successresult")
    }}> remove cookie</button>
    <button onClick={()=>
    {
      navigate("/dashboard")
    }}>New page to see cookie</button>
    </form>
  </div>
  )
}

export default Signup
