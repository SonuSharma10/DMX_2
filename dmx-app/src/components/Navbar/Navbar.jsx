import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="DMX" />
      </div>
      <nav>
        <ul>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Team</Link></li>
          <li><Link href="#">Event</Link></li>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Forum</Link></li>
        </ul>
      </nav>
      <Link href="#" className='join-us-btn'>Join Us</Link>
    </header>
  )
}

export default Navbar
