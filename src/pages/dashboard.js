import React, { useReducer, useState } from 'react'

function Dashboard() {
    let [user,setUser] =  useState("Guest 401!")
  return (
    <div>
      <h1>Welcome {user} </h1>
    </div>
  )
}

export default Dashboard
