import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Nav = () => {

  return (
    <div className='nav-bar'>
        <h2>Recipe List App</h2>
        <div className='button-layout'>
          <Link to='/'><button>Main Page</button></Link>
          <Link to='/bookmarks'><button>My Bookmarks</button></Link>
        </div>
    </div>
  )
}

export default Nav