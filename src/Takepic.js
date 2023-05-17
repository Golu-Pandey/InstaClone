import React, { useState } from 'react';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import NearMeIcon from '@material-ui/icons/NearMe';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import InsertCommentIcon from '@material-ui/icons/InsertComment';

import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
  

const Takepic = (props) =>
{

    const state =useState();

    //For Like counting;
    const x = props.likes ;
    const[like, setLike] =useState(x);

    const IncLike =() =>
    {
        if(like==x)
        { 
            
            setLike(like + 1);
        }
        else if(like==x+1)
        {
            setLike(like - 1);
        }
        
    }

    //For work of three dot on clicking it;
    const [dotf, setDotf] =useState(" ");

    const Show = () =>
    {
        setDotf(
            <>
            <button className="action0" onClick={Hide}> </button>
                
                <button className="action" id="Rp" onClick={Show}> Report </button>
               <br />
                <button className="action" id="Uf" onClick={Show}> Unfollow</button>
                <br />
                <button className="action" id="Gp" onClick={Show}>Go to post</button>
                <br />
                <button onClick={Hide} className="action" id="Cn">Cancle</button>
                
        </>);
    }
    
    //For work cancle button when we click on three dot;;
    const Hide = () =>
    {
        setDotf(" ");
    }


    return(
        <>
      <div className="allPic">
       
          <div className="picnavitm">
              <div className="cirnav">
               <RadioButtonUncheckedIcon ></RadioButtonUncheckedIcon>
            </div>
            <div className="cinav">
               <AccountCircleIcon ></AccountCircleIcon>
            </div> 
               <div className="name">My_Name</div>
              <div className="dot"> 
               <MoreHorizIcon onClick={Show}></MoreHorizIcon>
            </div>
          </div>
         
    <div>
        <div className = "card_img">
      <img src ={props.picsrc} alt="pic not found"  ></img>
      </div>
      <div className="action1">{dotf}</div>
     </div>
    

        <div className="bott">
            
        <div className="fav">
            <FavoriteBorderIcon onClick={IncLike} id="button1">
            </FavoriteBorderIcon>
             </div>

             <div className="comm">
                 <InsertCommentIcon> </InsertCommentIcon>
             </div>

             <div className="near">
                 <NearMeIcon> </NearMeIcon>
             </div>

             <div className="sav">
                 <BookmarkBorderIcon> </BookmarkBorderIcon>
             </div>
        </div>
       
         <div className="LIKE">
             <div className="LikeNum">{like} likes</div>
         </div>
          
          <div className="Totalcomm">
              <span className="commName">{props.commName}</span>
                 {props.comments}
          </div>

         <div className="commpost">

             <div className="imoge">
             <SentimentSatisfiedAltIcon> </SentimentSatisfiedAltIcon>
             </div>
             <div  >
             <input type="text" placeholder="Add a comment...." className="incomm"></input>
             </div>
             <div className="postcomm"> Post </div>
         </div>
      
      </div>  
      </>
     
    );
}

export default Takepic;

