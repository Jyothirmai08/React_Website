import React from "react";
import {Link} from "react-router-dom"
import  {AiFillHome,AiOutlineUser,AiFillBook,AiFillPhone,  AiOutlinePercentage, AiFillQuestionCircle} from "react-icons/ai"
// ----------------header css------------------------
import "./header.css"




// ----------------navbardata_------------------------

import { NavData } from "./NavData";


const Header = () => {
  return (
    <>
      <div className="ug_header">
        {NavData.map((NavData, index) => {
          return (
            <div className="header" key={index}>
              <div className={NavData.logo_img_container}>
               <Link to={"/"}> <img src={NavData.logo} alt="" /></Link>
              </div>
              <div className="nav" >
                <ul className={NavData.navbar}>
                  <li>
                    <a href="#home" className={NavData.navlist}>{NavData.link1}</a>
                  </li>
                  <li>
                    <a href="#about" className={NavData.navlist}>{NavData.link2}</a>
                  </li><li>
                    <a href="#exam" className={NavData.navlist}>{NavData.link3}</a>
                  </li><li>
                    <a href="#courses" className={NavData.navlist}>{NavData.link4}</a>
                  </li><li>
                    <a href="#contact" className={NavData.navlist}>{NavData.link5}</a>
                  </li><li>
                    <a href="#faq" className={NavData.navlist}>{NavData.link6}</a>
                  </li>
                
                </ul>                
              </div>
              <div className={NavData.login}>
          <a href="https://online-ug.egradtutor.in" className={NavData.login_btn}>{NavData.btn1}</a>
         
         
        </div>    

            </div>
          );
        })}     
     
      </div>

      <div className="mobile_nav">
        
                    <div className="mobil_navbar">
                        <ul className="mobil_navbar_links" >
                         <li><a href="#home" title="Home"><AiFillHome/></a></li>
                         <li><a href="#about" title="About"><AiOutlineUser/></a></li>
                         <li><a href="#exam" title="Exams"><AiOutlinePercentage/></a></li>
                         <li><a href="#courses" title="Courses"><AiFillBook/></a></li>
                         <li><a href="#contact" title="Contact"><AiFillPhone/></a></li>
                         <li><a href="faq"title="FAQ"s><AiFillQuestionCircle/></a></li>

                        </ul>
                    </div>
    

</div>
    </>
  );
};

export default Header;
