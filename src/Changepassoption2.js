import React from 'react';

import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp';

import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';


function Changepassoption2 ()
{
    return(
        
        <div className="Widthofchangepasscontent">
             <p className="leftborderofChangepassopton"></p>
         <form type="submit" className="Changepasscontent">
            <div className="formstart2">
            <RadioButtonUncheckedSharpIcon className="formstartcir2"></RadioButtonUncheckedSharpIcon>
               <AccountCircleSharpIcon className="formstartac2"></AccountCircleSharpIcon>
                 <div className="formstartname2">My_insta_id_name</div>
            </div>

            
            <div className="Password">
               <a className="passwordname">Old Password</a>
               <input type="password" placeholder="Enter old Password" className="Oldpassword passWord PASSWORD"></input>
            </div>
            <div className="Password">
            <a className="passwordname">New Password</a>
               <input type="password"  placeholder="Enter new Password" className="Newpassword passWord PASSWORD"></input>
            </div>
            <div className="Password">
            <a id="idpasswordname">Confirm New Password</a>
               <input type="password"  placeholder="Enter new Password again" className="Newpasswordconfirm passWord PASSWORD"></input>
            </div>
         

           <input type="submit" Value="Change Password" className="submitform2"></input>
               
               <div className="Forgotpass">Forgot Password?</div>
         </form>

        </div>
    );
}

export default Changepassoption2;