import React from 'react';

const Takemytaggedpic = (propstaggedpic) =>
{
    return(
        <div  className="HEIGHTMYALLTAGGEDPOSTONINSTA">
        <img src={propstaggedpic.taggedpicsrc} alt="No any taggedpost"
         className="MYALLTAGGEDPOSTONINSTA"></img>
        </div>
    );
}

export default Takemytaggedpic;

