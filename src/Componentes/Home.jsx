import React from 'react'
import harsh from "../assets/absvd.jpg";
import {  MdKeyboardDoubleArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className='h-scrren w-full bg-gradient-to-b from-black to-gray-800 h-screen'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold md:text-white ) {
                    
                }'>
                    I'm a Harsh Gajera
                </h2>
                <p className="text-gray-400 text-2xl py-4 max-w-md">
                       Web Developer and Programmer
               </p>
                   
            </div>
             
            <div>
                <img src={harsh} alt="myprofile" className='rounded-2xl mx-auto w-2/3 pt-8 md:w-full pb-8'/>
            </div>
        </div>
    </div>
  )
}

export default Home;