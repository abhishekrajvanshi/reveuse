import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-32 justify-between items-center flex bg-slate-100 shadow py-3'>
      Navbar

        <div className="flex items-center gap-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
        </div>
    </div>
  )
}

export default Navbar
