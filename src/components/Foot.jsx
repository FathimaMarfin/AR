import React from 'react'

function Foot() {
  return (
    <div className='bg-neutral-800 text-white h-[70vh]'>
        <div className='flex ml-50 gap-50 py-20 font-extralight'>
            <div className='gap-2 '>
            <h1 className='text-3xl mb-5'> Work With Us</h1>
            <h2 className='text-xl '>Become a supplier</h2>
            <h2 className='text-xl'>Join the manpower</h2>
            </div>

            <div className='gap-2' >
                <h1 className='text-3xl mb-5'>Call Us</h1>
                <h2 className='text-xl '>+966 13 361 7417</h2>
                <h2 className='text-xl'>+966 55 427 3747</h2>
                <h2 className='text-xl'>+973 3469 5373</h2> 
                <h1 className='text-3xl mt-10 mb-5'>Email Us</h1>
                <h2 className='text-xl '>info@arengineeringksa.com</h2>
                <h1 className='text-3xl mt-10 mb-5'>Our office</h1>
                <address className='text-xl not-italic'><p>Al Jubail 31951 P.O.Box 2594 </p>
                    <p>King Abdullah Road,</p>
                    <p>Blue Palase Tower 1st,ksa</p></address>
            </div>

            <div>
                <h1 className='text-3xl mb-5'>Link</h1>
                <h2 className='text-xl'>Home</h2>
                <h2 className='text-xl'>About Us</h2>
                <h2 className='text-xl'>Our Services</h2>
                <h2 className='text-xl'>Contact Us</h2>
            </div>
             
        </div>
        <div className='bg-amber-600 w-full -mt-10 h-[5vh]'>

        </div>
       
        
    </div>
    
    
  )
}

export default Foot