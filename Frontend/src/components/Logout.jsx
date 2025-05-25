import React from 'react'
import { useAuth } from '../context/AuthProvider'

export default function Logout() {
    const [authUser, setAuthUser] = useAuth()

    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            alert("Loggedout")
            window.location.reload();
        } catch (error) {
            alert("Error:"+error.message)
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}
