import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import '../index.less';
import 'react-grid-layout/css/styles.css'; ///node_modules/
import 'react-resizable/css/styles.css'; ///node_modules/
import './css/style.css';
import './css/scroll.css';

// import './css/ActivityBarLeft.css';
// import './css/OsNav.css';
// import './css/NavigatorTop.css';
// import './css/Footer.css';
// import './css/GridLayout.css'; ///node_modules/
// import './css/ContentPage.css'; ///node_modules/
import './css/Activity_Modules.css'; ///node_modules/

ReactDOM.render(<App />, document.getElementById('root'));
