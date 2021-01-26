import React, { useEffect } from 'react';
import './App.css';
import Sidebar from "./Sidebar"
import Chat from './Chat';
import { selectUser } from "./features/userSlice"
import { useDispatch, useSelector } from 'react-redux';
import Login from "./Login";
import { login, logout } from "./features/userSlice"
import { auth } from './Firebase';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log("user is",authUser);
      if(authUser)
      {
        //Logged In
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          name:authUser.displayName,
          email:authUser.email
        }))
      }
      else
      {
        //Logged Out
        dispatch(logout())
      }
    })
  }, []);
  
  const user = useSelector(selectUser);

  console.log("Redux",user);


  return (
    <div className="app">
      {
        user ? (
        <>
        <Sidebar /> 
        <Chat/>
        </>
        ) : 
        <Login/>
        }
    </div>
  );
}

export default App;
