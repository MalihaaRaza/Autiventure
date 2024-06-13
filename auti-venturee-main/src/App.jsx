import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Dashboard/Home';
import Tasks from './Pages/Dashboard/Tasks';
import Games from './Pages/Dashboard/Games';
import Find from './Pages/Dashboard/Games/Find';
import Zombie from './Pages/Dashboard/Games/Zombie';
import Key from './Pages/Dashboard/Games/Key';
import Brick from './Pages/Dashboard/Games/Brick';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Signup/>}/>
          <Route path="/dashboard" element={<Home/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path="/find" element={<Find/>}/>
          <Route path="/zombie" element={<Zombie/>}/>
          <Route path="/key" element={<Key/>}/>
          <Route path="/brick" element={<Brick/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
