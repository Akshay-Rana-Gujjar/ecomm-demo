import React, { useContext } from 'react'
import { CartContext } from '../../provider/cart'
import { Link } from 'react-router-dom';

export default function Header({children}) {

    const {cart} = useContext(CartContext);

  return (
    <div className='header'>

    <nav>
        <Link to="/"> Home</Link>
        <div>
            Total Cart items: {cart?.items.length} 
        </div>
    </nav>
        {children}
    </div>
  )
}
