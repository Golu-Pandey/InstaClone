import React, { useState } from 'react';

function Pushnotificationsoption5 () 
{
   const[CHECKED1, setCHECKED1] = useState(" ");
   const[CHECKED2, setCHECKED2] = useState(" ");
   const[CHECKED3, setCHECKED3] = useState(" ");

   const check1 = () =>
   {
       setCHECKED1("checked");
       setCHECKED2(" ");
       setCHECKED3(" ");
   }
   const check2 = () =>
   {
       setCHECKED1(" ");
       setCHECKED2("checked");
       setCHECKED3(" ");
   }
   const check3 = () =>
   {
       setCHECKED3("checked");
       setCHECKED2(" ");
       setCHECKED1(" ");
   }

    return(
        <div className="Widthofchangepasscontent">
             <p className="leftborderofNOTIFICATIONsopton"></p>
             <div className="NOTIFICATION">
               
            <div className="Notificationfor1">
               <a className="NotificationforLikes Notificationoption">Likes</a> <br />
               
              <input type="radio" name="LIKES" value="1" className="Likeoption Notificationoptiosss" 
              onClick={check1} ></input> <a className="Notificationoptiosss">Off </a> <br />

              <input type="radio" name="LIKES" value="2" className="Likeoption Notificationoptiosss" 
              onClick={check2} ></input>  <a className="Notificationoptiosss">From People I Follow </a> <br />

              <input type="radio" name="LIKES" value="3" className="Likeoption Notificationoptiosss" 
              onClick={check3} ></input> <a className="Notificationoptiosss"> From Everyone</a> <br />
             
            </div>
            <hr className="NotificaBorderbottomline1" />

            <div className="Notificationfor2">
               <a className="NotificationforcommentLike Notificationoption">Comment Likes</a> <br />
               
              <input type="radio" name="COMMENT" value="1" className="Likeoption Notificationoptiosss" 
              onClick={check1} ></input> <a className="Notificationoptiosss">Off </a> <br />

              <input type="radio" name="COMMENT" value="2" className="Likeoption Notificationoptiosss" 
              onClick={check2} ></input>  <a className="Notificationoptiosss">  From People I Follow</a> <br />
    
            </div>
            <hr className="NotificaBorderbottomline2" />

            <div className="Notificationfor3">
               <a className="NotificationforLikes Notificationoption">Likes and Comments on Photos of You</a> <br />
               
              <input type="radio" name="LIKESandcomment" value="1" className="Likeoption Notificationoptiosss" 
              onClick={check1} ></input> <a className="Notificationoptiosss">Off </a> <br />

              <input type="radio" name="LIKESandcomment" value="2" className="Likeoption Notificationoptiosss" 
              onClick={check2} ></input>  <a className="Notificationoptiosss">From People I Follow </a> <br />

              <input type="radio" name="LIKESandcomment" value="3" className="Likeoption Notificationoptiosss" 
              onClick={check3} ></input> <a className="Notificationoptiosss"> From Everyone</a> <br />
             
            </div>
            <hr className="NotificaBorderbottomline3" />

            <div className="Notificationfor4">
               <a className="NotificationforcommentLike Notificationoption">Accepted Follow Requests</a> <br />
               
              <input type="radio" name="Acceptfollowrequests" value="1" className="Likeoption Notificationoptiosss" 
              onClick={check1} ></input> <a className="Notificationoptiosss">Off </a> <br />

              <input type="radio" name="Acceptfollowrequests" value="2" className="Likeoption Notificationoptiosss" 
              onClick={check2} ></input>  <a className="Notificationoptiosss">  From Everyone</a> <br />

            </div>
            <hr className="NotificaBorderbottomline4" />

            <div className="Notificationfor5">
               <a className="NotificationforcommentLike Notificationoption">Instagram Direct Requests</a> <br />
               
              <input type="radio" name="Directrequest" value="1" className="Likeoption Notificationoptiosss" 
              onClick={check1} ></input> <a className="Notificationoptiosss">Off </a> <br />

              <input type="radio" name="Directrequest" value="2" className="Likeoption Notificationoptiosss" 
              onClick={check2} ></input>  <a className="Notificationoptiosss">  From Everyone</a> <br />

            </div>
            <hr className="NotificaBorderbottomline5" />

            <div className="Notificationfor6">
               <a className="NotificationforcommentLike Notificationoption">Reminders</a> <br />
               
              <input type="radio" name="Reminder" value="1" className="Likeoption Notificationoptiosss" 
              onClick={check1} ></input> <a className="Notificationoptiosss">Off </a> <br />

              <input type="radio" name="Reminder" value="2" className="Likeoption Notificationoptiosss" 
              onClick={check2} ></input>  <a className="Notificationoptiosss">  From Everyone</a> <br />

            </div>
            <hr className="NotificaBorderbottomline6" />

            <div className="Notificationfor7">
               <a className="NotificationforcommentLike Notificationoption">First Posts and Stories</a> <br />
               
              <input type="radio" name="firstpostandstory" value="1" className="Likeoption Notificationoptiosss" 
              onClick={check1} ></input> <a className="Notificationoptiosss">Off </a> <br />

              <input type="radio" name="firstpostandstory" value="2" className="Likeoption Notificationoptiosss" 
              onClick={check2} ></input>  <a className="Notificationoptiosss">  From People I Follow</a> <br />

             <input type="radio" name="firstpostandstory" value="3" className="Likeoption Notificationoptiosss" 
              onClick={check3} ></input>  <a className="Notificationoptiosss">  From Everyone</a> <br />

            </div>
            <hr className="NotificaBorderbottomline7" />

            <div className="Notificationfor8">
               <a className="NotificationforcommentLike Notificationoption">IGTV View Counts</a> <br />
               
              <input type="radio" name="igtvvuewcount" value="1" className="Likeoption Notificationoptiosss" 
              onClick={check1} ></input> <a className="Notificationoptiosss">Off </a> <br />

             <input type="radio" name="igtvvuewcount" value="2" className="Likeoption Notificationoptiosss" 
              onClick={check2} ></input>  <a className="Notificationoptiosss">  From Everyone</a> <br />

            </div>
            <hr className="NotificaBorderbottomline8" />

            <div className="Notificationfor9">
               <a className="NotificationforcommentLike Notificationoption">Support Requests</a> <br />
               
              <input type="radio" name="supportrequest" value="1" className="Likeoption Notificationoptiosss" 
              onClick={check1} ></input> <a className="Notificationoptiosss">Off </a> <br />

             <input type="radio" name="upportrequest" value="2" className="Likeoption Notificationoptiosss" 
              onClick={check2} ></input>  <a className="Notificationoptiosss"> On</a> <br />

            </div>
            <hr className="NotificaBorderbottomline9" />

            <div className="Notificationfor10">
               <a className="NotificationforcommentLike Notificationoption">Live Videos</a> <br />
               
              <input type="radio" name="livevideos" value="1" className="Likeoption Notificationoptiosss" 
              onClick={check1} ></input> <a className="Notificationoptiosss">Off </a> <br />

             <input type="radio" name="livevideos" value="2" className="Likeoption Notificationoptiosss" 
              onClick={check2} ></input>  <a className="Notificationoptiosss"> On</a> <br />

            </div>
            <hr className="NotificaBorderbottomline10" />

            </div>
        </div>
    );
}

export default Pushnotificationsoption5;


/* it is very very important to select one option and hidd other options */
/*
  <select>
              <option value="Off"> Off </option>
              <option value="FromPeopleIFollow"> From People I Follow </option>
              <option  value="FromEveryone"> From Everyone </option>
              </select>
*/