import React from 'react';

const Takemysavedpic = (propssavedpic) =>
{
    return(
        <div className="HEIGHTMYALLSAVEDPOSTONINSTA">
        <img src={propssavedpic.savedpicsrc} alt="No any savedpost"
        className="MYALLSAVEDPOSTONINSTA"></img>
     </div>
    );
}

export default Takemysavedpic;