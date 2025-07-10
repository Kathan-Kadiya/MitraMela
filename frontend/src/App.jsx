import React from 'react';
import { Routes,Route, Navigate } from 'react-router';
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
import { getAuthUser } from './lib/api.js';
import useAuthUser from './hooks/useAuthUser.js';
import Layout from './components/Layout.jsx';
import { useThemeStore } from "./store/useThemeStore.js";
import PageLoader from './components/PageLoader.jsx';

const App = () => {

  const {isLoading, authUser} = useAuthUser();
  const { theme } = useThemeStore();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnBoarded;

  if (isLoading) return <PageLoader />;

  return (
    <div className='h-screen' data-theme={theme}>
      
      <Routes>
        <Route path='/' element={isAuthenticated && isOnboarded ? 
        (
          <Layout showSidebar={true}>
                <HomePage />
              </Layout>
        ) : (<Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />)
          }/>
        <Route path='/login' element={!isAuthenticated ? <LoginPage /> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />} />
        <Route path='/signup' element={!authUser ? <SignUpPage/> : <Navigate to="/"/>}/>
        <Route path='/notifications' element={
          isAuthenticated && isOnboarded ? (
              <Layout showSidebar={true}>
                <NotificationsPage />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )}/>
        <Route path='/call/:id' element={<CallPage/>}/>
        <Route path='/chat/:id' element={
          isAuthenticated && isOnboarded ? (
              <ChatPage />
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )}/>
        <Route path='/onboarding' element={ 
          isAuthenticated ? ( !isOnboarded ? ( <OnboardingPage /> ) : ( <Navigate to="/" /> )) : ( <Navigate to="/login" /> )
            }/>
      </Routes>

      <Toaster/>
    </div>
  )
}

export default App;