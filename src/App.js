import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState, useEffect } from 'react';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false)
const navigate = useNavigate()

function login() {
  setIsLoggedIn(true)
}
function logout() {
  setIsLoggedIn(true)
}
useEffect(() => {
  if(isLoggedIn) {
    navigate("/")
  }else {
    navigate("/login")
  }
}, [isLoggedIn])

  return (
    <div className="app">
      {isLoggedIn ? <NavBar logout={logout}/> : <Navigate to="./login"/>}
      <Outlet context={login}/>
    </div>
  );
}

export default App;
