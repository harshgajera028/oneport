import React from 'react'
import harsh from "../assets/hxrsh.jpg";
import harsh1 from "../assets/a1.jpg";


const About = () => {
    return (
        <div name="about"
        className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className='pt-2 '>
            <p className="text-4xl pr-10 font-bold inline border-b-4 pt-10  border-gray-500">
              About
            </p>

            <p className="text-gray-400 text-1xl py-4 max-w-md">
            I'm a student of computer engineering.I'm studying in dharmsingh desai university.I like to work with web
            technologies like React JS and Tailwind CSS.
          </p>

          
          </div>

          <div>
                <img src={harsh1} alt="myprofile" className='rounded-1xl mx-auto w-1/3 mr-8 md:w-1/3  shadow-md hover:scale-105 duration-500'/>
            </div>
        </div>
        </div>
    )
}

export default About



