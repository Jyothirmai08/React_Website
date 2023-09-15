import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import Header from './Header'
import OtsNavHeader from './OtsNavHeader'
import { FooterData } from './FooterData'
import './Footer.css'
import gif from './Images/hand-scroll-bar.gif'
import { useState } from 'react'
import './Faq.css'
import Nav from './Nav'
import '../UG/navbar.css'

import About from '../UG/About'

const NeetExam = () => {
    const [selected, setSelected] = useState(null)
    const toggle2 = (i1) => {
        // return i
        if (selected === i1) {
            return setSelected(null)

        }
        setSelected(i1)
    }
    const sixtoten = [
        {
            Qustion: "CONDUCTING INSTITUTE",
            answer: [About]
        },
    
        {
            Qustion: "EXAM PATTERN ",
            tableTh: "Mode of examination",
            td1:'NTA NEET 2023 exam date',
            td2:'Total marks in NEET',
            td3:'Total number of questions',
            td4:'Question Type',
            td5:'Examination Duration',
            td6:'Subjects covered',
            td7:'Language/Medium',
            td8:'NEET marking scheme 2023',

            tableTh2: 'Pen and Paper Mode',
           
            td9:'May 7, 2023',
            td10:'720 Marks',
            td11: 'A total of 200 questions will be asked out of which candidates will have to answer 180 questions',
            td12:'	Multiple choice questions type',
            td13:'3 hours and 20 minutes(200 minutes)',
            td14:'Physics, Chemistry & Biology (Zoology & Botany) subjects',
            td15:'8 languages including English, Tamil, Hindi, Assamese, Gujarati, Bengali, Telugu and Marathi languages',
            
                li:'4 marks will be awarded for each correct answer',
                li2:'One mark will be deducted for each wrong attempt',
                li3:'No marks for unanswered question'
          
           


        },
        {
            Qustion: "What is the mode of payment?",
            answer: " Payment can be done online only through Debit card, Credit card, UPI, Net Banking. No Cash payments or center based registrations."
        },
    
        {
            Qustion: "Will the money be refunded incase I don't like the course?",
            answer: "No refund will be given if a student wishes to opt out during the period of subscription. Demo tests and Videos are given to have an idea regarding our courses." 
            
        },
    
        {
            Qustion: "What if the money is debited and the course is not accessible?",
            answer: "We will try to resolve any techanical issues regarding payment within 48 hours of credit to our account. Please contact our web team -info@egradtutor.in , +91-7386660493 for any queries or resolution."
        },
       
     
    ]
  return (
  <div className='conatiner  '>
    {/* <div className='container_navlogo navlogo ots-conatinerHead'> */}
        {/* <Link to={"/"} element={<Landingpage />}><img src={logo} alt="" /></Link> */}
      
      {/* <div className='imgClass' > <img width={300} src={logo} alt="" /></div> */}

   
    {/* <div className='login-btn'>
    <Link  className='otsNavLinks eAnimation' to={"/"}>eGRADTutor Publications</Link>
        <div className='links'>
        <Link className='otsNavLinks' to={"/"}>Student Login</Link>
        <Link className='otsNavLinks' to={"/"}>Contact Us</Link>
        </div>
        
    </div> */}

{/* </div> */}
{/* nav header */}
<div className='container'>

<Header/>
</div>

<div className='FAQCONTENT'>
            <div className="wrapper-3 container">
            
            <div className='' >
                <h1>NEET EXAM</h1>
          
            </div>
                <div className="accordion3">
                    {sixtoten.map((item, i2) => (
                        <div className="item2">
                            <div className="title" onClick={() => toggle2(i2)}>
                                <h2>{item.Qustion}</h2>
                                <span>{selected === i2 ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i2 ? 'content-show2' : 'content2'}>{item.answer}
                           {/* <table>
                           <thead>
                                <tr>
                                    <th>{item.tableTh}</th>
                                    <th>{item.tableTh2}</th>
                                </tr>
                               
                                
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{item.td1}</td>
                                    <td>{item.td9}</td>                                   
                                </tr>

                               <tr>
                               <td>{item.td2}</td>
                                    <td>{item.td10}</td>
                               </tr>

                               <tr>
                               <td>{item.td3}</td>
                                <td>{item.td11}</td>
                               </tr>

                               <tr>
                               <td>{item.td4}</td>
                                <td>{item.td12}</td>
                               </tr>

                               <tr>
                               <td>{item.td5}</td>
                                <td>{item.td13}</td>
                               </tr>
                               <tr>
                               <td>{item.td6}</td>
                                <td>{item.td14}</td>
                               </tr>

                               <tr>
                               <td>{item.td7}</td>
                                <td>{item.td15}</td>
                               </tr>

                               <tr>
                               <td>{item.td8}</td>
                                <td><ul>
                                    <li>4 marks will be awarded for each correct answer</li>
                                    <li>One mark will be deducted for each wrong attempt</li>
                                    <li>No marks for unanswered question</li>
                                    </ul></td>
                               </tr>
                               
                               
                                    
                               
                            </tbody>
                           </table> */}
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
</div>
 




 
  )
}

export default NeetExam;