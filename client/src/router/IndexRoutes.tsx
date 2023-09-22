import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import { useState } from 'react'
import EntryPage from '@/pages/EntryPage'

import ProtectedRoute from '@/components/ProtectedRoute'
import useAuthentication from '@/hooks/useAuthentication'



export default function IndexRoutes() {
  const {isLogged} = useAuthentication()

  console.log(isLogged, 'isLogged')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            {isLogged ? <Home /> : <Login isLogged={isLogged}/>} 
          </>
        }/>
        <Route path='entry'
          element={
            <ProtectedRoute isLoggedIn={isLogged}>
              <EntryPage />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/entry" element={isLoggedIn? <EntryPage />: <Navigate to="/"/>}/> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>  
  );
}