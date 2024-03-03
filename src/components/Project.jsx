import React from 'react'

const Project = () => {
  return (
  <div name="projects" id='project' class="w-full md:min-h-screen text-white bg-black ">
    <div class="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
      <div class="pb-8">
      <p class="text-4xl font-bold inline border-b-4 border-[#C3073F]">Projects</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">Modern Real Estate Marketplace </h3>
          {/* <p class="text-[#6a7280]">2023</p> */}
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">ReactJS</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">NodeJS</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">ExpressJS</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">MongoDB</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">JWT</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">REST APIs</p>
          </div>
          <p class="py-2 text-[#6a7280]">This project was built with the MERN stack—utilizing React, Node.js, Express.js, MongoDB, 
          JWT authentication, and Rest APIs, alongside Tailwind CSS. 
          It's a web application featuring advanced authentication and robust search functionality..</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/PatidarAsh/Mern-Estate.git" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          <a href="https://skyline-realesate.onrender.com" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a>
        </div>
      </div>
      <div class="shadow-md shadow-[#b1b8c1]  bg-white group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">Amazon Community</h3>
          {/* <p class="text-[#6a7280]">2023</p> */}
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Figma</p>
          </div>
          <p class="py-2 text-[#6a7280]">This UX project involved integrating Twitter-like functionality into the Amazon app, focusing on tasks such as live sessions, group shopping, following users, and product searches with hashtags, with a key emphasis on clear navigation and intuitive design.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://www.figma.com/proto/gtRe3osceIdUf9ueCqArGE/Ashvini_Patidar?type=design&node-id=685-412&viewport=1748%2C2031%2C0.39&t=b76cJn1lTgRDykzM-0&scaling=min-zoom&starting-point-node-id=689%3A618" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          <a href="https://www.figma.com/proto/gtRe3osceIdUf9ueCqArGE/Ashvini_Patidar?type=design&node-id=573-1345&viewport=-545%2C-1113%2C0.23&t=XYEr4rCvJC4pbIgb-0&scaling=scale-down&starting-point-node-id=574%3A1351" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a>
        </div>
      </div>
      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">PetMatch App</h3>
          {/* <p class="text-[#6a7280]">2023</p> */}
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Figma</p>
          </div>
          <p class="py-2 text-[#6a7280]">For this UX project, the work done involved conducting usability tests, gathering user feedback, 
          and iterating on the design to enhance the user experience of the mobile app that helps find people their furry friend.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://www.figma.com/proto/gtRe3osceIdUf9ueCqArGE/Ashvini_Patidar?type=design&node-id=72-377&viewport=193%2C99%2C0.11&t=b76cJn1lTgRDykzM-0&scaling=min-zoom&starting-point-node-id=490%3A695" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          <a href="https://www.figma.com/proto/gtRe3osceIdUf9ueCqArGE/Ashvini_Patidar?type=design&node-id=190-225&viewport=170%2C346%2C0.03&t=Jt7pl2GiOUqrlGGR-0&scaling=scale-down&starting-point-node-id=222%3A2468&show-proto-sidebar=1" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a>
        </div>
      </div>
      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">Retail Analytics</h3>
          {/* <p class="text-[#6a7280]">2023</p> */}
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Oracle SQL</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Pl/SQL</p>
          </div>
          <p class="py-2 text-[#6a7280]">This project was build using oarle pl/sql- to provide a comprehensive price comparison platform across stores for 
          groceries and electronics providing a valuable solution to the customers to make informed purchasing decisions.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/PatidarAsh/DMDD_RetailAnalytics_Project" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          {/* <a href="" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a> */}
        </div>
      </div>
      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">Word Puzzle Game</h3>
          {/* <p class="text-[#6a7280]">2023</p> */}
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">JavaFX</p>
          </div>
          <p class="py-2 text-[#6a7280]">This game is designed as a fun and challenging activity to test your English language skills through word puzzles while providing entertainment.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/PatidarAsh/CSYE_FinalProject.git" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          <a href="https://drive.google.com/file/d/1Fd_RC4Nwh4Wwdo5yxDoRgzTKz9PLT4xg/view?usp=sharing" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Project

