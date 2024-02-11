import React from 'react'
import {HiDownload} from 'react-icons/hi'
import ReactImg from '../assets/Ash_1.jpg';

function Home() {
  return (
<div name='home' className=' w-full h-screen  '>
  <div name="home" class="max-w-[1000px] w-full max-h-[100%] sm:flex sm:flex-row justify-center items-center mx-auto gap-5 ">
    <div class="w-full h-screen md:max-w-[750px] text-left">
      <div class="max-w-[1000px] flex flex-col justify-center h-full mx-8 sm:ml-8">
        <p class="text-[#1e3751]">Hi, I am</p>
        <h1 class="text-4xl md:text-7xl font-bold text-[#1e3751] mb-2">Ashvini Patidar</h1>
        <h6 class="text-2xl md:text-3xl font-bold text-[#6a7280] max-w-[800px]">A Full Stack Developer and UX Enthusiast</h6>
        <p class="text-[#6a7280] py-4 max-w-[700px]">I have a strong background in web development and a passion for creating innovative solutions. 
        With expertise in programming languages and user experience design, I excel in developing scalable applications and 
        collaborating with cross-functional teams</p>
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
    <div class="hidden sm:block lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-[250px] rounded-full overflow-hidden mx-8 sm:mr-8">
      <img className='object-cover h-[100%] w-[100%]' src={ReactImg} alt="Profile" />
    </div>
  </div>
</div>
  )
}

export default Home



