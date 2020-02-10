import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ch02 from './chapter/Ch02';
import Ch03 from './chapter/Ch03';
import Ch04 from './chapter/Ch04';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Ch02 />, document.getElementById('chap02'));
ReactDOM.render(<Ch03 />, document.getElementById('chap03'));
ReactDOM.render(<Ch04 />, document.getElementById('chap04'));

serviceWorker.unregister();
