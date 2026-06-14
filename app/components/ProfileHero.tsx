import React from 'react'
import Image from "next/image"
import HeroButtons from './HeroButtons'

const ProfileHero = () => {
  return (
    <section className='flex flex-col sm:flex-row items-center sm:items-start mt-12 gap-6'>
      <div className='relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] shrink-0'>
        <Image 
          src='/images/hero/profilepicture.png'
          alt='Profile'
          fill
          loading='eager'
          className='rounded-lg object-cover'
        />
      </div>

      <div className='ml-0 sm:ml-4 text-center sm:text-left'>
        <div>
          <h1 className='text-2xl sm:text-3xl font-bold'>
            Renz Paolo Ayuban
          </h1>
          <p className='text-sm font-semibold mt-1'>Dasmariñas, Cavite</p>
        </div>
        
        <div className='flex flex-row gap-4 text-md font-semibold mt-7 justify-center sm:justify-start'>
          <p>Student</p>
          <p>\</p>
          <p>Developer</p>
          <p>\</p>
          <p>Barista</p>
        </div>
        <HeroButtons />
      </div>
    </section>
  )
}

export default ProfileHero
