import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Loanpage from './pages/Loanpage';
import AppInof from './pages/AppInof';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Router>
        <Routes>
            <Route path='/' element = {<App/>}> 
                <Route  index element  = {<Home />}></Route>
            </Route>

            <Route path = '/make-prediction' element = {<Loanpage />}/>
            <Route path = '/app-info' element = {<AppInof />}/>
        </Routes>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
