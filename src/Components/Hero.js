import React from 'react'
import video from '../assets/World.mp4'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <section name='platform' className='w-full h-full'>

        {/* video section */}
        <video className='w-full h-screen   object-cover absolute -z-10' src={video} autoPlay muted loop />

        <div className='text-white w-full h-screen flex flex-col justify-center items-center'>
            
            <h1 className='text-4xl md:text-5xl font-bold text-center'
            >Decentralized <br /> <span className='text-indigo-400'>Trending</span> Protocol</h1>

            {/* typed here */}
            <Typed
        className='py-2'
                    strings={['Segreto santo non si di purita dallo di esso potra']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />

            <div className='flex space-x-4 mt-4'>
                <button className='bg-indigo-500 py-1 px-4 rounded-full font-semibold bg-opacity-40 hover:scale-110 duration-300'>Use Defi</button>

                <button className='bg-pink-800 rounded-full py-1 px-8 bg-opacity-50 hover:scale-110 duration-300 font-semibold'>Faq</button>
            </div>
        </div>

        
    </section>
  )
}

export default Hero