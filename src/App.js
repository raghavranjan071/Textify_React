import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
// import { Route, Switch } from "react-router";

// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


// import { Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textify- Dark Mode"

      //Used to add distractions
      // setInterval(()=>{
      //   document.title = "TextUtils is amazing"
      // },2000);

      // setInterval(()=>{
      //   document.title = "Install TextUtils Now"
      // },1500);
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Textify- Light Mode"
    }
  }
  return (
    <>

      {/* <Navbar title="TextUtils" aboutText = "About TextUtils"/> */}

      {/* <Router> */}

        <Navbar title='Textify' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>

          {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
            </Route>
          </Switch> */}

          <TextForm showAlert={showAlert} heading="Try Textify - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
          {/* <Home /> */}


           <About />
           
        </div>
        {/*
      </Router> */}
    </>
  );
}

export default App;
