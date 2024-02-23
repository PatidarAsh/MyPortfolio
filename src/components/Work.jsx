import React from 'react'

function Work() {
  return (
    <div name="Work" class="w-full md:min-h-screen  text-[#1e3751]">
    <div class="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
      <div class="pb-8">
      <p class="text-4xl font-bold inline border-b-4 border-[#C3073F]">Work Experience</p>
      <p class="py-4">Experience that I have</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
      <div class="shadow-md shadow-[#040c16] group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">Software Engineer </h3>
          <p class="text-[#6a7280]">HCL Technologies, Noida </p>
          <h5>Jul 2021 – Jun 2022</h5>
          <p class="py-2 text-[#6a7280]">I constructed a NodeJS-based RESTful API. 
           Maintained ReactJS app stability and upkeep by adhering to top practices and resolving issues. 
           Employed Agile,React Developer Tools, and Chrome DevTools for an effective product development process.</p>
        </div>
      
      </div>
      <div class="shadow-md shadow-[#040c16] group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">Software Engineer Intern  </h3>
          <p class="text-[#6a7280]">HCL Technologies, Noida</p>
          <h5>Oct 2020 – Jun 2021</h5>
          <p class="py-2 text-[#6a7280]">Actively coded and built responsive interfaces, gaining hands-on knowledge in responsive design.  
          Improved testing procedures, increasing overall efficiency by 20%. Implemented version control best practices, 
          boosting team productivity by 15%.</p>
        </div>
      
      </div>
     
      </div>
    </div>
  </div>
  )
}

export default Work