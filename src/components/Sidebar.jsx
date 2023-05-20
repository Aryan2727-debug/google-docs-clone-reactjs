import React from "react";
import "./Sidebar.css";

//importing MUI icons
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

function Sidebar(){
    
    //storing the URL of the images which are being used
    const calendarUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/768px-Google_Calendar_icon_%282020%29.svg.png?20221106121915";
    const printerUrl = "https://previews.123rf.com/images/dxinerz/dxinerz1508/dxinerz150802213/44096613-printer-printing-machine-digital-printer-icon-vector-image-can-also-be-used-for-printing-office.jpg";
    const tickUrl = "https://www.freeiconspng.com/uploads/blue-check-mark-transparent-png-21.png";
    const mapUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1428px-Google_Maps_icon_%282020%29.svg.png";

    return(
        <>
            {/* the main container */}
            <div className="sidebar-container">
             
             {/* creating a vertical list for sidebar options */}
             <ul className="sidebar-list">
              <li><img src={calendarUrl} alt="calendar" style={{height : "30px", width : "30px", cursor : "pointer"}}/></li>
              <br/>
              <br/>
              <li><img src={printerUrl} alt="calendar" style={{height : "30px", width : "30px", cursor : "pointer"}}/></li>
              <br/>
              <br/>
              <li><img src={tickUrl} alt="calendar" style={{height : "30px", width : "30px", cursor : "pointer"}}/></li>
              <br/>
              <br/>
              <li><PersonIcon style={{height : "30px", width : "30px", cursor : "pointer"}}/></li>
              <br/>
              <br/>
              <li><img src={mapUrl} alt="calendar" style={{height : "30px", width : "25px", marginLeft : "3px", cursor : "pointer"}}/></li>
              <br/>
              <li style={{marginLeft : "2px"}}><hr/></li>
              <br/>
              <li><AddIcon style={{height : "30px", width : "30px", marginLeft : "3px", cursor : "pointer"}}/></li>
             </ul>

            </div>

            {/* container for the left sidebar */}
            <div className="sidebar-container-left">
                {/* creating the vertical number scale */}
                <ul style={{position : "absolute", listStyleType : "none", left : "-18px", top : "55px"}}>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>_</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>_</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>_</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>_</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>_</li>
                    <li>-</li>
                </ul>
                
                {/* container which has the hamburger menu icon */}
                <div className="hamburger-container">
                  <ListIcon style={{position : "absolute", top : "25px", left : "25px"}}/>
                </div>

                {/* container for the right hand side */}
                <div className="sidebar-extended-container">
                    
                </div>
            </div>
        </>
    );
};

export default Sidebar;