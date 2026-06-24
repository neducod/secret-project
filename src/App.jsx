import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import artistImage from './assets/artist.jpeg'

// import { FaAlignLeft } from "react-icons/fa";

function App() {
  // 1. Keep track of the active tab (default to 'tab1')
  const [activeTab, setActiveTab] = useState('tab1');

  // 2. Define your content for each view
  const renderContent = () => {
    switch (activeTab) {
      case 'tab1':
        return (
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h3 className="text-xl font-bold text-blue-800 mb-2">First Feature Content</h3>
            <p className="text-gray-600">This is the completely unique content for the first button. Perfect for showing feature overviews, introductions, or primary data.</p>
          </div>
        );
        case 'tab2':
        return (
          <div className="p-6 bg-purple-50 border border-purple-200 rounded-xl flex gap-2 flex-col">
            <div>
              {/* <div className='w-10 h-24 rounded-full'>
                <img src={artistImage} alt="" className='rounded-full' />
              </div> */}
              <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-4 justify-start'>
                  <div className='w-10 h-24 rounded-full'>
                    <img src={artistImage} alt="" className='rounded-full' />
                  </div>
                  <h3 className='pt-2'>Joella's Art</h3>
                  <a href="#" className='pt-2 bg-[#0d0d2c] text-white font-bold h-12 w-14 rounded-sm text-center'>PRO</a>
                  <a href="#" className='pt-2 bg-[#0d0d2c] text-white font-bold h-12 w-18 text-center rounded-sm'>SELECT</a>
                </div>
                <div className='flex flex-row gap-4'>
                  {/* star icon */}
                  <p>4.9</p>
                  <p>(3)</p>
                  {/* CHECK ICONS */}
                  <p>10 projects done</p>
                  {/* SIDE NOTE; 10 IS SUPPOSED TO BE DYNAMIC, 3 IS ALSO SUPPOSED TO BE DYNAMIC */}
                </div>
                <div>
                  <div>
                    <p>From $200/project</p>
                  </div>
                  <div>
                    <p>Responds in about 15 minutes</p>
                  </div>
                  <div>
                    <p>2 services available</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* SLIDESHOW */}
            </div>
            <div>
              <button>Get in Touch</button>
              icon for favs
            </div>
          </div>
        );
      case 'tab3':
        return (
          <div className="p-6 bg-emerald-50  flex gap-8 flex-col border border-emerald-200 rounded-xl">
            <h3 className="text-xl font-bold text-emerald-800 mb-2">Third Feature Content</h3>
            <div className='p-4 bg-white border border-amber-100'>
              <h4>Brand identity</h4>
              <div>
                {/* image icon */}
                <h4>Joan Jerome</h4>
              </div>
              <p>$100</p>
            </div>
            <div className='p-4 bg-white border border-amber-100'>
              <h4>Assets Creation for games</h4>
              <div>
                {/* image icon */}
                <h4>Joan Jerome</h4>
              </div>
              <p>$100</p>
            </div>
            <div className='p-4 bg-white border border-amber-100'>
              <h4>Custom merchandise and appearl</h4>
              <div>
                {/* image icon */}
                <h4>Joan Jerome</h4>
              </div>
              <p className='text-gray-600'>$100</p>
            </div>
            <div className='p-4 bg-white border border-amber-100'>
              <h4>Custom potraits</h4>
              <div>
                {/* image icon */}
                <h4>Joan Jerome</h4>
              </div>
              <p className='text-gray-600'>$100</p>
            </div>
          </div>
        );
        default:
        return null;
    }
  }

  return (
    <>
    <nav>
      {/* <FaAlignLeft /> */}
    </nav>
      {/* <section>
        <div className='flex justify-start flex-col gap-4 bg-[#0d0c22] p-6 fixed bottom-0'>
          <p className='text-white font-medium'>Get 20% (up to $100) off your first payment for design and development services on Dribbble! Use code WELCOME20 🎉</p>
          <a href="#" className='h-[31] w-36 rounded-full bg-[#f5f2f2] text-[#0d0c22] p-4 text-center'>Get Started</a>
        </div>
      </section> */}
      <section className='flex justify-start flex-col gap-4 p-2'>
        <div className='flex flex-row gap-2 p-4 items-center mb-6 bg-[#faf9fb]'>
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

      <section className='w-full max-w-2xl mx-auto p-4'>
        <div className='flex p-1 bg-gray-100 rounded-xl mb-6 space-x-1'>
          <button onClick={() => setActiveTab('tab1')}
          className={`w-full py-2.5 text-sm font-medium leading-5 rounded-lg transition-all duration-200
            ${activeTab === 'tab1' 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'}`}>Shots</button>
          <button onClick={() => setActiveTab('tab2')}
          className={`w-full py-2.5 text-sm font-medium leading-5 rounded-lg transition-all duration-200
            ${activeTab === 'tab2' 
              ? 'bg-white text-purple-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'}`}>Artist</button>
          <button onClick={() => setActiveTab('tab3')}
          className={`w-full py-2.5 text-sm font-medium leading-5 rounded-lg transition-all duration-200
            ${activeTab === 'tab3' 
              ? 'bg-white text-emerald-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'}`}>Service</button>
        </div>

        <div className="transition-all duration-300 ease-in-out">
          {renderContent()}
        </div>

      </section>





      <footer className='flex justify-center items-center flex-col gap-6 mt-6'>
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
