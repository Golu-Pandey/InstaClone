import React from 'react';

import Mypostedpicstorehere from './Mypostedpicstorehere';

import Takemypostedpic from './Takemypostedpic';


function MyPostpic(currPostedpic)
{
   return(
     <>
     <Takemypostedpic
     postedpicsrc ={currPostedpic.postedpicsrc} 
     ></Takemypostedpic>
     
     </>
   );
}


function Mypostedpic( )
{
     return(
        <>
      <p className="topborderossymbolofpostpics"></p>
       
          <div  className="Takemypostedpicpropspostedpic">
            {Mypostedpicstorehere.map(MyPostpic)}
            </div>
      </>
     );
}

export default Mypostedpic;
