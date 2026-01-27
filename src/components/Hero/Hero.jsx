import React from 'react';

import heroImg1 from "../../img/download.jpg";
import heroImg2 from "../../img/blue.jpg";
import heroImg3 from "../../img/3.jpg";
import jubailImg from "../../img/Jubail.jpg";
import tabukImg from "../../img/Tabuk.jpg";
import yanbuImg from "../../img/yanbu.jpg";
import bahrainImg from "../../img/bahrain.jpg";


export default function Hero () {
  return (
    <section className='w-full bg-neutral-800 flex flex-col gap-8  '> 
      <div 
        className='w-full h-screen bg-cover bg-center bg-no-repeat -mb-10'
        style={{ backgroundImage: `url(${heroImg1})` }}
      >
        <div className='relative z-10 flex flex-col items-center justify-center h-full'>
          <h1 className=' text-white text-4xl font-bold'>LETS BUILD YOUR DREAM PROJECT</h1>
          <h3 className='text-white text-xl font-extralight'>WITH EACH STEP ALONG THE WAY</h3>
         </div>
      </div>
      
      <div className='w-full mx-auto rounded-[60px] border border-gray-300 bg-white p-6 shadow-lg -mt-15 relative z-10 ml-0 h-[65vh]  '>
        
        <h1 className='text-3xl ml-30 text-black text-left  mb-10 mt-10 '>
          LET OUR ASSISTANCE BE YOUR RELIABLE SUPPORT
        </h1>
    
        <div className='flex ml-30 gap-30'>
          <div className='w-full sm:w-1/2 md:w-1/4 p-4 text-left'>
            <h3 className='text-xl text-amber-600 font-bold mb-3 pb-1'>
              Our Aim
            </h3>
            <p className='text-black'>
              To expand our abilities in strengthening existing & new client's requirements by adding new segments for enhancement having distinct and principal relation adhered with our prestigious clients.
            </p>
          </div>

          <div className='w-full sm:w-1/2 md:w-1/4 p-4 text-left'>
            <h3 className='text-xl text-amber-600 font-bold mb-3  pb-1'>
              Our Vision
            </h3>
            <p className='text-black'>
              The foremost goal is CLIENT SATISFACTION and to be a TRUSTED PARTNER.
            </p>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/4 p-4 text-left'>
            <h3 className='text-xl text-amber-600 font-bold mb-3  pb-1'>
              Our Mission
            </h3>
            <p className='text-black'>
              To achieve our vision through organic development and strategic partnerships, with long-term commitments.
            </p>
          </div> 
        </div>
         <div className='px-30 py-10'>
            <button className='bg-amber-600 cursor-pointer rounded-4xl text-amber-50 px-5 py-3 font-semibold '>Read more</button>
          </div>
      </div>

      <div 
        className='w-full h-screen bg-cover -mt-20 bg-center bg-no-repeat '
        style={{ backgroundImage: `url(${heroImg2})` }}

      >
        <div className='relative flex items-center justify-center h-full z-10'>
          <div className="absolute h-full z-10 mt-70 text-white font-extrabold text-4xl">
            <h1 >OUR SERVICES</h1>
          </div>
          
          
          <div className='relative flex w-[150vh] h-[30vh] flex-cols-1 md:flex-cols-3  gap-20'>

            <div className='bg-gray-200 p-6 rounded-4xl text-center'>
              <h1 className='text-2xl '>MANPOWER & CONTRACTING SERVICES</h1>
              <h3 className='mt-5 font-light text-xl'>Our construction Management (CM) team is closely involved in the planning and design phase and typically joins the project</h3>
            </div>

            <div className='bg-gray-200 p-6 rounded-4xl text-center'>
              <h1 className='text-2xl '>PROFESSIONAL RECRUITMENT</h1>
              <h3 className='mt-5 font-light text-xl'>Project Management:Project Managers, Lead Engineers, Protection Design Engineer, Planning Eng. - Civil / Mech.etc</h3>
            </div>

            <div className='bg-gray-200 p-6 rounded-4xl text-center'>
              <h1 className='text-2xl '>INDUSTRIAL SUPPORT SERVICES</h1>
              <h3 className='mt-5 font-light text-xl'>Turnaround/Shutdown Services Undertake planned turnarounds, shutdown & unplanned emergency shutdowns.</h3>
            </div>

            <div className='absolute'>
              <button className='rounded-4xl bg-amber-600 px-5 py-3 text-white mt-100 ml-140 cursor-pointer'>Explore More</button>
            </div>


            </div>

            
        </div>
      </div>

      <div className='w-full mx-auto rounded-[60px] border border-gray-300 bg-white p-6 shadow-lg -mt-15 relative z-10 ml-0 h-[75vh]  '>
        <h1 className='text-5xl text-center py-10'><span className='text-amber-600'>30+</span> PRESTIGIOUS CLIENTS</h1>        
      </div>
      
      <div 
        className='w-full h-[80vh] bg-cover -mt-20 bg-center bg-no-repeat '
        style={{ backgroundImage: `url(${heroImg3})` }}

        >
        
        <div className='relative flex items-center justify-center h-full z-10 gap-75 '>
          <div className='mb-20'>
            <h1 className='text-4xl  text-white font-bold '><span className='text-amber-600'>14</span> YEARS OF SERVICE</h1>
            <h3 className='text-white w-75'>AR ENGINEERING has completed over fourteen years of service to various prominent national & international industries and companies operating in Saudi Arabia.</h3>
          </div>
          <div className='mb-20'>
            <h1 className='text-4xl text-white font-bold'><span className='text-amber-600'>250+</span> MANPOWER</h1>
            <h3 className='text-white w-75'>Today, we have around 250 employees including many own engineers who provide contracting and support services in diverse fields</h3>
          </div>
          <div className='absolute'>
            <button className='rounded-4xl bg-amber-600 px-5 py-3 text-white mt-100 cursor-pointer'>Explore More</button>
          </div>
        </div>
       
      </div>
       

      <div className='w-full mx-auto rounded-[60px] border border-gray-300 bg-white p-6 shadow-lg -mt-15 relative z-10 ml-0 h-[60vh]  '>
        <h1 className='text-center py-10 text-4xl'>OUR WORK CULTURE</h1>
        <div className='flex gap-30 items-center  py-40 ml-70'>
          <h2>Proactive <span className='block'>Expertise</span></h2>
          <h2>Exceptional <span className='block'>Services</span></h2>
          <h2>Valuable <span className='block'>Connections</span></h2>
          <h2>Strategic <span className='block'>Planning</span></h2>
          <h2>Skilled <span className='block'>Workforce</span></h2>
          <h2>Efficient <span className='block'>Processes</span></h2>

        </div>
      </div>

      <div className='w-full h-[70vh]'>
        <h1 className='font-bold text-5xl text-center text-white'>OUR BRANCHES ACROSS THE MIDDLE EAST</h1>
        <div className=' flex py-7 '>
          <div className='group relative overflow-hidden'>
            <img className='px-1 w-[52vh] h-[65vh]' src={jubailImg}  alt="jubail" />
            <div className='absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out '  ></div>
            <div className='absolute inset-0 flex flex-col justify-center text-center p-4 text-white'>
              <h1 className='mt-55 transform group-hover:-translate-y-5 transition-transform duration-500 text-5xl font-bold'>JUBAIL</h1>
              <p className=' text-m opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150'>
                Al Jubail 31951 P.O.Box 2594 King Abdullah Road Blue Palase Tower 1st,KSA
               </p>
            </div>
          </div>

          <div className='group relative overflow-hidden'>
            <img className='px-1 w-[52vh] h-[65vh] relative' src={tabukImg} alt="tabuk" />
            <div className=' absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out '  ></div>
            <div className='absolute inset-0 flex flex-col justify-center text-center p-4 text-white'>
              <h1 className='mt-55 transform group-hover:-translate-y-5 transition-transform duration-500 text-5xl font-bold'>TABUK</h1>
              <p className=' text-m opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150'>
                AR Engineering, Duba Oxagon Postal code - 49311               
              </p>
            </div>
          </div>

          <div className='group relative overflow-hidden'>
            <img className='px-1 w-[52vh] h-[65vh] relative' src={yanbuImg} alt="yanbu"  />
            <div className=' absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out '  ></div>
            <div className='absolute inset-0 flex flex-col justify-center text-center p-4 text-white'>
              <h1 className='mt-55 transform group-hover:-translate-y-5 transition-transform duration-500 text-5xl font-bold'>YANBU</h1>
              <p className='  text-m opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150'>
                Al Higgi tower, King Abdulaziz Road Postal Code: 46424 P.O box - 1773               
              </p>
            </div>
          </div>

          <div className='group relative overflow-hidden'>
            <img className='px-1 w-[52vh] h-[65vh] relative' src={bahrainImg} alt="bahrain" />
            <div className=' absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out '  ></div>
            <div className='absolute inset-0 flex flex-col justify-center text-center p-4 text-white'>
              <h1 className='mt-55 transform group-hover:-translate-y-5 transition-transform duration-500 text-5xl font-bold'>BAHRAIN</h1>
              <p className='  text-m opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150'>
                AR Engineering, City center, 4650 - Shaikh Khalifa Bin Salman Highway Bahrain
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}