import React from 'react';

//messenger upNav
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';

//messenger downNav
import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';

import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';

function Conv11 () 
{
    return(
        <>
        <div className="convenav">
            <RadioButtonUncheckedIcon className="frndconvercir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndconverac"></AccountCircleIcon>
               <div className="frndnmeconverstaus">
               <p className="frndconvername"> JAI shree ram11</p>
               <p className="frndconverstatus"> JAI shree ram11</p>
               </div>
               <InfoTwoToneIcon className="converoutline"></InfoTwoToneIcon>
            </div>

            <button className="convedownnav">
             <SentimentSatisfiedTwoToneIcon className="convedownnavimog">
                  </SentimentSatisfiedTwoToneIcon>
                  <input type="text" placeholder="Message...." 
                  className="convedownnavinput"></input>

                   <FavoriteBorderTwoToneIcon className="convedownnavlove">    
                   </FavoriteBorderTwoToneIcon>
            </button>

            <div className="conversation">
            <div className="conversation2"></div>
            <div className="Mess">Message11</div>
            </div>
        </>
      
    );
}

export default Conv11;