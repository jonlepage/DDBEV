import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import '../index.less';
import 'react-grid-layout/css/styles.css'; ///node_modules/
import 'react-resizable/css/styles.css'; ///node_modules/
import './css/style.css';
import './css/scroll.css';

import './ActivityBarLeft.css';
import './OsNav.css';
import './NavigatorTop.css';
import './Footer.css';

import './GridLayout.css'; ///node_modules/
import './ContentPage.css'; ///node_modules/
ReactDOM.render(<App />, document.getElementById('root'));
