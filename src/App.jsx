import { useState } from 'react'
import './App.css'

import artistImage from './assets/artist.jpeg'
import { FaCheck } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { LuCoins } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";
import { TiFolder } from "react-icons/ti";
import serviceOne from './assets/servicesImagesOne.png'
import serviceTwo from './assets/servicesImagesTwo.png'
import serviceThree from './assets/servicesImagesThree.png'
import serviceFour from './assets/servicesImagesFour.png'

// import { GrGallery } from "react-icons/gr";<GrGallery />
// import { CgProfile } from "react-icons/cg";<CgProfile />
// import { FaServicestack } from "react-icons/fa";<FaServicestack />

import { IoMdCheckmark } from "react-icons/io";


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
              <div className='flex flex-col gap-6'>
                <div className='flex flex-row gap-2 justify-start h-16 pt-4'>
                  <div className='w-10 h-24 rounded-full'>
                    <img src={artistImage} alt="" className='rounded-full' />
                  </div>
                  <h3 className='pt-2 font-bold'>Joella's Art</h3>
                  <a href="#" className='pt-1 bg-[#0d0d2c] text-white font-normal h-8 w-14 rounded-sm text-center'>PRO</a>
                  <a href="#" className='pt-1 bg-[#0d0d2c] text-white font-normal h-8 w-18 text-center rounded-sm'>SELECT</a>
                </div>
                <div className='flex flex-row gap-2 justify-start items-center'>
                  <FaStar />
                  <p>4.9</p>
                  <p className='text-gray-400'>(3)</p>
                  <FaCheck />
                  <p>10 projects done</p>
                  {/* SIDE NOTE; 10 IS SUPPOSED TO BE DYNAMIC, 3 IS ALSO SUPPOSED TO BE DYNAMIC */}
                </div>
                <div className='flex gap-4 flex-col'>
                  <div className='flex flex-row gap-2'>
                    <LuCoins className='mt-1' />
                    <p>From $200/project</p>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <FaLocationDot className='mt-1' />
                    <p>Unknown city, Nigeria</p>
                  </div>
                  <div className='flex gap-2 flex-row'>
                    <IoMdTime className='mt-1' />
                    <p>Responds in about 15 minutes</p>
                  </div>
                  <div className='flex gap-2 flex-row'>
                    <FaRegFileAlt className='mt-1' />
                    <p>2 services available</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* SLIDESHOW OF IMAGES DONE*/}
            </div>
            <div className='flex gap-4 justify-between'>
              <a className='bg-[#0d0d2c] h-10 w-56 text-white text-center flex items-center justify-center rounded-sm '>Get in Touch</a>
              <div className='flex justify-center items-center h-10 rounded-full  bg-gray-300'>
                <TiFolder size={30}/>
              </div>
              {/* <CiFolderOn /> */}
            </div>
          </div>
        );
      case 'tab3':
        return (
          <div className="p-6 flex gap-8 flex-col border border-emerald-200 rounded-xl">
            <div className='max-w-sm w-full bg-white flex flex-col gap-3 p-4 rounded-xl shadow-sm transition-all hover:shadow-md'>
              <div className='w-full rounded-lg overflow-hidden bg-[#121212]'>
                <img src={serviceOne} alt="Brand Identity" className='w-full h-full object-cover'/>
              </div>
              <h4 className='text-lg font-extrabold tracking-tight leading-snug text-[#0d0d2c]'>Brand identity</h4>
              <div className='flex items-center gap-2'>
                <img src={artistImage} alt="" className='h-6 w-6 rounded-full object-cover' />
                <span className='text-sm font-medium text-[#2d2d44]'>Joan Jerome</span>
                <span className='text-[10px] font-bold text-[#6e6e80] bg-[#eef0f3] px-1.5 py-0.5 rounded uppercase tracking-wider'>PRO</span>
              </div>
              <div className='flex items-center gap-1 mt-1"'>
                <span className='text-base font-extrabold text-[#0d0d2c]'>$100</span>
                <span className='text-yellow-400 text-sm' role="img" aria-label="lightning">⚡</span>
              </div>
            </div>
            <div className='max-w-sm w-full bg-white flex flex-col gap-3 p-4 rounded-xl shadow-sm transition-all hover:shadow-md'>
              <div className='w-full rounded-lg overflow-hidden bg-[#121212]'>
                <img src={serviceTwo} alt="" className='w-full h-full object-cover'/>
              </div>
              <h4 className='text-lg font-extrabold tracking-tight leading-snug text-[#0d0d2c]'>Assets Creation for games</h4>
              <div className='flex items-center gap-2'>
                <img src={artistImage} alt="" className='h-6 w-6 rounded-full object-cover' />
                <span className='text-sm font-medium text-[#2d2d44]'>Joan Jerome</span>
                <span className='text-[10px] font-bold text-[#6e6e80] bg-[#eef0f3] px-1.5 py-0.5 rounded uppercase tracking-wider'>PRO</span>
              </div>
              <div className='flex items-center gap-1 mt-1"'>
                <span className='text-base font-extrabold text-[#0d0d2c]'>$100</span>
                <span className='text-yellow-400 text-sm' role="img" aria-label="lightning">⚡</span>
              </div>
            </div>
            <div className='max-w-sm w-full bg-white flex flex-col gap-3 p-4 rounded-xl shadow-sm transition-all hover:shadow-md'>
              <div className='w-full rounded-lg overflow-hidden bg-[#121212]'>
                <img src={serviceThree} alt="" className='w-full h-full object-cover'/>
              </div>
              <h4 className='text-lg font-extrabold tracking-tight leading-snug text-[#0d0d2c]'>Custom merchandise and appearl</h4>
              <div className='flex items-center gap-2'>
                <img src={artistImage} alt="" className='h-6 w-6 rounded-full object-cover' />
                <span className='text-sm font-medium text-[#2d2d44]'>Joan Jerome</span>
                <span className='text-[10px] font-bold text-[#6e6e80] bg-[#eef0f3] px-1.5 py-0.5 rounded uppercase tracking-wider'>PRO</span>
              </div>
              <div className='flex items-center gap-1 mt-1"'>
                <span className='text-base font-extrabold text-[#0d0d2c]'>$100</span>
                <span className='text-yellow-400 text-sm' role="img" aria-label="lightning">⚡</span>
              </div>
            </div>
            <div className='max-w-sm w-full bg-white flex flex-col gap-3 p-4 rounded-xl shadow-sm transition-all hover:shadow-md'>
              <div className='w-full rounded-lg overflow-hidden bg-[#121212]'>
                <img src={serviceFour} alt="" className='w-full h-full object-cover' />
              </div>
              <h4 className='text-lg font-extrabold tracking-tight leading-snug text-[#0d0d2c]'>Custom potraits</h4>
              <div className='flex items-center gap-2'>
                <img src={artistImage} alt="" className='h-6 w-6 rounded-full object-cover' />
                <span className='text-sm font-medium text-[#2d2d44]'>Joan Jerome</span>
                <span className='text-[10px] font-bold text-[#6e6e80] bg-[#eef0f3] px-1.5 py-0.5 rounded uppercase tracking-wider'>PRO</span>
              </div>
              <div className='flex items-center gap-1 mt-1"'>
                <span className='text-base font-extrabold text-[#0d0d2c]'>$100</span>
                <span className='text-yellow-400 text-sm' role="img" aria-label="lightning">⚡</span>
              </div>
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

        <div className='max-w-xl w-full flex flex-col gap-6 md:gap-8 p-4 md:p-6 text-[#0d0d2c]'>
          <div className="inline-flex gap-2 bg-[#f8f7fa] p-1.5 rounded-full self-start">
            <button className="text-xs font-bold px-4 py-2 bg-white rounded-full border border-gray-200/80 shadow-sm uppercase tracking-wider text-[#0d0d2c]">
              Hire Talent
            </button>
            <button className="text-xs font-bold px-4 py-2 text-[#9595a5] hover:text-[#0d0d2c] transition-colors uppercase tracking-wider">
              Get Hired
            </button>
          </div>
          <h1 className='text-left items-center text-3xl font-semibold max-w-xs'>Work with the world’s best in <span>Artist</span></h1>
          <div className='flex flex-col gap-6 -mt-2'>
            <div className='flex justfiy-center items-center gap-4'>
              <div className='bg-pink-300 rounded-full p-1'>
                <IoMdCheckmark />
              </div>
              <p className='text-sm font-normal gap-4'>Generate your brief and receive proposals – for free</p>
            </div>
            <div className='flex justfiy-center items-center gap-4'>
              <IoMdCheckmark />
              <p className='text-sm font-normal '>Browse real-world design and development work</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <IoMdCheckmark />
              <p className='text-base font-normal'>Hire top-rated freelancers and agencies with confidence</p>
            </div>
          </div>
          <div>
            <button className='font-bold h-[40] text-center p-3 rounded-4xl border-[#0d0d2c] text-white bg-[#0d0d2c]'>Start your Project Brief</button>
          </div>
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
