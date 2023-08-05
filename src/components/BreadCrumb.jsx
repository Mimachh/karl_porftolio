import React from 'react'
import { Link } from 'react-router-dom'


const BreadCrumb = ({request, href}) => {

  return (
    <div className='breadcrumb
    flex font-medium text-xl 
    '>
    <a href="#hero" aria-label="hero">
        <h1 className="logo brand !font-figtree" >@mimach.fr
        </h1>
    </a>
    <Link href={href} >
        <h1 className="logo brand !font-figtree" >{request === "hero" ? '' : '/' + request}
        </h1>
    </Link>
    <span className="oblique"
    ></span>
  </div>
  )
}

export default BreadCrumb