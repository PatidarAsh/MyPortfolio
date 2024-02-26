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
          <h5>Oct 2020 – Jun 2022</h5>
          <p class="py-2 text-[#6a7280]">As a frontend developer, I focused on React applications, 
          integrating modern UI/UX designs that increased user engagement. 
          I successfully implemented Redux for state management. Additionally,
           I connected applications to backend services using REST APIs and collaborated across teams for seamless UI integration.
            With exposure to SaaS and Bootstrap, I actively participated in distributed Agile teams following SDLC in scrum meetings. 
            My role extended to developing, maintaining, and troubleshooting responsive websites for multiple clients, employing HTML, 
            CSS, JavaScript, and jQuery. Conducting user research, I identified and addressed user needs efficiently.</p>
        </div>
      
      </div>
      
     
      </div>
    </div>
  </div>
  )
}

export default Work