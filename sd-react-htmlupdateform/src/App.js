import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SD,HTMLUpdateForm } from "./components/sd.react.javascript/sd.react.javascript";


function App() {
  const form={
    Login:'',
    Password:''
  };
  let onClickSave=(o)=>{
    console.log(o);
  }
  return (
    <SD>
    <div className="App">
    <HTMLUpdateForm 
        model={form}
        onSaved ={(o)=>onClickSave(o)} 
        types="Password:password"
        />
     
    </div>
    </SD>
  );
}

export default App;
