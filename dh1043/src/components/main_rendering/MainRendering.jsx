import React, { useContext } from 'react'
import { gData } from '../../App'

import './mainRendering.css'

import Vvgnli from '../../portals/vvgnli/Vvgnli'
import SocialMedia from '../../portals/social_media/SocialMedia'
import Webinars from '../../portals/webinars/Webinars'

const MainRendering = () => {
  let myData = useContext(gData)
  return (
    <>
        <div className="main__rendering">
            <div className="main__rendering__container">
                {myData.state==1?<Vvgnli />:''}
                {myData.state==2?<SocialMedia />:''}
                {myData.state==3?<Webinars />:''}
                {myData.state==4?'Btn 4':''}
                
            </div>
        </div>
    </>
  )
}

export default MainRendering