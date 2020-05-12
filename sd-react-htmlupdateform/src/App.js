import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SD,HTMLUpdateForm } from "./components/sd.react.javascript/sd.react.javascript";


function App() {
  const loginForm={
    Login:'',
    Password:''
  };
  const bankAccountForm={
    Bank:'',
    NumberAccount:'',
    TypeAccount:''
  };
  const emailForm={
    To:'',
    From:'',
    CC:'',
    Subject:'',
    Text:''
  };
  let onClickSave=(o)=>{
    console.log(o);
  }
  return (
    <SD>
    <div className="App">
      <HTMLUpdateForm 
        id="frmLoginForm"
        title="Login Form"
        model={loginForm}
        onSaved ={(o)=>onClickSave(o)} 
        types="Password:password"
        required="Login,Password"
        />
      <HTMLUpdateForm 
        id="frmBankAccount"
        title="Bank Account"
        model={bankAccountForm}
        onSaved ={(o)=>onClickSave(o)} 
        required="Bank,NumberAccount"
        help="NumberAccount:e.g. '1234-5678-9876-0123',TypeAccount:Saving | Cash | Check"
        />
     <HTMLUpdateForm 
        id="frmEmailAccount"
        title="Email Account"
        model={emailForm}
        onSaved ={(o)=>onClickSave(o)} 
        required="To,From,Text"
        />
     
    </div>
    </SD>
  );
}

export default App;
