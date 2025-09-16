import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] mt-100 lg:mt-0 pt-5 text-center'>
      <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
        L'étincelle
      </div>
      <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[10vw] leading-[10vw]'>
        qui
        <div className='h-[7vw] w-[16vw] border-2 rounded-full overflow-hidden flex items-center justify-center -mt-3'>
          <Video />
        </div>
        génère
      </div>
      <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[6vw] leading-[10vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText
