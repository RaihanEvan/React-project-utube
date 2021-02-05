import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//we can export all components here and refer this only once in app.js
//export {default as SearchBar} from './SearchBar' .....
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<App/>,document.querySelector('#root'));
