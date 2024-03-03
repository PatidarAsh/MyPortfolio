import React from 'react'
import {HiDownload} from 'react-icons/hi'
import ReactImg from '../assets/ASH1.jpg';
import { GrLinkedin } from "react-icons/gr";
import { TypeAnimation } from 'react-type-animation';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function Home() {
  return (
  <div name='home' id='home' className=' w-full h-screen  text-white bg-black'>
    <div name="home" class=" top-0 left-0 max-w-[1200px] w-full max-h-[100%] sm:flex sm:flex-row justify-center items-center mx-auto gap-5 ">
      <div class="w-full h-screen md:max-w-[750px] text-left">
        <div class="max-w-[1000px] flex flex-col justify-center h-full mx-8 sm:ml-8">
          <p class="text-[#5195dd]">Hi, I am</p>
          <h1 class="text-4xl md:text-7xl font-bold text-[#3c75b1] mb-2">Ashvini Patidar</h1>
          <h6 class="text-2xl md:text-3xl font-bold text-[#6c7fa1] max-w-[800px]"><TypeAnimation
              sequence={[
                  // Same substring at the start will only be typed out once, initially
                  ' Frontend Developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  ' Backend Developer',
                  1000,
                  ' Fullstack Developer',
                  1000,
                  ' UI/UX Developer',
                  1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block', paddingLeft: '5px'}}
              repeat={Infinity}
              /></h6>
          <p class="text-[#d0d2d6] py-4 max-w-[700px]">I possess a robust foundation in front-end development and a keen interest in elevating user experiences. 
          With skills in designing captivating user interfaces and a talent for refining the user journey, 
          I thrive in building scalable applications and working collaboratively with diverse teams. 
          My contributions focus on creating visually appealing and user-friendly digital solutions.</p>
          <div className='flex flex-row gap-4'>
              <a className='rounded-lg shadow-lg shadow-[#abb0b6] text-gray-300 bg-blue-600  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' 
                        href="https://www.linkedin.com/in/patidarash/">
                        <FaLinkedin size={30} className='cursor-pointer'/></a>
                    <a className='rounded-lg shadow-lg  shadow-[#abb0b6] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-gray-300 bg-[#333333]'
                    href="https://github.com/PatidarAsh">
                        <FaGithub size={30} className='cursor-pointer' /></a>
                    <a className='rounded-lg shadow-lg shadow-[#abb0b6] text-gray-300 bg-[#6fc2b0]  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' 
                    href="mailto: patidar.as@northeastern.edu">
                        <HiOutlineMail size={30} className='cursor-pointer'/></a>
                    <a className='rounded-lg shadow-lg shadow-[#abb0b6] text-gray-300 bg-[#565f69] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' 
                    href="https://drive.google.com/file/d/1F7xwbKjHy0C4YIZKObnLuewtjIL7cknb/view?usp=drive_link">
                        <BsFillPersonLinesFill size={30} className='cursor-pointer'/></a>
           </div>
        
          {/* <div className=''>
            <a download={resume} href="https://drive.google.com/file/d/1YwP_H_9X_tM7gxIhLoeAGb3sjojHavnD/view?usp=sharing"></a>
            <button className='text-white bg-[#C3073F]  group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1e3751] hover:border-[#1e3751]'>
              Resume
              <span className='group-hover:rotate-90-left duration-300'>
                <HiDownload className='ml-3 ' />
              </span>
            </button>
          </div> */}
        </div>
      </div>
      <div class="hidden sm:block lg:w-[500px] lg:h-[400px] md:w-[300px] md:h-[300px] sm:w-[300px] sm:h-[300px]  rounded-full overflow-hidden mx-8 sm:mr-8">
        <img className='object-cover h-full w-full drop-shadow-xl text-pink-900' src={ReactImg} alt="Profile" />
      </div>
     
    </div>
  </div>
    

  )
}

export default Home



