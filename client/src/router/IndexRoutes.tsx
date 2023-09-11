import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import { useState } from 'react'
import EntryPage from '@/pages/EntryPage'

import ProtectedRoute from '@/components/ProtectedRoute'



export default function IndexRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const setLoggdIn = () => {
    setIsLoggedIn(true)
  }

  function checkLogin() {
    if(isLoggedIn) {
      return true
    }
    return false
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            {isLoggedIn ? <Home /> : <Login loggedIn={setLoggdIn}/>} 
          </>
        }/>
        <Route path='entry'
          element={
            <ProtectedRoute isLoggedIn={checkLogin()}>
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