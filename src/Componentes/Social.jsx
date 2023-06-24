import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram,FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Social = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-1/4 px-4 py-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '> 
               <a href="https://www.linkedin.com/in/harsh-gajera-2828jh" className='flex justify-between items-center w-full text-white'><>LinkedIn<FaLinkedin size={30}/></></a>
        </li>

        <li className='flex justify-between items-center w-40 h-1/4 px-4 py-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '> 
               <a href="https://github.com/harshgajera028" className='flex justify-between items-center w-full text-white'><>Github<FaGithub size={30}/></></a>
        </li>

        <li className='flex justify-between items-center w-40 h-1/4 px-4 py-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '> 
               <a href="https://www.instagram.com/_gajera__28_0/" className='flex justify-between items-center w-full text-white'><>Instagram<FaInstagram size={30}/></></a>
        </li>

        <li className='flex justify-between items-center w-40 h-1/4 px-4 py-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '> 
               <a href="https://www.twitter.com/_gajera__28_0/" className='flex justify-between items-center w-full text-white'><>Twitter<FaTwitter size={30}/></></a>
        </li>

        <li className='flex justify-between items-center w-40 h-1/4 px-4 py-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '> 
               <a href="mailto:foo@gmail.com" className='flex justify-between items-center w-full text-white'><>Mail<HiOutlineMail size={30}/></></a>
        </li>
      </ul>
    </div>
  )
}

export default Social