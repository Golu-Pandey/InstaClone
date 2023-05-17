import React from 'react';

import Mytaggedpicstorehere from './Mytaggedpicstorehere';

import Takemytaggedpic from './Takemytaggedpic';

function Mytaggpic (currTaggedpic)
{
    return(
        <Takemytaggedpic taggedpicsrc={currTaggedpic.taggedpicsrc}>
        </Takemytaggedpic>
    );
}

function Mytaggedpost () 
{
    return(
        <>
        <p className="topborderossymboloftaggedpics"></p>

        <div className="myalltaggedpics">
           <div className="Takemytaggedpicpropstaggedpic">
               {Mytaggedpicstorehere.map(Mytaggpic)}
           </div>
       </div>

       </>
    );
}

export default Mytaggedpost;