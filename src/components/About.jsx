import React from 'react'
import ReactImg from '../assets/Ash_2.jpg';

function About() {
  return (
    <div name="about" className='w-full  '>
      <div class="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
        <div>
          <p class="text-4xl font-bold border-b-4 border-pink-600 inline">About</p>
        </div>
        <div class="max-w-[1000px] w-full sm:flex sm:flex-row sm:justify-center sm:items-center sm:mx-auto gap-2">
          <div class="hidden sm:block lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden mx-8 sm:mr-8">
             <img className='object-cover h-[100%] w-[100%]' src={ReactImg} alt="Profile" />
          </div>
            <div class="w-full md:max-w-[950px] text-left">
              <div class="max-w-[1000px] flex flex-col justify-center h-full sm:mx-8 sm:ml-8">
              <p class=" text-[#6a7280] py-4 ">I'm Ashvini Patidar, a dedicated software engineer specializing in information systems and web development. With a strong background in JavaScript, Java, React, and Node.js, I create innovative solutions to enhance user experiences.</p>
              <p class=" text-[#6a7280] py-4 ">Currently pursuing a Master's degree in Information Systems from Northeastern University, I have hands-on experience as an Associate Software Engineer at HCL technologies. I excel in redesigning user interfaces, automating codebase migration, and building RESTful APIs. </p>
              <p class="text-[#6a7280] py-4 ">Alongside my technical skills, I've led teams, organized events. I'm driven by continuous learning, currently getting my hands dirty in Frontend using React/Redux.</p>
              <p class=" text-[#6a7280] py-4 ">As a passionate and dedicated software engineer, I'm eager to contribute my expertise to a dynamic team. Let's connect and discuss how I can contribute to your organization's success.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About