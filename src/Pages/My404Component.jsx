import React from 'react'
import '../Css/My404Component.css'
import { Link } from 'react-router-dom'
function My404Component() {
  return (
    <div className='container'>
        <div className='pnf'>404</div>
        <div className="text">Oops... Page not found</div>
        <Link className='button' to={'/'} >HOME</Link>
    </div>
  )
}

export default My404Component