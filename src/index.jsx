import 'react-app-polyfill/ie11'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App'
import 'normalize.css'
import './main.scss'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
	<App/>
);