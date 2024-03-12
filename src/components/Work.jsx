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
    Developed responsive and interactive web application for over 40 clients utilizing semantic <span class="text-indigo-800 font-semibold">HTML5</span>,<span class="text-indigo-800 font-semibold">JavaScript</span>, <span class="text-indigo-800 font-semibold">ReactJS</span> and <span class="text-indigo-800 font-semibold">CSS</span> , leveraging Webpack build tools for code compilation ,resulting in a 10% improvement in development efficiency
    </li>
    <li class="py-2 text-black">
    Assisted in creation of a dashboard web application for monitoring patients data using <span class="text-indigo-800 font-semibold">ReactJS</span>  and <span class="text-indigo-800 font-semibold">Redux</span> to interact with microservices in cloud via <span class="text-indigo-800 font-semibold">RESTful APIs</span> 
    </li>
    <li class="py-2 text-black">Developed and designed <span class="text-indigo-800 font-semibold">UI</span> for a database of customer’s health and created a secure login for over 100 members.</li>
    <li class="py-2 text-black">Collaborated with cross-functional teams, including UX designers and back-end developers, to implement performance-driven
design changes.</li>
<li class="py-2 text-black">Revamped rendering inconsistencies, conducting thorough tests, implementing fixes, realizing a 20% improvement and slashing
bounce rates by 15%.</li>
<li class="py-2 text-black">Developed understaing of <span class="text-indigo-800 font-semibold">Docker</span> and <span class="text-indigo-800 font-semibold">Kubernetes</span> for project deployment, while also enhancing skills in responsive design and ensuring seamless cross-browser compatibility.</li>
  </ul>
</div>

      
     

    </div>
  </div>
  )
}

export default Work