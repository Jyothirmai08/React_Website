import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import table1 from '../UG/Images/srmjeeimg1.png'
import tabimg from './Images/srmjeeimg2.png'
import tabimg1 from './Images/srmjeeimg3.png'
import tabimg5 from './Images/srmjeeimg4.png'

export const SrmJeeExam = () => {
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
        <Header/>
        <div className='FAQCONTENT' id='faq'>
            <div className="wrapper-3 container">
            
            <div className='' >
                <h1>SRMJEE EXAM</h1>
          
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
                                        <div className='imagessg'>{item.answer}  
                                        <img src={item.ansIMG} alt="" />
                                        </div>
                                                   
                                    
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
        answer: "SRM Institute of Science and Technology (SRMIST)"
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
        
    },

    {
        Qustion: "IMPORTANT DATES",
        ansIMG: [tabimg5],
    },
]
