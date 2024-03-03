import React from 'react'

function Work() {
  return (
    <div name="Work" id='work' class="w-full md:min-h-screen text-[white] bg-black ">
    <div class="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
      <div class="pb-8">
      <p class="text-4xl font-bold inline border-b-4 border-[#C3073F]">Work Experience</p>
      {/* <p class="py-4">Experience that I have</p> */}
      </div>
      {/* <div class="shadow-xl shadow-[#b1b8c1] group container rounded-md   justify-between text-center items-center mx-auto py-2 px-4 overflow-auto bg-white">
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">Software Engineer </h3>
          <p class="text-[#6a7280]">HCL Technologies, Noida </p>
          <h5 class="py-2 text-[#000000]">Oct 2020 – Jun 2022</h5>
          <p class="py-2 text-[#000000]">• Engineered a scalable front-end architecture by implementing reusable components with React and JavaScript ES6,
            resulting in a 10% improvement in development efficiency</p>
          <p class="py-2 text-[#000000]">• Spearheaded the implementation of Redux for state management, leading to an impressive 8% reduction in bugs and
            enhancing the overall stability of the application</p>
          <p class="py-2 text-[#000000]">• Utilized NodeJS and MongoDB to develop REST APIs, facilitating seamless connectivity between the application and
            backend services, resulting in a 10% increase in data retrieval speed</p>
          <p class="py-2 text-[#000000]">• Collaborated with designers and back-end developers, achieving seamless UI integration and enhancing user
            engagement by 5% with modern UI/UX designs in the enterprise web app</p>
          <p class="py-2 text-[#000000]">• Developed understanding of SaaS and Bootstrap while actively contributing to projects, cultivating skills in responsive
            design and ensuring cross-browser compatibility</p>
          <p class="py-2 text-[#000000]">• Actively participated in scrum meetings with distributed Agile teams following software development life cycle SDLC</p>

          
      
      </div> */}
      <div class="bg-white rounded-md shadow-xl border border-gray-300 p-4 mb-8 shadow-[#b1b8c1]">
  <h3 class="text-2xl font-bold text-indigo-800 mb-2 text-center">Software Engineer</h3>
  <p class="text-gray-600 text-center">HCL Technologies, Noida</p>
  <h5 class="py-2 text-black text-center">Oct 2020 – Jun 2022</h5>
  <ul class="list-disc pl-6">
    <li class="py-2 text-black">
      Engineered a scalable front-end architecture by implementing reusable components with <span class="text-indigo-800 font-semibold">React</span> and <span class="text-indigo-800 font-semibold">JavaScript ES6</span>, resulting in a 10% improvement in development efficiency
    </li>
    <li class="py-2 text-black">
      Spearheaded the implementation of <span class="text-indigo-800 font-semibold">Redux</span>  for state management, leading to an impressive 8% reduction in bugs and enhancing the overall stability of the application
    </li>
    <li class="py-2 text-black">
      Utilized <span class="text-indigo-800 font-semibold">NodeJS</span> and <span class="text-indigo-800 font-semibold">MongoDB</span> to develop <span class="text-indigo-800 font-semibold">REST APIs</span>, facilitating seamless connectivity between the application and backend services, resulting in a 10% increase in data retrieval speed
    </li>
    <li class="py-2 text-black">
      Collaborated with designers and back-end developers, achieving seamless UI integration and enhancing user engagement by 5% with modern <span class="text-indigo-800 font-semibold">UI/UX designs</span>in the enterprise web app
    </li>
    <li class="py-2 text-black">
      Developed understanding of <span class="text-indigo-800 font-semibold">SaaS</span> and <span class="text-indigo-800 font-semibold">Bootstrap</span> while actively contributing to projects, cultivating skills in responsive design and ensuring cross-browser compatibility
    </li>
    <li class="py-2 text-black">
      Actively participated in <span class="text-indigo-800 font-semibold">scrum</span> meetings with distributed <span class="text-indigo-800 font-semibold">Agile</span> teams following software development life cycle (SDLC)
    </li>
  </ul>
</div>

      
     

    </div>
  </div>
  )
}

export default Work