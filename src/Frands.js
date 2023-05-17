
import React, { useState } from 'react';

import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//Component's of where i export conversation and name of frand;
import Conv1 from './Frandnameandconversation1';
import Conv2 from './Frandnameandconversation2';
import Conv3 from './Frandnameandconversation3';
import Conv4 from './Frandnameandconversation4';
import Conv5 from './Frandnameandconversation5';
import Conv6 from './Frandnameandconversation6';
import Conv7 from './Frandnameandconversation7';
import Conv8 from './Frandnameandconversation8';
import Conv9 from './Frandnameandconversation9';
import Conv10 from './Frandnameandconversation10';
import Conv11 from './Frandnameandconversation11';
import Conv12 from './Frandnameandconversation12';
import Conv13 from './Frandnameandconversation13';
import Conv14 from './Frandnameandconversation14';
import Conv15 from './Frandnameandconversation15';

function Frands()
{
   const state = useState();

   const[convrsf, setConvrsf] = useState(" ");

   const Showconversation1 = () =>
   {
      setConvrsf(<Conv1> </Conv1>);
   }

   const Showconversation2 = () =>
   {
      setConvrsf(<Conv2> </Conv2>);
   }

   const Showconversation3 = () =>
   {
      setConvrsf(<Conv3> </Conv3>);
   }

   const Showconversation4 = () =>
   {
      setConvrsf(<Conv4> </Conv4>);
   }

   const Showconversation5 = () =>
   {
      setConvrsf(<Conv5> </Conv5>);
   }

   const Showconversation6 = () =>
   {
      setConvrsf(<Conv6> </Conv6>);
   }

   const Showconversation7 = () =>
   {
      setConvrsf(<Conv7> </Conv7>);
   }

   const Showconversation8 = () =>
   {
      setConvrsf(<Conv8> </Conv8>);
   }

   const Showconversation9 = () =>
   {
      setConvrsf(<Conv9> </Conv9>);
   }

   const Showconversation10 = () =>
   {
      setConvrsf(<Conv10> </Conv10>);
   }

   const Showconversation11 = () =>
   {
      setConvrsf(<Conv11> </Conv11>);
   }

   const Showconversation12 = () =>
   {
      setConvrsf(<Conv12> </Conv12>);
   }

   const Showconversation13 = () =>
   {
      setConvrsf(<Conv13> </Conv13>);
   }

   const Showconversation14 = () =>
   {
      setConvrsf(<Conv14> </Conv14>);
   }

   const Showconversation15 = () =>
   {
      setConvrsf(<Conv15> </Conv15>);
   }

    return (
       <>
        
          <div className="msgnav"> 
           <p className="idname">Login id Name_</p>
           <CheckBoxOutlineBlankIcon className="newmsg"> </CheckBoxOutlineBlankIcon>
           <CreateOutlinedIcon className="creatmsg"> </CreateOutlinedIcon>
          </div>


     <p className="allmsg">
          
          <div className="frnd" onClick={Showconversation1} id="1">
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram1</p>
               <p className="frndstatus"> JAI shree ram1</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation2} id="2">
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram2</p>
               <p className="frndstatus"> JAI shree ram2</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation3}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram3</p>
               <p className="frndstatus"> JAI shree ram3</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation4}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram4</p>
               <p className="frndstatus"> JAI shree ram4</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation5}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram5</p>
               <p className="frndstatus"> JAI shree ram5</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation6}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram6</p>
               <p className="frndstatus"> JAI shree ram6</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation7}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram7</p>
               <p className="frndstatus"> JAI shree ram7</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation8}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram8</p>
               <p className="frndstatus"> JAI shree ram8</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation8}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram9</p>
               <p className="frndstatus"> JAI shree ram9</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation10}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram10</p>
               <p className="frndstatus"> JAI shree ram10</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation11}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram11</p>
               <p className="frndstatus"> JAI shree ram11</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation12}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram12</p>
               <p className="frndstatus"> JAI shree ram12</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation13}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram13</p>
               <p className="frndstatus"> JAI shree ram13</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation14}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram14</p>
               <p className="frndstatus"> JAI shree ram14</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation15}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram15</p>
               <p className="frndstatus"> JAI shree ram15</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation6}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram16</p>
               <p className="frndstatus"> JAI shree ram16</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation7}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram17</p>
               <p className="frndstatus"> JAI shree ram17</p>
               </div>
          </div>

          <div className="frnd" onClick={Showconversation8}>
            <RadioButtonUncheckedIcon className="frndcir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndac"></AccountCircleIcon>
               <div className="frndnmestaus">
               <p className="frndname"> JAI shree ram18</p>
               <p className="frndstatus"> JAI shree ram18</p>
               </div>
          </div>

           </p>
       
         
         <div className="thif">p</div> 
        <div >{convrsf}</div>
       </>
    );
}

export default Frands;


