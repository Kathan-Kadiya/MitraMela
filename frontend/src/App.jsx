import React from 'react';
import { Routes,Route } from 'react-router';
import HomePage from "./Pages/HomePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import NotificationsPage from "./Pages/NotificationsPage.jsx";
import OnboardingPage from "./Pages/OnboardingPage.jsx";
import ChatPage from "./Pages/ChatPage.jsx";
import CallPage from "./Pages/CallPage.jsx";

import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='h-screen' data-theme='coffee'>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/notifications' element={<NotificationsPage/>}/>
        <Route path='/call' element={<CallPage/>}/>
        <Route path='/chat' element={<ChatPage/>}/>
        <Route path='/onboarding' element={<OnboardingPage/>}/>
      </Routes>

      <Toaster/>
    </div>
  )
}

export default App;