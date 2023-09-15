import React from 'react'
import Header from './Header'
import Faq from './Faq'

export const NeetOtc = () => {
  return (
  <>
    <Header/>
{/* NEET - ONLINE TEST SERIES */}
        <div className=''>
            <div>
                <h2>NEET - ONLINE TEST SERIES - 2023 COURSE BROCHURE </h2>
                <a href="#">COURSE BROCHURE</a>
            </div>
            <div>
                <p>The National eligibility and entrance test is conducted every year by the national testing agency for admission to MBBS colleges in India.
                Preparing well and attempting the exam successfully is one of the greatest desires of MBBS aspirants. NEET Online Test Series provides the students with an opportunity to assess their learning and understanding of the subject before showcasing their prowess in the final examination. Our online test series makes your understanding stronger and helps you prepare better. We at eGRADTutor academy are offering 15 online tests and 5 previous year question papers as part of the NEET UG Challenger test series.</p>
            </div>
        </div>

{/* WHY ONLINE TEST SERIES? */}
        <div>
            <h2>WHY ONLINE TEST SERIES?</h2>
            <ul>
                <li>Helps in enhancing the student's speed and accuracy of answering questions in the examination.</li>
                <li>Our online test series is crafted by academic experts with years of domain knowledge and experience.</li>
                <li>Practice with our NEET online test series to be aware of the hurdles that you might face while attempting the final examination.</li>
                <li>Practice with our NEET online test series to be aware of the hurdles that you might face while attempting the final examination.</li>
            </ul>
        </div>

        {/* BUY ONLINE TEST SERIES */}
        <div>
            <h2>BUY ONLINE TEST SERIES</h2>

            <div>
            <table id="customers">
             <tr>   
             <th >S.NO</th>
             <th> TEST SERIES TYPE</th>
             <th>PRICE</th>
             <th>START DATE</th>
             <th>END DATE</th>
             <th>BUY NOW</th>
             </tr>
             <tr>
             <td>1</td>
             <td>Challenger Test Series (15 Tests)</td>
             <td>&#8377;2000 +<small>GST</small></td>
             <td>22-03-2023</td>
             <td>07-05-2023</td>
            <td><center><button class="btn btn-primary" onclick="onlineugegradtutorinexams()">BUY NOW</button></center></td>
             </tr>
           </table>
            </div>
        </div>


    <Faq/>
  </>
  )
}
