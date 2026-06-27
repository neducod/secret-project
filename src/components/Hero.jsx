import { useState } from 'react'
import { IoMdCheckmark } from "react-icons/io";
// import { CgMenuLeftAlt } from "react-icons/cg";



function Hero(){
    const [activeTab, setActiveTab] = useState('tab1');

    const renderHeroContent = () => {
        switch (activeTab){
            case 'tab1':
            return(
                <div className='p-4 bg-pink-400'>
                    <h3>testing</h3>
                </div>
            );
            case 'tab2':
            return (
                <div className='bg-pink-400 p-4'>
                    <p>hghfhdddsddd</p>
                </div>
            );
            default:
            return null;
        }
    }
    return(
        <>
            <section className='flex justify-start flex-col gap-4 p-2'>
                <div className='max-w-xl w-full flex flex-col gap-6 md:gap-8 p-4 md:p-6 text-[#0d0d2c]'>
                    <div className='inline-flex gap-2 bg-[#f8f7fa] p-1.5 rounded-full self-start'>
                        <button  onClick={() => setActiveTab('tab1')} className={`text-xs font-bold px-4 py-2 rounded-full border shadow-sm uppercase tracking-wider
                        ${activeTab === 'tab1'
                        ? 'bg-white text-[#0d0d2c] shadow-sm'
                        : 'text-gray-400'}`}>Hire Talent</button>

                        <button  onClick={() => setActiveTab('tab2')} className={`text-xs font-bold px-4 py-2 rounded-full border shadow-sm uppercase tracking-wider
                        ${activeTab === 'tab2'
                        ? 'bg-white text-[#0d0d2c] shadow-sm'
                        : 'text-gray-400'}`}>get hired</button>
                    </div>

                    <div className='transition-all duration-300 ease-in-out'>
                        {renderHeroContent()}
                    </div>
                </div>
            </section>
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

                    <h1 className='text-left items-center text-3xl font-semibold max-w-xs'>Work with amazing talents in <span>Drawing</span></h1>
                    {/* drawing, painting, designing */}
                    <div className='flex flex-col gap-6 -mt-2'>
                        <div className='flex justfiy-center items-center gap-4'>
                            <div className='bg-pink-300 rounded-full p-1'>
                                <IoMdCheckmark />
                            </div>
                            <p className='text-sm font-normal gap-4'>Generate your brief and receive proposals – for free</p>
                        </div>
                        <div className='flex justfiy-center items-center gap-4'>
                            <div className='bg-pink-300 rounded-full p-1'>
                                <IoMdCheckmark />
                            </div>
                            <p className='text-sm font-normal '>Browse real-world design and development work</p>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <div className='bg-pink-300 rounded-full p-1'>
                                <IoMdCheckmark />
                            </div>
                            <p className='text-sm font-normal'>Hire top-rated freelancers and agencies with confidence</p>
                        </div>
                    </div>
                    <div>
                        <button className='font-bold h-[40] text-center p-3 rounded-4xl border-[#0d0d2c] text-white bg-[#0d0d2c]'>Start your Project Brief</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;