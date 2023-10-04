import React from 'react'
import { MBAExploreExamData } from './MBAExploreExamsData'
import '../UG/ExploreExams.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import img1 from './images/BITSAT.png'


export const MBAExploreExams = () => {
  return (
    <div>
        <div className='explore-container container' id='Exams'>
            <div className='explore-contantText'><h1>EXPLORE EXAMS</h1></div>


            <div className='mbaexampage'>
                <div className='exmapageimg'>
                    <img src={img1} alt="" />
                </div>

                <div className='cards-container'>
                {MBAExploreExamData.map((item,index) => {
                    return(
                        <div key={index} className={item.cardContant}>
                          
                                <div className='cardFlex' >
                                  <div className='hand-div'>
                                 
                                   <Link to={item.examPage}><h4>{item.Title}</h4></Link>
                                  <div className='hand' ><i class="fa-solid fa-hand-point-left"></i></div>

                                  </div>
                                    <div className='CoursesTextIcons'>
                                       <Link to={item.explore}><p>{item.OnlineTestSeries} <i class="fa-solid fa-file-lines"></i></p></Link>
                                       <Link to={item.liveclasses}><p>{item.OLVClasses}<i class="fa-solid fa-tv"></i></p></Link>
                                        
                                    </div>
                                </div>
                        </div>
                    )
                })}
            </div>


            </div>

            
        </div>
    </div>
  )
}

