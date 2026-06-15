import Image from "next/image"
import HeroButtons from './HeroButtons'
import { BiSolidCoffeeBean } from "react-icons/bi"
import { FaLocationDot } from "react-icons/fa6"

const ProfileHero = () => {
  return (
    <section className='flex flex-col sm:flex-row items-center mt-12 gap-6 flex-1'>
      <div className='relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] shrink-0'>
        <Image 
          src='/images/hero/profilepicture.png'
          alt='Profile'
          fill
          loading='eager'
          className='rounded-lg object-cover'
        />
      </div>

      <div className='ml-0 sm:ml-4 text-center sm:text-left w-full'>
        <div>
          <div className='flex flex-row items-center gap-3 justify-center sm:justify-start'>
            <h1 className='text-2xl sm:text-3xl font-bold'>
              Renz Paolo Ayuban
            </h1>
            <BiSolidCoffeeBean size={28} />
          </div>
          <div className='flex flex-row items-center gap-1 justify-center sm:justify-start'>
            <FaLocationDot size={13} />
            <p className='text-sm font-semibold mt-1'>Dasmariñas, Cavite</p>
          </div>
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
