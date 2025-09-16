import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 18.4%',
        end: 'top -170%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {

          let imageIndex;

          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div className='parent'>
      <div id='page1' className=''>
        <div ref={imageDivRef} className='absolute lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] lg:top-[10vh] -top-80 left-[30vw] lg:rounded-3xl rounded-xl overflow-hidden'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[50vh] mt-[25vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='lg:pl-[40%] pr-[1.5%] mt-20 font-[font1]'>
            <p className='lg:text-[3.1vw] text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div id='page2' className="ralative h-screen flex flex-col mt-60 m-35 text-xl gap-40">
        <div className='flex lg:flex-row lg:gap-88 gap-18'>
          <div>
            <h2>Expertise</h2>
          </div>
          <div>
            <ul>
              <li>Stratégie</li>
              <li>Publicité</li>
              <li>Branding</li>
              <li>Design </li>
              <li>Contenu</li>
            </ul>
          </div>
        </div>
        <div className='flex lg:flex-row gap-20 md:-ml-20'>
          <div>
            <p>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
          </div>
          <div>
            <p>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p>
          </div>
          <div>
            <p>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers. </p>
          </div>
        </div>
      </div>
      <div id="page3" className='h-screen'>

      </div>
    </div>
  )
}

export default Agence
