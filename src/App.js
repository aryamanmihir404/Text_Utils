import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/Navbar1';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Xy from './components/Xy';
import Alert from './components/Alert';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    BrowserRouter,

    Link
  } from "react-router-dom";



let name = "zozo" 

function App() {
    const [mode, setMode] = useState('light')
    const[alert,setAlert]=useState(null);

    const showAlert=(message,type) =>{
        setAlert({
           msg: message,
           type: type
        })
        setTimeout(() => {
            setAlert(null);
        },1100)
    }

    const natureMode=() =>{
        if(mode=='light' || mode==='dark'){
        setMode('green')
       document.body.style.backgroundColor='#6bb797';
       showAlert("Nature light mode enabled","success");
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            
            
        }
    

    }
    

    

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled","success")
            
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            
            
        }
    }

    return ( 

        <>
       
        <Navbar1 mode={mode} toggleMode={toggleMode} natureMode={natureMode} heading="hello" />
       
        <Alert alert={alert}/>
        <div className="conatiner my-3" >
        
        <BrowserRouter>
            <Routes>
          <Route path="/about" element={<About />} />
          
          < Route path="/"
            element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>} /> 
          </Routes>
          </BrowserRouter>
        
          
        
                        
          
        
        </div>
        
        
        
        
        </>




        
        







    );
}


export default App ;