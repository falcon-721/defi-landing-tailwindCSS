import React from 'react'

const Subscribe = () => {
  return (
    <section name='community' className='w-full md:h-screen py-10  bg-black px-6 flex '>

       <main className='md:w-10/12 mx-auto flex flex-col items-center justify-center space-y-4'>
        {/* part 1 */}
        <div>
            <h1 className='text-white font-semibold md:font-bold text-xl md:text-4xl'>Join Our Defi Community</h1>
        </div>

        {/* part 2 */}
        <div className='space-x-4'>
        <input className='rounded-full px-2 py-1 border border-indigo-500' type="email" placeholder='Enter your email' />

        <button className='bg-indigo-500 text-white py-1 px-4 rounded-full font-medium'>Sign Up</button>
        </div>
        {/* part 3 */}
        <div>
            <input type="checkbox" />
            <span className='text-slate-200 px-2'>Yes, I agree to receive email communications from Defi</span>
        </div>
       </main>

    </section>
  )
}

export default Subscribe