import React from 'react'
import { MdSecurity,MdStorage,MdControlCamera,MdOutlineWifiProtectedSetup } from 'react-icons/md';


const About = () => {
  return (
    <section name='about' className='w-full md:h-screen flex flex-col justify-center items-center bg-black px-6'>

        <h1 className='text-3xl text-center font-semibold text-slate-100'>A Growing Protocol Ecosystem</h1>

        <p className='text-white text-center py-2'>The Defi protocol system empire developer.The bird eyes of for air. And prophet velvet is.</p>

        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>

            <div className='border rounded p-6 hover:scale-105 duration-300'>
                <MdSecurity className='p-2 bg-blue-400 rounded-full text-white' size={45}/>

                <h1 className='font-semibold text-white text-xl py-2'>Reliable, temper-proof network</h1>

                <p className='text-white'>Bajo convexa encuentro lo de de quedo de, en veces sepultura ballenas manecitas del, los tan el amor osos, amor.</p>
            </div>


            <div className='border rounded p-6 hover:scale-105 duration-300'>
                <MdStorage className='p-2 bg-blue-400 rounded-full text-white' size={45}/>

                <h1 className='font-semibold text-white text-xl py-2'>Reliable, temper-proof network</h1>

                <p className='text-white'>Bajo convexa encuentro lo de de quedo de, en veces sepultura ballenas manecitas del, los tan el amor osos, amor.</p>
            </div>


            <div className='border rounded p-6 hover:scale-105 duration-300'>
                <MdControlCamera className='p-2 bg-blue-400 rounded-full text-white' size={45}/>

                <h1 className='font-semibold text-white text-xl py-2'>Reliable, temper-proof network</h1>

                <p className='text-white'>Bajo convexa encuentro lo de de quedo de, en veces sepultura ballenas manecitas del, los tan el amor osos, amor.</p>
            </div>


            <div className='border rounded p-6 hover:scale-105 duration-300'>
                <MdOutlineWifiProtectedSetup className='p-2 bg-blue-400 rounded-full text-white' size={45}/>

                <h1 className='font-semibold text-white text-xl py-2'>Reliable, temper-proof network</h1>

                <p className='text-white'>Bajo convexa encuentro lo de de quedo de, en veces sepultura ballenas manecitas del, los tan el amor osos, amor.</p>
            </div>




        </div>


    </section>
  )
}

export default About