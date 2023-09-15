import React from 'react';
import {BrowserRouter as Router ,Routes,Route}from 'react-router-dom';
import  Footer  from '../src/components/UG/Footer';
import Landingpage from "../src/Landingpage";
import Home from './components/UG/Home';
import OTS from './components/UG/OTS';
import NEET from './components/UG/NEET';
import GATE_OTS from './components/PG/GATE_OTS';
import { GateOts } from './components/PG/GateOts';
import { PgHome } from './components/PG/PgHome';
import { MbaHome } from './components/MBA/MbaHome';
import { TERMsCONDITIONS } from './components/UG/TERMsCONDITIONS';
import { Privacypolicy } from './components/UG/Privacypolicy';
import { IITJEE_EXAM } from './components/UG/IITJEE_EXAM';
import OLVC from './components/UG/IITJEE_OLVC';
import {NeetExam} from './components/UG/NeetExam'
import { BitsatExam } from './components/UG/BitsatExam';
import { ViteeeExam } from './components/UG/ViteeeExam';
import { ApEamcetExam } from './components/UG/ApEamcetExam';

// ================ IMPORTED PG FILES =======================

import {PGGATE_Exam} from './components/PG/PGGATE_Exam.jsx'
import {PGIITJAMExam} from './components/PG/PGIITJAMExam.jsx'




const App = () => {
  return (
  <Router>
 {/* <Home/> */}
    <Routes>
    <Route path='/' element={ < Landingpage/>} />
    <Route path='/home' element={ <Home/> }/>
   <Route path='/iitjee' element={<OTS/>}/>
   <Route path='/iitjee_olvc' element={<OLVC/>}/>

   
   <Route path='/' element={<GATE_OTS/>}/>
   <Route path='/' element={<GateOts/>}/>

   <Route path='/PgHome' element={<PgHome/>}/>
   <Route path='/MbaHome' element={<MbaHome/>}/>
   <Route path='/terms' element={<TERMsCONDITIONS/>}/>
   <Route path='/policy' element={<Privacypolicy/>}/>
   <Route path='/iitjeeExam' element={<IITJEE_EXAM/>}/>
   <Route path='/neetexam' element={<NeetExam/>}/>
   <Route path='/bitsatexam' element={<BitsatExam/>}/>
   <Route path='/viteeeexam' element={<ViteeeExam/>}/>
   <Route path='/apeamcetexam' element={<ApEamcetExam/>}/>



   {/* PG FILES */}

   <Route path='/pggateexam' element={<PGGATE_Exam/>}/>
   <Route path='/pgiitjamexam' element={<PGIITJAMExam/>}/>

    </Routes>
<Footer/>
  </Router>
  );
}

export default App;