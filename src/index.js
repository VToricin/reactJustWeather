import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ProjectState} from "./state/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

function appRender (props) {
    root.render(
      <React.StrictMode>
        <App state = {props}/>
      </React.StrictMode>
    );
}

appRender(ProjectState.initialstate);

ProjectState.eventHandler(appRender);

reportWebVitals();
