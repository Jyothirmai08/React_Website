import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import table1 from '../UG/Images/neettableimg1.png'
import tabimg from './Images/neettableimg2.png'
import tabimg1 from './Images/neettableimg3.png'
import tabimg2 from './Images/neettableimg4.png'
import tabimg3 from './Images/neettableimg5.png'
import tabimg4 from './Images/neettableimg6.png'
import tabimg5 from './Images/neettableimg7.png'
import logo from './logo2.jpg'
import { Link } from 'react-router-dom'


export const NeetExam = () => {
    const [selected, setSelected] = useState(null)
    const toggle2 = (i1) => {
        // return i
        if (selected === i1) {
            return setSelected(null)

        }
        setSelected(i1)
    }
  return (
    <div className='' style={{margin: '2rem'}}>

         {/* import logo from './logo2.jpg' */}
          <nav>
             <div className="container nav__container">          
                <div className="pic">
                    <a href="/"><img src={logo} alt=""/></a>
                </div>    
                <ul className="nav__menu">
                    <li><Link to='/home'>Home</Link>   </li>
                    <li><a href="https://online-ug.egradtutor.in/" target='_blank' className="login1" >Login/User Registration </a></li>
                </ul>           
                 <button id="open-menu-btn"><i className="uil uil-bars"></i></button>
                 <button id="close-menu-btn"><i className="uil uil-multiply"></i></button>
             </div>   
           </nav> 
        <div className='FAQCONTENT' id='faq'>
            <div className="wrapper-3 container">
            
            <div className='' >
                <h1>NEET EXAM</h1>
          
            </div>
             <div className='sdfsf'>
                <div className="accordion">
                        {sixtoten.map((item, i2) => (
                            <div className="item2">
                                <div className="title" onClick={() => toggle2(i2)}>
                                    <h2>{item.Qustion}</h2>
                                    <span>{selected === i2 ? '-' : '+'}</span>
                                </div>
                                <div className={selected === i2 ? 'content-show2' : 'content2'}>
                                    <div>
                                        <div className='imagessg'>{item.answer}  <img src={item.ansIMG} alt="" /></div><br />
                                        <div className='imagessg'>{item.answer}  <img src={item.ansIMG1} alt="" /></div><br />
                                        <div className='imagessg'>{item.answer}  <img src={item.ansIMG2} alt="" /></div><br />
                                        <div className='imagessg'>{item.answer}  <img src={item.ansIMG3} alt="" /></div><br />
                                                   
                                    
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
             </div>

            </div>
        </div>
        </div>
  )
}





const sixtoten = [
    {
        Qustion: "CONDUCTING INSTITUTE",
        answer: "National Testing Agency"
    },
// Exam Pattern ==========================
    {
        Qustion: "EXAM PATTERN",
        answerB: "MAINS ",
        ansIMG: [table1],
     
       
    },
    // ELIGIBILITY ==========================================
    {
        Qustion: "ELIGIBILITY",
        ansIMG: [tabimg],
       
    },
// syllabus ================================
    {
        Qustion: "SYLLABUS",
        ansIMG: [tabimg1],
        ansIMG1: [tabimg2],
        ansIMG2: [tabimg3],
        ansIMG3: [tabimg4],
        
    },

    {
        Qustion: "IMPORTANT DATES",
        ansIMG: [tabimg5],
    },
]







