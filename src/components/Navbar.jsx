import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets';
import Breadcrumb from './BreadCrumb';

const Navbar = ({ section = "" }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
    className={`${styles.paddingX} fixed w-full items-center py-5 top-0 z-20 bg-primary`}
    >
      
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Breadcrumb 
        request={section}
        />

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
            key={link.id}
            className={`${active === link.title ? "text-white" : "text-secondary"}
            hover:text-white text-[18px] font-medium cursor-pointer transition-all duration-150 ease-linear
            `}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} aria-label={link.title}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />

            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient
            absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-md
            `}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link) => (
                  <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"}
                  font-poppins font-medium cursor-pointer text-[16px] hover:text-white

                  `}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                  >
                    <a href={`#${link.id}`} aria-label={link.title}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar