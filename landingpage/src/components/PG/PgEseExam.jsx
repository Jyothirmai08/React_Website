import React from 'react';

import AccoData from './AccoData'
import { Acco } from './Acco';



export const PgEseExam = () => {


  return (
    <>
     <h1>Accordion Table Example</h1>
      <Acco data={AccoData} />
     
    </>
  )
}
