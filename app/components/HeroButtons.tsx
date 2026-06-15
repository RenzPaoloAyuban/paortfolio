'use client'

import { Button } from "@/components/base/buttons/button";

const HeroButtons = () => {
    return (
        <div className='flex flex-row mt-2 gap-3 justify-center sm:justify-start'>
            <a
              href="/cv/Curriculum Vitae - Renz Paolo Ayuban.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="primary" size="md">See Resume</Button>
            </a>
            <a href="mailto:ayubanrenzpaolo@gmail.com">
              <Button color="secondary" size='md'>Send Email</Button>
            </a>
        </div>
  )
}

export default HeroButtons
