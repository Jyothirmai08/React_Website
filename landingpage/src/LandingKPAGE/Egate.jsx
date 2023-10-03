import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo2.jpeg'
import logoo from './browser-removebg-preview.png'

import './EgateL.css'

export const Egate = () => {
  return (
    <>
      <div className=''>
     
            <div className='Egate_logo_with_Link'>
              <div className='Egate_landing_header-e6578i'>
               <div className='Egate_logo_hjurnfh'>
                <img src={logo}  alt=""/> 
                <h2 >...tutoring by grads from IIT/IISc</h2>
               </div>
               <div>
                <a style={{color:'#000'}} href="/">eGRADTutor Publications</a>
               </div>
              </div>
            </div>

        <section className='EGATE_eLanding_Container'>
          <div className="Egate_landing">
              <div className='EGATE_landingE'>
                <div className='Egate_loge_landing'>
                  <img src={logoo}  alt=""/> 
                </div>
                <div className='Egate_landiing_ojnkl'>
                    <h2>Welcome to eGRADTutor</h2>
                    <p>eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country. Our courses are developed by the alumni of IIT/IISc with an intent to enhance the student's abilities to face some of the toughest exams of the country. Our offerings not just provide a deeper understanding of the subjects to the students, but they also make them exam ready.</p>
                </div>
              </div>            
          </div>
        </section>

        <section className='Egate_eLanding_Container Egate_landing'>
          <div className="EGATE_eCordsLanding ">
          <div className='Ug_egatePAge-pg'>
          <Link  className='EGATE_elanLink' to={"/home"}>
            <ul className='EGATE_elandUl'>
              <h3>UG </h3>
              <li><Link to="/iitjee">IIT-JEE <span> (Mains & Advanced) </span> </Link></li>
              <li><Link to={'/neet'}>NEET</Link></li>
              <li><Link >BITSAT</Link></li>
              <li><Link >VITEEE</Link></li>
              <li><Link >&OTHER ENTRANCE EXAMS</Link></li>
            </ul>
          </Link>
          </div>

          <div className='Ug_egatePAge-pg '>
          <Link className='EGATE_elanLink' to={"/PgHome"}>           
            <ul className='EGATE_elandUl'>
              <h3 >PG </h3>
              <li><Link >GATE</Link></li>
              <li><Link >IIT-JAM</Link></li>
              <li><Link >ESC</Link></li>
              <li><Link >ISRO</Link></li>
              <li><Link >&OTHER ENTRANCE EXAMS</Link></li>
            </ul>   
          </Link>
          </div>

         <div className='Ug_egatePAge-pg'>
         <Link className='EGATE_elanLink' to={"/MbaHome"}> 
            <ul className='EGATE_elandUl'>
              <h3>MBA</h3>
              <li><Link >GRE</Link></li>
              <li><Link >GMAT</Link></li>
              <li><Link >CAT</Link></li>
              <li><Link >XAT</Link></li>
              <li><Link >&OTHER ENTRANCE EXAMS</Link></li>
            </ul>
          </Link>
         </div>

          <div className='Ug_egatePAge-pg'>
          <Link  className='EGATE_elanLink'>
            <ul className='EGATE_elandUl'>
              <h3>CA </h3>
              <li><Link >ACCOUNTING</Link></li>
              <li><Link >MERCANTILE LAWS</Link></li>
              <li><Link >GENERAL ECONOMICS</Link></li>
              <li><Link >QUANTITATIVE APTITUDE</Link></li>
              <li><Link >&OTHER ENTRANCE EXAMS</Link></li>
            </ul>
          </Link>
          </div>

          </div>
        </section>


{/* 
            <div className='Egate_landing'>
            
                <div className='Egate_land_COntainer'>
                   <div className='EgateHeader'>
                   <div className='EgateLanding_div'>
                            <img src={logo} width={100} alt=""/>
                            <h2 >...tutoring by grads from IIT/IISc</h2>
                        </div>

                        <section className='Egate_eLanding_Container'>
                            <div className="landingE">

                                <div >
                                <img src={logoo} width={100} alt=""/> 
                                </div>
                                <div>
                                    <h2>Welcome to eGRADTutor</h2>
                                    <p>eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country. Our courses are developed by the alumni of IIT/IISc with an intent to enhance the student's abilities to face some of the toughest exams of the country. Our offerings not just provide a deeper understanding of the subjects to the students, but they also make them exam ready.</p>
                                </div>

                                
                            </div>
                        </section>
                   </div>
                
              </div>
            </div> */}











    </div>
    </>
  )
}
