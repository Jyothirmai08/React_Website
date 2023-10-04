import React from 'react'
import about from './Images/about.png'
import AboutLogo from './Images/aboutLogo.png'
import './about.css'
import { AboutItems } from './AboutItems'
import {AboutVisionMission} from './AboutItems'
import Logo from './Images/browser-removebg-preview.png'
// import Logo from './Images/logo2.jpeg'
// In thiscourse section having two compoenents one is AboutItem.js and about.css
export const About = () => {
  return (
  <div className='About-bg ' >
    <h1>ABOUT US</h1>

      <div className='AboutSection ContainerAbout'>
        <img style={{borderRadius :'10px'}} src={Logo} alt=''/>
        <div className='aboutContant' >
            
            <p className='' style={{textAlign: 'justify'}}>eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country. Our courses are developed by the alumni of IIT/IISc with an intent to enhance the student's abilities to face some of the toughest exams of the country. Our offerings not just provide a deeper understanding of the subjects to the students, but they also make them exam ready.</p>
        </div>
      </div>
      <div className='VISIONMISSION'>
            <div className='vistionMission-section'>
              {AboutVisionMission.map((vistion,Mistion) => {
                return(
                <div key={Mistion} className={vistion.vistionMisstion}>
                    {/* <div className={vistion.imageClass}>
                      <img  width={250} src={vistion.vision} alt='image from about Items' />
                    </div> */}
                  <div className={vistion.contantClass}>
                    <h3>{vistion.Title}</h3>
                    <p>{vistion.Ptext}</p>
                    <p>{vistion.Values}</p>
                    <ul className='ulList'>
                      <li className={vistion.contantClassForUl}>{vistion.Points1}</li>
                      <li className={vistion.contantClassForUl}>{vistion.Points2}</li>
                      <li className={vistion.contantClassForUl}>{vistion.Points3}</li>
                      <li className={vistion.contantClassForUl}>{vistion.Points4}</li>
                    </ul>
                  </div>
                </div>
                )
              })}
              
            </div>
        </div>
    </div>
  )
}

export default About;