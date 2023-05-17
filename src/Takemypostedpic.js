
import React from "react";

const Takemypostedpic = (propspostedpic) =>
{
   return(
         <div className="HEIGHTMYALLPOSTEDPOSTONINSTA">
           <img src={propspostedpic.postedpicsrc} alt="No any postedpost"
           className="MYALLPOSTEDPOSTONINSTA"></img>
        </div>
   );
}

export default Takemypostedpic;