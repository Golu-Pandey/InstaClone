import React from 'react';
import ReactDOM from 'react-dom';

import "./NavBar.css";

import Nav from './Navbar';

import Pic from './Pic';
import Takepic from './Takepic';

function Mypic(currpic)
{
   return(
     <>
     <Takepic 
     picsrc ={currpic.picsrc} 
     comments={currpic.comments}
     commName={currpic.commName}
     likes={currpic.likes}
     ></Takepic>
     
     </>
   );
}


ReactDOM.render(
  <>
     <Nav> </Nav>
     {Pic.map(Mypic)}
     
  </>
  , document.getElementById('instagram')
);

