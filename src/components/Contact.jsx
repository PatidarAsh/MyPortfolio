import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen  flex justify-center items-center p-4 '>
        <form method='POST' action="https://getform.io/f/9c450100-9c22-46dd-bd5e-bef1a082eac4" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-black'>Contact</p>
                <p className='text-black py-4'>// Submit the form below or shoot me an email - patidar.as@northeastern.edu</p>
            </div>
            <input className='bg-neutral-300 border-slate-500 border-2 p-2' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 border-slate-500 border-2 bg-neutral-300' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-neutral-300 p-2 border-slate-500 border-2' name="message" rows="8" placeholder='Message' required></textarea>
            <button className='text-white bg-[#C3073F] hover:bg-[#1e3751] hover:border-[#1e3751] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact