import React from 'react';
import './App.css';
import Sidebar from "./Sidebar"
import Chat from './Chat';
import { selectUser } from "./features/userSlice"
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector(selectUser);
  
  return (
    <div className="app">
      {
        user ? (
        <>
        <Sidebar /> 
        <Chat/>
        </>
        ) : 
        <h2>Login</h2>
        }
    </div>
  );
}

export default App;
