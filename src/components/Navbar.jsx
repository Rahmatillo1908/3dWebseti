import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
// import logo from "../../logo1.png";
import { styles } from "../style"
import { navLinks } from "../constants"
import logo from "../assents/logo1.png"
import { menu, close } from "../assents"
function Navbar() {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5
    fixed top-0 z-20 bg-primary `}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto' >
        <Link className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0) }} >
          <img src={logo} className='w-9 h-9 object-contain' alt="" />
          <p className='text-white text-[18] font-bold cursor-pointer flex' >Adrian <span className='sm:block hidden' >React Mastery</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18] font-medium cursor-pointer`}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center' >
          <img src={menu} className='w-[28] h-[28] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} alt="" />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute
                      top-20 right-0 mx-4 my-4 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li onClick={() => { setToggle(!toggle); setActive(link.title); }}
                  key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-popins font-medium cursor-pointer text-[16px]`}>
                  <a href={`${link.id}`}>{link.title}</a>
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