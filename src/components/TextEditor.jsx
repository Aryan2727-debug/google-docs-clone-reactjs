import React from "react";
import "./TextEditor.css";

//importing the TextField from MUI
import { TextField } from "@mui/material";

function TextEditor(){
    return(
        <>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          {/* Rendering the textfield */}
            <TextField
            placeholder="Type @ to insert"
            multiline
            rows={20.5}
            maxRows={20.5}
            className="textfield"
            />
        </>
    );
};

export default TextEditor;