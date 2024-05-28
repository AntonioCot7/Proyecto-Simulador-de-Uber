import React from 'react'

export const Navbar = () => {

  if (localStorage.getItem('token')) {
    return (
      <div className="bg-black h-12 text-white px-10 py-2 flex justify-between">
        <div className='text-2xl'>Uber</div>
        <button id="logout">
          Logout
        </button>
      </div>
    )
  } else {
    return (
      <div className="bg-black h-12 text-white px-10 py-2 text-2xl">
        Uber
      </div>
    )
  }
}
