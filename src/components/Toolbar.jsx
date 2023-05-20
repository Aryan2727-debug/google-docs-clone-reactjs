import React from "react";
import "./Toolbar.css";

//importing MUI icons
import PrintIcon from '@mui/icons-material/Print';
import MessageIcon from '@mui/icons-material/Message';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Looks6Icon from '@mui/icons-material/Looks6';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

//importing image
import person from "../images/person.png"

function Toolbar(){

    //storing the URL of the images which are being used
    const logoUrl = "https://cdn-icons-png.flaticon.com/512/5968/5968517.png";
    const starUrl = "https://affaso.com/wp-content/uploads/2020/06/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png";

    return(
        <>
            {/* the main container */}
            <div className="toolbar-container" style={{border : "1px solid gray"}}>
               
               {/* google docs logo image */}
               <img src={logoUrl} alt="logo" className="logo-image"/>

               <p className="toolbar-heading">Untitled document</p>

               {/* creating a horizontal list for the toolbar options */}
               <div className="table">
                <ul className="toolbar-list">
                    <li>File</li>
                    <li style={{marginLeft : 15}}>Edit</li>
                    <li style={{marginLeft : 15}}>View</li>
                    <li style={{marginLeft : 15}}>Insert</li>
                    <li style={{marginLeft : 15}}>Format</li>
                    <li style={{marginLeft : 15}}>Tools</li>
                    <li style={{marginLeft : 15}}>Extensions</li>
                    <li style={{marginLeft : 15}}>Help</li>
                </ul>
               </div>

               {/* star image */}
               <img src={starUrl} alt="star" className="star-image"/>

               {/* using the chat and video icons */}
               <MessageIcon className="chat-image"/>
               <VideoCameraBackIcon className="video-image"/>
               
               {/* creating the Share button */}
               <button className="share-button">Share</button>

               {/* user profile image */}
               <img src={person} className="person-img" alt="user"/>

               <div className="tools-div">

               {/* creating the tools list */}
               <div className="table">
                <ul className="tools-list">
                    <li style={{border : 'none'}}><UndoIcon/></li>
                    <li style={{marginLeft : 15, border : 'none'}}><RedoIcon/></li>
                    <li style={{marginLeft : 15, border : 'none'}}><PrintIcon/></li>
                    <li style={{marginLeft : 15, border : 'none'}}><SpellcheckIcon/></li>
                    <li style={{marginLeft : 15, border : 'none'}}><FormatPaintIcon/></li>
                    <li style={{marginLeft : 15, border : 'none'}}><ZoomInIcon/></li>
                    <li style={{marginLeft : 15, border : 'none'}}>Normal text ↓ </li>
                    <li style={{marginLeft : 15, border : 'none'}}>Open ↓ </li>
                    <li style={{marginLeft : 15, border : 'none'}}><RemoveIcon/> <Looks6Icon/> <AddIcon/> </li>
                    <li style={{marginLeft : 15, border : 'none'}}><FormatBoldIcon/></li>
                    <li style={{marginLeft : 15, border : 'none'}}><FormatItalicIcon/></li>
                    <li style={{marginLeft : 15, border : 'none'}}><FormatUnderlinedIcon/></li>
                    <li style={{marginLeft : 15, border : 'none'}}><FormatColorTextIcon/></li>
                    <li style={{marginLeft : 15, border : 'none'}}><CreateIcon/></li>
                    <li style={{marginLeft : 15, border : 'none'}}><MoreVertIcon/></li>
                    <li style={{marginLeft : 225, border : 'none'}}><CreateIcon/><ArrowDownwardIcon/></li>
                    <li style={{marginLeft : 50, border : 'none'}}><KeyboardArrowUpIcon/></li>
                </ul>
               </div>

               {/* creating the horizontal number scale */}
               <ul className="scale-list">
                 <li><div className="line"></div></li>
               </ul>

               </div>

               <div className="scale-list-down-container">

               </div>
            </div>
        </>
    );
};

export default Toolbar;