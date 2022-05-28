import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import BusinessRegistration from './components/Business-Details/BusinessRegistration';
import SignInSide from './components/Authentication/SignIn';

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

ReactDOM.render(
  <Router className= "container">
      <Routes>
        <Route path="/" element={<App />}/>
        {/* <Route path="/business-registration" element={<BusinessRegistration />}/> */}
        <Route path="/sign-in" element={<SignInSide />}/>

        
        {/* <Route path="*" element={<Header />}/> */}
      </Routes>
    </Router>,
    
    
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
