'use client'

import { Button } from "@/components/base/buttons/button";
import React from 'react'

const HeroButtons = () => {
    const handleResume = () => {

    }
    const handleEmail = () => {

    }

    return (
        <div className='flex flex-row mt-2 gap-3 justify-center sm:justify-start'>
            <Button color="primary" size="md">See Resume</Button>
            <Button color="secondary" size='md'>Send Email</Button>
        </div>
  )
}

export default HeroButtons
