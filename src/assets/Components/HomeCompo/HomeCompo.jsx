import './HomeCompo.css'
import profile from '../../../../public/images/1000014468-removebg-preview.png'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const HomeCompo = () => {
  return (
    <>
      <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center mt-10 gap-10">
               <img className='w-[280px] h-[280px] bg-[#bb5d7c] rounded-full' src={profile} alt="Profile" />
               <h1 className='font-semibold text-3xl capitalize text-black text-center'>fuhad hasan shiblu</h1>
               <p className='font-medium text-[#818181] capitalize text-xl text-center'>front-end web developer</p>
               <div className="flex flex-wrap justify-center items-center gap-5">
                    <Link className='text-xl text-[#287fc5] bg-white p-3 rounded-[8px] transition-all fuhadShiblu_bgHover' to={'#'}><FaFacebookF/></Link>
                    <Link className='text-xl text-[#e7487d] bg-white p-3 rounded-[8px] transition-all fuhadShiblu_bgHover' to={'#'}><FaInstagram/></Link>
                    <Link className='text-xl text-[#ff1b1b] bg-white p-3 rounded-[8px] transition-all fuhadShiblu_bgHover' to={'#'}><FaYoutube/></Link>
                    <Link className='text-xl text-[#206197] bg-white p-3 rounded-[8px] transition-all fuhadShiblu_bgHover' to={'#'}><FaLinkedinIn/></Link>
                    <Link className='text-xl text-[#242424] bg-white p-3 rounded-[8px] transition-all fuhadShiblu_bgHover' to={'#'}><FaGithub/></Link>
               </div>
               <Link className='flex items-center gap-1 text-xl md:text-3xl py-2 px-5 bg-[#d4204d] text-white rounded-[30px] font-semibold hover:scale-[1.1] transition-all' to={'#'}><FaDownload/>Download CV</Link>
          </div>
      </div>
    </>
  )
}

export default HomeCompo
