import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
        <ul>
            <li>
                <Link to={'/list-user'}>ListUser</Link>
                
            </li>
            <li>
                <Link to={'/creare-user'}>CreateUser</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu