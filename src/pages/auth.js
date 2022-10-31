import React, { useEffect, useState } from 'react'
import { Cookies, CookiesProvider, useCookies } from 'react-cookie'
import {Outlet, useNavigate,useLocation} from "react-router-dom"

 function  Auth() {
  let navigate =  useNavigate()
  let [checkcookie,setCheck] =  useState("true")
  const [cookies, setCookie,removeCookie] = useCookies(['jwt']);
  
  useEffect(()=>
  {
    console.log(cookies.successresult)
    cookies.successresult?<Outlet/>:navigate('/')
      
   },[URL])

 return(
  checkcookie? <Outlet/>:navigate('/')
 )
}

export default Auth
