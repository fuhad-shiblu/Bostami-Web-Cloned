import './Navbar.css'
import logo from '../../../../public/images/logo-2.png'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";
import { useState } from 'react';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [colTheme , setColTheme] = useState(false)

  const handleColTheme = ()=>{
    setColTheme(!colTheme)
  }
  return (
    <>
      <div className="container mx-auto">
          <nav className='p-5 mt-10 flex justify-between items-center'>
               <img src={logo} alt="Logo" />
               <div className="flex items-center gap-5">
                    <ul className='md:flex gap-[15px] capitalize text-[13px] font-medium text-black hidden md:block'>
                         <li><Link className='p-[19px] bg-white rounded-[8px] flex items-center gap-2 bg-white fuhadShiblu_bgHover transition-all' to={'/'}><AiOutlineHome className='text-xl font-light'/>home</Link></li>
                         <li><Link className='p-[19px] bg-white rounded-[8px] flex items-center gap-2 bg-white fuhadShiblu_bgHover transition-all' to={'/about'}><FaRegUser className='text-xl font-light'/>about</Link></li>
                         <li><Link className='p-[19px] bg-white rounded-[8px] flex items-center gap-2 bg-white fuhadShiblu_bgHover transition-all' to={'/resume'}><IoDocumentsOutline className='text-xl font-light'/>resume</Link></li>
                         <li><Link className='p-[19px] bg-white rounded-[8px] flex items-center gap-2 bg-white fuhadShiblu_bgHover transition-all' to={'/works'}><IoBriefcaseOutline className='text-xl font-light'/>works</Link></li>
                         <li><Link className='p-[19px] bg-white rounded-[8px] flex items-center gap-2 bg-white fuhadShiblu_bgHover transition-all' to={'/blogs'}><FaBlog className='text-xl font-light'/>blogs</Link></li>
                         <li><Link className='p-[19px] bg-white rounded-[8px] flex items-center gap-2 bg-white fuhadShiblu_bgHover transition-all' to={'/contact'}><RiContactsBook3Line className='text-xl font-light'/>contact</Link></li>
                    </ul>
                    {
                      colTheme?
                      <div onClick={handleColTheme} className="p-5 bg-white rounded-full fuhadShiblu_bgHover transition-all">
                      <FaRegMoon className='text-xl'/>
                      </div>
                      :
                      <div onClick={handleColTheme} className="p-5 bg-white rounded-full fuhadShiblu_bgHover transition-all">
                      <FaRegSun className='text-xl'/>
                      </div>
                    }
                    <div className="flex justify-center items-center bg-[#d4204d] p-5 rounded-full text-xl text-white block md:hidden">
                      <FaBars/>
                    </div>
               </div>
          </nav>
      </div>
    </>
  )
}

export default Navbar
