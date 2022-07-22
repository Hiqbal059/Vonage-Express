import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
<script src="https://static.opentok.com/v2/js/opentok.min.js"></script>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';


// import App from './App';
// import './index.css';
// import './polyfills';


// function renderApp(credentials) {
//   ReactDOM.render(
//     <App credentials={credentials} />,
//     document.getElementById('root')
//   );
// }

// if (API_KEY && TOKEN && SESSION_ID) {
//   renderApp({
//     apiKey: API_KEY,
//     sessionId: SESSION_ID,
//     token: TOKEN,
//   });
// } else {
//   fetch(SAMPLE_SERVER_BASE_URL + '/session')
//     .then(data => data.json())
//     .then(renderApp)
//     .catch((err) => {
//       console.error('Failed to get session credentials', err);
//       alert('Failed to get opentok sessionId and token. Make sure you have updated the config.js file.');
//     });
// }
