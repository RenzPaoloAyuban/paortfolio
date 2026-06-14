import React from 'react'
import Image from "next/image"
import HeroButtons from './HeroButtons'

const ProfileHero = () => {
  return (
    <section className='flex flex-row items-align mt-12 gap-4'>
      <div className='relative w-[160px] h-[160px] shrink-0'>
        <Image 
          src='/images/hero/profilepicture.png'
          alt='Profile'
          fill
          loading='eager'
          className='rounded-lg object-cover'
        />
      </div>

      <div className='ml-4'>
        <div>
          <h1 className='text-3xl font-bold'>
            Renz Paolo Ayuban
          </h1>
          <p className='text-sm font-semibold mt-1'>Dasmariñas, Cavite</p>
        </div>
        
        <div className='flex flex-row gap-4 text-md font-semibold mt-7'>
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
