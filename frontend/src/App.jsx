import React from 'react';
import { Routes,Route } from 'react-router';
import HomePage from "./Pages/HomePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import NotificationsPage from "./Pages/NotificationsPage.jsx";
import OnboardingPage from "./Pages/OnboardingPage.jsx";
import ChatPage from "./Pages/ChatPage.jsx";
import CallPage from "./Pages/CallPage.jsx";
import axiosInstance from './lib/axios.js';

import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const App = () => {

  const {data:authData, isLoading, error} = useQuery({
    queryKey: ["authUser"],
                            // this is just to learn the useQuery and axios will modify it later
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
    retry: false,
  })

  console.log(authData);

  return (
    <div className='h-screen' data-theme='night'>
      
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