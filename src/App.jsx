import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


// import { FaAlignLeft } from "react-icons/fa";

function App() {

  return (
    <>
    <nav>
      {/* <FaAlignLeft /> */}
    </nav>
      <section>
        {/* SECTION FOR PERMANENT LAYOUT */}
        <div className='flex justify-start flex-col gap-4 bg-[#0d0c22] p-6 fixed bottom-0'>
          <p className='text-white font-medium'>Get 20% (up to $100) off your first payment for design and development services on Dribbble! Use code WELCOME20 🎉</p>
          <a href="#" className='h-[31] w-36 rounded-full bg-[#f5f2f2] text-[#0d0c22] p-4 text-center'>Get Started</a>
        </div>
      </section>
      <section className='flex justify-start flex-col gap-4 p-2'>
        <div className='flex flex-row gap-2 p-4 items-center mb-6 bg-[#faf9fb]'>
          {/* <button className='bg-transparent text-[#3a3546] font-normal'>HIRE TALENT</button> */}
          <button className='text-[#766d8f]    flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group'>GET HIRED</button>


<button
  class="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
>
  <span class="relative z-20 text-black">HIRE TALENT</span>

  <span
    class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
  ></span>

  <span
    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#151516] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
  ></span>
  <span
    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#151516] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
  ></span>
  <span
    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#151516] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
  ></span>
  <span
    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#151516] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
  ></span>
</button>


        </div>
        <h1 className='text-left items-center text-3xl font-semibold max-w-xs'>Work with the world’s best in <span>Artist</span></h1>
        <div className='flex flex-col gap-6 -mt-2'>
          <div>
            <p className='text-base font-normal gap-4'>Generate your brief and receive proposals – for free</p>
          </div>
          <div>
            <p>Browse real-world design and development work</p>
          </div>
          <div>
            <p>Hire top-rated freelancers and agencies with confidence</p>
          </div>
        </div>
        <div>
          <button className='font-bold h-[40] text-center p-3 rounded-4xl border-[#0d0d2c] text-white bg-[#0d0d2c]'>Start your Project Brief</button>
        </div>
      </section>
      <footer className='flex justify-center items-center flex-col gap-6'>
        <div>
          <h6>Joannie</h6>
        </div>
        <div>
          <ul className='flex flex-row gap-4'>
            <li><a href="#">For artist</a></li>
            <li><a href="#">Hire Talent</a></li>
            <li><a href="#">Talk to Joan</a></li>
            <li><a href="#">Sponsorship</a></li>
          </ul>
        </div>
        <div>
          <ul className='flex flex-row gap-4'>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div>
          {/* SOCIAL MEDIA ICONS */}
        </div>
      </footer>
    </>
  )
}

export default App
