import React from "react";
import "./App.css";

//importing different components components
import Toolbar from "./components/Toolbar";
import Sidebar from "./components/Sidebar";
import TextEditor from "./components/TextEditor";

function App(){
  return(
    <>
     {/* rendering the components */}
      <Toolbar/>
      <Sidebar/>
      <TextEditor/>
    </>
  );
};

export default App;