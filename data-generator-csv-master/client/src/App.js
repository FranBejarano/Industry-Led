import './App.css';
import RouteContainer from './container/RouteContainer';
import Logo from './component/logo.png';
import React, {useState} from 'react';




function App() {

const [error, setError] = useState("");

const clearError = () => {
  setError("")
}

if (error !== ""){

  return (
    <div>
      <div id="logo-header">
        <img id="logo-img"src={Logo} alt="2i-logo"/>
      </div>
      <div id="error-box">
        <div><h4>{error}</h4></div>
        <div><button id="btn-error-confirm" onClick={clearError}>OK</button></div>
      </div>
     <RouteContainer error={error} setError={setError}/>
    
    </div>
  );

} else {
  return (
    <div>
      <div id="logo-header">
        <img id="logo-img"src={Logo} alt="2i-logo"/>
      </div>
      
     <RouteContainer error={error} setError={setError}/>
    
    </div>
  );
}

 
}

export default App;