import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlineShare } from "react-icons/hi";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const Contact_1 = () => {
  return (
    <div name="projects" id='contact' class="w-full md:min-h-screen text-white bg-black ">
    <div class="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full gap-12 ">
      <div class="pb-8">
      <p class="text-4xl font-bold inline border-b-4 border-[#C3073F]">Contact</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8'>

      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col p-6">
            <div class="flex">
                <div class="flex-none w-14 h-14">
                    <SlLocationPin size={40} className='text-black '/> 
                </div>
                <div class="flex-initial w-48 text-left">
                        <h5 className=' text-indigo-800 font-bold'>Current Location</h5>
                        <p className='text-black'>Boston, MA</p>
                        <p className='text-black'>United States</p>
                </div>
            </div>
      </div>

      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col p-6">
            <div class="flex">
                <div class="flex-none w-14 h-14">
                    <HiOutlineShare size={40} className='text-black '/> 
                </div>
                <div class="flex-initial w-48 text-left">
                    <h5 className=' text-indigo-800 font-bold'>Social Profiles</h5>
                    <div className='flex flex-row'>
                    <a href="https://www.linkedin.com/in/patidarash/" className='w-[25%] flex justify-center items-center rounded-full shadow-lg bg-blue-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsLinkedin size={20} />
                    </a>
                    <a href="https://github.com/PatidarAsh" className='w-[25%] flex justify-center items-center rounded-full shadow-lg bg-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsGithub size={20} />
                    </a>
                    <a href="https://wa.me/+18577469639" className='w-[25%] flex justify-center items-center rounded-full shadow-lg bg-green-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsWhatsapp size={20} />
                    </a>
                    </div>
                   
                </div>  
            </div>
      </div>

      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col p-6">
            <div class="flex">
                <div class="flex-none w-14 h-14">
                    <TfiEmail size={40} className='text-black '/> 
                </div>
                <div class="flex-initial w-48 text-left">
                        <h5 className=' text-indigo-800 font-bold'>Email</h5>
                        <a className='text-black cursor-pointer' href="mailto: patidar.as@northeastern.edu">patidar.as@northeastern.edu</a>
                        <p>
                        <a className='text-black cursor-pointer' href="mailto: ashvinipatidar96@gmail.com">ashvinipatidar96@gmail.com</a>
                        </p>
                        
                </div>
            </div>
      </div>

      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col p-6">
            <div class="flex">
                <div class="flex-none w-14 h-14">
                    <FiPhoneCall size={40} className='text-black '/> 
                </div>
                <div class="flex-initial w-48 text-left">
                        <h5 className=' text-indigo-800 font-bold'>Call me </h5>
                        <p className='text-black'>+1(857) 746-9639</p>
                        
                </div>
            </div>
      </div>
      
     
     
      </div>
    </div>
  </div>

  )
}

export default Contact_1