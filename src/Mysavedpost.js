import React from 'react';



import Mysavedpicstorehere from './Mysavedpicstorehere';

import Takemysavedpic from './Takemysavedpic';


function Mysavepic(currSavedpic)
{
   return(
     <>
     <Takemysavedpic
     savedpicsrc ={currSavedpic.savedpicsrc} 
     ></Takemysavedpic>
     
     </>
   );
}

function Mysavedpost () 
{
    return(
        <>
         <p className="topborderossymbolofsavedpics"></p>

        <div className="myallsavedpics">
        <div  className="Takemysavedpicpropssavedpic">
            {Mysavedpicstorehere.map(Mysavepic)}
            </div> 
        
        </div>
        </>
    );
}

export default Mysavedpost;