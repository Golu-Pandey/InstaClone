import React, { useState } from 'react';

import HomeIcon from '@material-ui/icons/Home';

import NearMeIcon from '@material-ui/icons/NearMe';

import ExploreIcon from '@material-ui/icons/Explore';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Story from './Story';

//Contain Frands List
import Frands from './Frands';

//contant innerpage of messanger;

import RadioButtonUncheckedTwoToneIcon from '@material-ui/icons/RadioButtonUncheckedTwoTone';


// button used as option in onclick on profile;
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import CachedIcon from '@material-ui/icons/Cached';

//here we are importing the Myprofile1 componenet to show the profile and post content;
import Myprofile1 from './Myprofile1';

//here we are importing the Myprofile1 componenet to show the profile and savedpost content;
import Myprofile2 from './Myprofile2';

//here we are importing the SEttings componenet to show the Settings content;
import SEttings from './SEttings';

/*use it as cancle the switching of account after clicking switch option of account */
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

/*symbol of check icon on front of account address; */
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
function Nav()
{
   const state = useState();

  //messsage of all my friend's;
  const [msgf, setMsgf] =useState(" ");
 
  const Chat = () =>
  {
    
      setMsgf(
        <>
        <Frands> </Frands>
        
        <div className="inipage">
            <RadioButtonUncheckedTwoToneIcon className="inpagecir"></RadioButtonUncheckedTwoToneIcon>
            <NearMeIcon className="inpagenear"></NearMeIcon>
            <p className="inpagepara">Your Messages</p>
            <p className="inpagemsg">Send private photos and messages to a friend or group.</p>
            <button type="submit" className="inpagesub">Send Message</button>
        </div>
       
        </>
      );

      setsettings(" ");
      setmyprofile(" ");
      setMnyoptions(" ");
      
  } 

  const[mnyoption, setMnyoptions] = useState(" ");
  const Options = () =>
  {
   /* here we write the condition for , if myprofile is empty then it works;
   if({myprofile})
    {  }*/

      setMnyoptions(
        <div className="showoption">

             <CheckBoxOutlineBlankIcon className="showingclick"></CheckBoxOutlineBlankIcon>
            
        <button className="options option1" onClick={Showprofile1}>
          <a className="optionsname">
          <AccountCircleIcon className="Profileoption"></AccountCircleIcon>
           <a className="optionname">Profile</a>
           </a>
          </button>
        
          <button className="options" onClick={Showprofile2}>
          <a className="optionsname">
          <BookmarkBorderIcon className="Savedoption"></BookmarkBorderIcon>
          <a className="optionname">Saved</a>
          </a>
          </button>

          <button className="options" onClick={Showsettings}>
          <a className="optionsname">
           <SettingsIcon className="settingsoptionafterclickonac"></SettingsIcon>
           <a className="optionname3">Settings</a>
           </a>
          </button>
          

          <button className="options option44" onClick={Showswitchingoption}>
          <a className="optionsname">
            <CachedIcon className="SwitchAcoption"></CachedIcon>
            <a className="optionname4">Switch Accounts</a>
            </a>
          </button>

          <button className="options logoutoption">
             <a className="LogOutoption">Log Out</a>
          </button>
          </div>
      );
    
  }

  const [myprofile, setmyprofile] =useState();

  const Showprofile1 = () =>
  {
    setmyprofile(
      <>
      < Myprofile1></Myprofile1>
      </>
    );
    
    setsettings(" ");
    setMnyoptions(" ");
    setMsgf(" ");
  }

  const Showprofile2 = () =>
  {
    setmyprofile(
      <>
      < Myprofile2></Myprofile2>
      </>
    );
    setsettings(" ");
    setMsgf(" ");
    setMnyoptions(" ");
    
  }

  const[settings, setsettings] =useState(" ");
  const Showsettings = () =>
  {
    setsettings(<SEttings > </SEttings>);
    setmyprofile(" ");
    setMnyoptions(" ");
    setMsgf(" ");
  }
   
  const HideOptions = () =>
  {
    setMnyoptions(" ");
  }
  
  //function to get the output after clicking on the switch option on account;
  const[switchaccount, setswitchaccount] =useState(" ");
  const Showswitchingoption = () =>
  {
    setswitchaccount(
      <>
       <div className="cancleswitchingprofile" onClick={Hideswitching}></div>
        <div className="switchaccountpage">
        <button className="cancleswitchaccount" onClick={Hideswitching}>Switch Accounts
            <ClearOutlinedIcon className="clearsymbol"></ClearOutlinedIcon>
        </button>
        <div className="instaidelement">
          <AccountCircleIcon className="switchaccountac"></AccountCircleIcon>
           <RadioButtonUncheckedTwoToneIcon className="switchaccountcir"></RadioButtonUncheckedTwoToneIcon>
            <a className="switchaccountname"> MY_insta_id_name</a>
           <CheckCircleSharpIcon className="switchaccountCheck"></CheckCircleSharpIcon>
        </div>
        <button className="switchaccountExisting">Log into Existing Account</button>
        </div>
      </>
    );
    setMnyoptions(" ");
  }

  const Hideswitching = () =>
  {
    setswitchaccount(" ");
  }

  /*it is very very important line */
  /*here we use many function in one function 
  instead of use many function on onclick to any button */
  const ChatHide = () =>
  {
    setsettings(" ");
    setMsgf(" ");
    setMnyoptions(" ");
    setmyprofile(" ");
    
  }

  /*
  const Hideprofile = () =>
  {
    setmyprofile(" ");
  }

  const HideOptions = () =>
  {
    setMnyoptions(" ");
  }

  const Hideoption = () =>
  {
    setMnyoptions(" ");
  }
 */
    return(
        <>
      
        <div class ="nav">
           <h1 class = "nav1" id="insta">Instagram</h1>
           <input type ="search"  placeholder ="Search" class = "nav1"></input>
          
           <div class = "nav1">
             <HomeIcon class = "nav2" onClick={ChatHide }> </HomeIcon>
             <NearMeIcon class = "nav2" onClick={Chat}> </NearMeIcon>
             <ExploreIcon class = "nav2" onClick={ChatHide}> </ExploreIcon>
             <FavoriteBorderIcon class = "nav2"> </FavoriteBorderIcon>
             <AccountCircleIcon class = "nav2" onClick={Options}> </AccountCircleIcon>
             
           </div>
        </div>
         <div className="Manyoption">{mnyoption}</div>
         <div className=" ">{switchaccount}</div>
          <div class="msg">{msgf}</div>
          <div className="settings" onClick={HideOptions}>{settings}</div>
          <div className="outmyprofile">{myprofile}</div>; 
           
         <div class ="blank">
              <Story> </Story>
        </div>
        
        
        </>
    );
};

export default Nav;