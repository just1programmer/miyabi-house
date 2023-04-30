import React, { useState } from 'react'
import './Header.scss'
const Header = () => {
  
    const [brandName, setBrandName] = useState('Miyabi House');

    return (
    <nav>
        <span>{brandName}</span>
        <div className="nav_links">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">About</a>
            <a href="#">Sessions</a>
        </div>
        <div className="nav_user_icons">
            {/* shopping cart item and user item */}
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </nav>
  )
}

export default Header