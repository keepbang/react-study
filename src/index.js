import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Ch02 from './Ch02';
import Ch03 from './Ch03';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Ch02 />, document.getElementById('chap02'));
ReactDOM.render(<Ch03 />, document.getElementById('chap03'));

serviceWorker.unregister();
