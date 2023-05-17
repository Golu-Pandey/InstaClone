import React, { useState } from 'react';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import SettingsIcon from '@material-ui/icons/Settings';


//importing story component to show as insastorysave;
import Instastorysave from './Instastorysave';

//for instamidnave here is a symbol of all post,uplode video, saved done by user and tag post;
import BorderAllIcon from '@material-ui/icons/BorderAll';

import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';

//here importing Mypostedpic component to show allposted pic by user;
import Mypostedpic from './Mypostedpic';
import Mysavedpost from './Mysavedpost';
import Mytaggedpost from './Mytaggedpost';

//here importing SEttings component to show allSetting of user's profile;
import SEttings from './SEttings';

//here importing SEttingfromprofile component to show allSetting content from user's profile;
import SEttingfromprofile from './SEttingfromprofile';

function Myprofile1()
{

   const[myallconetentofinstamidnav1, setmyallconetentofinstamidnav1]=useState( <Mypostedpic></Mypostedpic>);

  const mycontent1 = () =>
  {
    setmyallconetentofinstamidnav1(
      
        <Mypostedpic className="myallpostpics1"></Mypostedpic>
      
    );
    setmyallconetentofinstamidnav3(" ");
    setmyallconetentofinstamidnav4(" ");
    setsettings1(" ");
    setsettings2(" ");
  }

  const[myallconetentofinstamidnav3, setmyallconetentofinstamidnav3]=useState( " ");

  const mycontent3 = () =>
  {
    setmyallconetentofinstamidnav3(
        <Mysavedpost></Mysavedpost>
    );
    setmyallconetentofinstamidnav1(" ");
    setmyallconetentofinstamidnav4(" ");
    setsettings1(" ");
    setsettings2(" ");
  }

  const[myallconetentofinstamidnav4, setmyallconetentofinstamidnav4]=useState(" ");

  const mycontent4 = () =>
  {
    setmyallconetentofinstamidnav4(
        <Mytaggedpost></Mytaggedpost>
    );
    setmyallconetentofinstamidnav1(" ");
    setmyallconetentofinstamidnav3(" ");
    setsettings1(" ");
    setsettings2(" ");
  }

  const[settings1, setsettings1] =useState(" ");
  const Showsettings1 = () =>
  {
    setsettings1(
      <div className="EDITPROFILEfromProfilecontainer">
      <div className="EDITPROFILEfromProfile">jai shree ram</div>
        <SEttings > </SEttings>
        </div>
    );
    setsettings2(" ");
    setmyallconetentofinstamidnav1(" ");
    setmyallconetentofinstamidnav3(" ");
    setmyallconetentofinstamidnav4(" ");
  }

  const[settings2, setsettings2] =useState(" ");
  const Showsettings2 = () =>
  {
    setsettings2(
    <>
     <button className="canclesettingonclickingCancle" onClick={Hidesettings2}>Cancle</button>
    <div className="canclesettingsfromprofile" onClick={Hidesettings2}></div>
    <SEttingfromprofile></SEttingfromprofile>
    </>
    );
    setsettings1(" ");
    setmyallconetentofinstamidnav1(" ");
    setmyallconetentofinstamidnav3(" ");
    setmyallconetentofinstamidnav4(" ");
  }

  const Hidesettings2 = () =>
  {
    setsettings2(" ");
    setsettings1(" ");
    setmyallconetentofinstamidnav1(" ");
    setmyallconetentofinstamidnav3(" ");
    setmyallconetentofinstamidnav4(" ");
  }


  return (
      <>
    <div  className="settingsfromprofile">{settings2}</div>
      <div className="profilecontent">

         <div className="settings1">{settings1}</div>

          <div className="profileinstaidnamesetting">

          <div className="profile">
          <RadioButtonUncheckedIcon className="profilecircle"></RadioButtonUncheckedIcon>
          <AccountCircleIcon className="profilepic"></AccountCircleIcon>
          </div>
            
            <div className="instaidnamesetting">

          <div className="Myinstaidnameandedit" >
              <a className="Myinstaidname instaidnameandedit">My-insta-id</a>
              <button className="editprofile instaidnameandedit" onClick={Showsettings1}>Edit Profile</button>
              <SettingsIcon className="profilesetting instaidnameandedit" onClick={Showsettings2}></SettingsIcon>
          </div>
          
         <div className="aboutProfile">
             <a className="numofpost aboutProf"> 10 post</a>
             <a className="numoffollowers aboutProf">223 followers</a>
             <a className="numoffollowing aboutProf">53 following</a>
         </div>

            <div className="instanametagline">
              <a className="instaname">My_name_is_shree ram</a><br />
              <a className="instatagline">
              रहिमन लाठी राखिए, सरसों तेल पिलाएं
              जाने कल किस मोड़ पे, हिंदू विरोधी मिल जाए
              ऐसी लाठी मारिए, भाग सके ना कोई
              राम-राम कहते फिरे,जब लाल पिछवाड़ा होई 🚩🚩
              </a>
            </div>

            </div>
         </div>

         <div className="instastorysave">
              <Instastorysave></Instastorysave>
             </div>
             <hr className="profilemidnaveline" />
             
            <div className="profilemidnave">
                 
                <div className="instamidnavecontent" onClick={mycontent1}>
                <BorderAllIcon className="insaPostbyusersymbol"></BorderAllIcon>
                <a className="insaPostbyuser">POSTS</a>
                </div>

                <div  className="instamidnavecontent">
                <QueueOutlinedIcon className="insaigtvbyusersymbol"></QueueOutlinedIcon>
                <a className="insaigtvbyuser">IGTV</a>
                </div>

                <div  className="instamidnavecontent" onClick={mycontent3}>
               <BookmarkBorderIcon className="insasavedbyusersymbol"></BookmarkBorderIcon>
               <a className="insasavedbyuser">SAVED</a>
               </div>

               <div  className="instamidnavecontent" onClick={mycontent4}>
               <AccountBoxOutlinedIcon className="insatagbyusersymbol"></AccountBoxOutlinedIcon>
               <a className="insatagbyanotheruser">TAGGED</a>
               </div>

            </div>

               <div className="myallconetentofinstamidnav">
                 {myallconetentofinstamidnav1}
                 {myallconetentofinstamidnav3}
                 {myallconetentofinstamidnav4}
               </div>
          
        </div>
   </>     
  );
}

export default Myprofile1;