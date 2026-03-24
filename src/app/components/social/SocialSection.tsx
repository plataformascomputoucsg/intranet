import React from 'react'
import HeaderTitle from '../ui/HeaderTitle'
import InstagramFeed from './InstagramFeed'

const SocialSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-stretch gap-[15px] relative h-full">
      <HeaderTitle
        titleFirstWorld="Redes"
        titleSecondWorld="SOCIALES"
        link="https://www.instagram.com/ucsgrectorado/"
      />
      <div className="relative w-full flex-1 min-h-[635px] bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_#00000012]">
        <div className="w-full h-full flex bg-white rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
          <div className="w-full h-auto mx-4 py-4 flex-col items-start gap-7 flex relative">
            <InstagramFeed />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialSection
