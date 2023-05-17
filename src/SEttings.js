import React, { useState } from 'react';

import Editprofileoption1 from './Editprofileoption1';

import Changepassoption2 from './Changepassoption2';

import Emaisandsmsoption4 from './Emaisandsmsoption4';

import Pushnotificationsoption5 from './Pushnotificationsoption5';

import Privacyandsecoption7 from './Privacyandsecoption7';

function SEttings ()
{
const[settingsoptions, setsettingsoptions]= useState(<Editprofileoption1></Editprofileoption1>)

  const showsettingsoptionscontent1 = () =>
  {
    
    setsettingsoptions(<Editprofileoption1></Editprofileoption1>);
    
  }
  
  const showsettingsoptionscontent2 = () =>
  {
    setsettingsoptions(
    <Changepassoption2></Changepassoption2>
    
    );
  }

  const showsettingsoptionscontent4 = () =>
  {
    setsettingsoptions(
    <Emaisandsmsoption4></Emaisandsmsoption4>
    
    );
  }

  const showsettingsoptionscontent5 = () =>
  {
    setsettingsoptions(
        <>
        <Pushnotificationsoption5></Pushnotificationsoption5>
    </>
    );
  }

  const showsettingsoptionscontent7 = () =>
  {
    setsettingsoptions(
        <>
    <Privacyandsecoption7></Privacyandsecoption7>
    </>
    );
  }
  

    return(
        <div className="settingscontent" >
           
           <div className="settingsoptionss">

             <div className="Editprofileoption1 settingsoption"
              onClick={showsettingsoptionscontent1}>
                 Edit Profile 
             </div>
             <div className="Changepassoption2 settingsoption"
             onClick={showsettingsoptionscontent2}>
                 Change Password
             </div>
             <div className="Appsandweboption3 settingsoption">
                 Apps and Websites
             </div>
             <div className="Emailandsmsoption4 settingsoption" 
             onClick={showsettingsoptionscontent4}>
                 Emais and SMS
             </div>
             <div className="Pushnotificationoption5 settingsoption"
             onClick={showsettingsoptionscontent5}>
                 Push Notifications
             </div>
             <div className="Managecontactoption6 settingsoption">
                 Manage Contacts
             </div>
             <div className="Privacyandsecoption7 settingsoption"
             onClick={showsettingsoptionscontent7}>
                 Privacy and Security
             </div>
             <div className="Loginactivityoption8 settingsoption">
                 Login Activity
             </div>
             <div className="Emailfrominstaoption9 settingsoption">
                 Emails from Instagram
             </div>
            
           </div>
           
           <div className="settingsoptionscontent">
               {settingsoptions}
               </div>
            
        </div>
    );
}

export default SEttings;