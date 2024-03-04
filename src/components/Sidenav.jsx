import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import { GrProjects } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { MdBusinessCenter } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

function Sidenav() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        console.log('state changed');
    }
  return (
    <div className=' bg-[#0a192f] text-gray-300'>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
        {
            nav ? (
                <div className="fixed w-full h-screen bg-black/90  flex flex-col justify-center items-center z-20">
                    <a onClick={handleNav}
                    href="#home" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#173F5F] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4' >Home</span>
                    </a>
                    <a onClick={handleNav}
                    href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#4188ff] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <ImProfile size={20} />
                        <span className='pl-4' >About</span>
                    </a>
                    <a onClick={handleNav}
                    href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#649eff] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaLaptopCode size={20} />
                        <span className='pl-4' >Skills</span>
                    </a>
                    <a onClick={handleNav}
                    href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#78aaff] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <MdBusinessCenter size={20} />
                        <span className='pl-4' >Experience</span>
                    </a>
                    <a onClick={handleNav}
                    href="#project" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#92bbff] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20} />
                        <span className='pl-4' >Project</span>
                    </a>
                    <a onClick={handleNav}
                    href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#accbff] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4' >Contact</span>
                    </a>
                </div>

            ) 
            : (
                <div className="div"></div>
            )
        }

        <div className='hidden lg:flex fixed flex-col top-[28%] left-0 '>
            <ul className='list-disc space-y-0.5'>
                <li className=' rounded-3xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1a8ae5]'>
                    <a href="#home" className='flex justify-between items-center w-full text-black cursor-pointer hover:scale-110 ease-in duration-300'>
                        Home <AiOutlineHome  size={20}/>
                    </a>
                </li>
                <li className='rounded-3xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1e97f3]'>
                    <a href="#about" className='flex justify-between items-center w-full text-black cursor-pointer hover:scale-110 ease-in duration-300'>
                        About <ImProfile  size={20}/>
                    </a>
                </li>
                <li className=' rounded-3xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#41a7f5]'>
                    <a href="#skills" className=' flex justify-between items-center w-full text-black cursor-pointer hover:scale-110 ease-in duration-300'>
                        Skills <FaLaptopCode  size={20}/>
                    </a>
                </li>
                <li className=' rounded-3xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#64b7f6]'>
                    <a href="#work" className='flex justify-between items-center w-full text-black cursor-pointer hover:scale-110 ease-in duration-300'>
                        Experience <MdBusinessCenter  size={20}/>
                    </a>
                </li>
                <li className='rounded-3xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#90cbf9]'>
                    <a href="#project" className='flex justify-between items-center w-full text-black cursor-pointer hover:scale-110 ease-in duration-300'>
                        Projects <GrProjects  size={20}/>
                    </a>
                </li>
                <li className='rounded-3xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#bbdffb]'>
                    <a href="#contact" className='flex justify-between items-center w-full text-black cursor-pointer hover:scale-110 ease-in duration-300'>
                       Contact <AiOutlineMail  size={20}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidenav;