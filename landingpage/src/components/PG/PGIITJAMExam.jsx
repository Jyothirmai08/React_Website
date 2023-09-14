import React from 'react'
import Header from '../UG/Header'
import { useState } from 'react'
import './GATECSS.css'
import table1 from '../PG/Images/iitjamtableimg1.png'
import tabimg from '../PG/Images/iitjamtableimg2.png'
import tabimg3 from '../PG/Images/tableimg3.png'
import tabimg4 from '../PG/Images/tableimg4.png'

export const PGIITJAMExam = () => {
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
                <h1>IITJAM</h1>
          
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
                                        <div className='imagessg'>
                                            <ul>
                                                <li></li>
                                                <li>{item.answer}</li>
                                            </ul>
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
        answer: "IIT GUWAHATI"
    },
// Exam Pattern ==========================
    {
        Qustion: "EXAM PATTERN",
        answerB: "MAINS ",
        // ansLI1: 'Mode of Exam:',
        // ansP1: 'It will be conducted via online (Computer-based) mode. However, Paper 2(Drawing test) will be held via pen-paper based mode.',
        // ansLI2:'Number of Papers:',
        // ansP2:'There will be two papers in JEE Main - Paper I for B.E/ B.Tech & Paper 2 for B.Arch/ B.Plan.',
        // ansLI3:'Time Duration:',
        // ansP3:'Candidates will get 3 hours to solve the paper. For PWD, 1 hour will be provided extra.',
        // ansLI4:'Questions Type:',
        // ansP4:'Objective type questions will be asked in the exam. Paper 2 will be subjective in nature. ',
        // ansLI5: 'Number of Questions:',
        // ansP5: 'There will be total 90 questions in Paper I (B.Tech/B.E) & 82 in Paper II A (B.Arch) and 105 questions in Paper II B (B.Plan).',
        // ansLI6: 'Languages:',
        // ansP6: 'Candidates will be able to attempt JEE Main in various languages. These are English, Gujarati, Hindi, Bengali, Malayalam, Kannada, Marathi, Odia, Assamese, Tamil, Urdu, Telugu & Punjabi.',
        // ansLI7: 'Marks:',
        // ansP7: 'Paper 1 will consist of 300 marks; Paper II A & Paper II B will consist of 400 marks.',
        // ansLI8: 'Marking Scheme:',
        // ansP8: 'For each correct answer, 4 marks will be given. 1 mark will be deducted for every incorrect answer.',

        // answerC: "ADVANCED ",
        // ansLIa: 'Mode of Exam:',
        // ansPa: 'JEE Advanced will be held in Online (Computer-based test) mode.',
        // ansLIb: 'Number of Papers:',
        // ansPb: 'There will be 2 Papers 1 & 2 (Both Mandatory).',
        // ansLIc: 'Time Duration:',
        // ansPc: '3 hours will be provided for each paper (4 hours for PwD candidates).',
        // ansLId: 'Subjects:',
        // ansPd: 'Questions in the paper will be from three subjects – Physics, Chemistry & Mathematics.',
        // ansLIe: 'Questions Type:',
        // ansPe: 'There will be MCQs in the paper with single correct options.',
        // ansLIf: 'Marking Scheme:',
        // ansPf: 'As per marking pattern, marks for vary for each correct answer. While negative marking will be done in some of the questions with incorrect responses.',
        // ansLIi: 'Languages:',
        // ansPi: 'Paper will be available in both Hindi and English language.',
        // ansLIj: 'Check in the table below Paper 1 & 2 questions and marks distribution:',
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
        answer: "uyihuiuj",
        answer1: "jhcbsduggggggggggg"

    },

    {
        Qustion: "IMPORTANT DATES",
        ansIMG: [tabimg4]
    },
]
