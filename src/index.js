import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Doctor from './Components/Doctor'
import Patient from './Components/Patient'
import Admin from './Components/Admin'

ReactDOM.render(<BrowserRouter>
<Route path="/" exact component={App}/>
<Route path="/Doctor" exact component={Doctor}/>
<Route path="/Patient" exact component={Patient}/>
<Route path="/Admin" exact component={Admin}/>
</BrowserRouter>, document.getElementById('root'));
