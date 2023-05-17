import React, { useState } from 'react';

import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp';

import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

function Editprofileoption1 ()
{
    return(
        <div className="WidthofEditprofilecontent">
          <p className="leftborderofEditprofileopton"></p>
          <form type="submit" className="Editprofilecontent">
            <div className="formstart1">
               <RadioButtonUncheckedSharpIcon className="formstartcir"></RadioButtonUncheckedSharpIcon>
               <AccountCircleSharpIcon className="formstartac"></AccountCircleSharpIcon>
               <div className="formstartnamepic samewidth">
                 <div className="formstartname">My_insta_id_name</div>
                 <div className="formstartchangepic">Change Profile Photo</div>
               </div>
            </div>
                
             <div className="myinstaName"><a className="setallsame">Name</a> 
            <input type="text" placeholder="My_insta_name" className="enterinstaname setallwidthsame"></input>
            </div> 

            <div className="myidName"><a className="setallsame">Username</a>  
            <input type="text" placeholder="My_insta_id_name" className="enterinstaidname setallwidthsame"></input>
            </div>   

            <div className="WebsiteofEditprofilecontent "> <a className="setallsame">Website</a> 
            <input type="text" placeholder="Website" className="enterWebsitename setallwidthsame"></input>
            </div>

            <div className="mybio"> <a className="setallsame"> Bio</a> 
                      <textarea   className="setallwidthsame" id="setbiowidth"> 
                        
                      </textarea>      
            </div>  

            <div className="myemailaddress">  <a className="setallsame"> Email</a>
            <input type="email" placeholder="@gmail.com" className="enterEmailaddress setallwidthsame"></input>
            </div> 

            <div className="myphonenumber"><a className="setallsame"> Phone Number</a>
            <input type="number" placeholder="+91 1234567890" className="enterPhonenumber setallwidthsame"></input>
            </div>

            <div className="mygender"> <a className="GENDER"> Gender</a>
            <p className="choosegender ">
            <a className="gendername"> Male</a><input type="radio"  className="clickgender"  name="mygender"/>

            <a className="gendername"> Female</a><input type="radio"  className="clickgender"  name="mygender"/>

            <a className="gendername"> Other</a><input type="radio"  className="clickgender"  name="mygender"/>
            </p>
            </div> 

            <div className="accountsuggestions"> <a className="setallsame"> Similar Account Suggestions</a>
            <input type="checkbox"  className="accountsuggestionsallow"></input>
            <a className="mightwanttofollow">
              Include your account when recommending similar accounts people might want to follow.[?]
              </a>

            </div> 
            
            <div className="mysubmission"> 
            <input type="submit" value="Submit" className="submitform"></input>
            <a className="accountdisable">Temporarily disable my account </a>
            </div> 

          </form>
        </div>
    );
}

export default Editprofileoption1;