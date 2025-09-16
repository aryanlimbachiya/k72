import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center lg:px-8 px-6 py-2 border-white rounded-full uppercase'>
        <Link className='text-[6vw] -mt-1 -mb-3' to="/projects">Projets</Link>
      </div>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center lg:px-10 px-6 py-2 border-white rounded-full uppercase'>
        <Link className='text-[6vw] -mt-1 -mb-3' to="/agence">Agence</Link>
      </div>
    </div>

  )
}

export default HomeBottomText
