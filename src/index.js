import React from 'react';
import ReactDOM from 'react-dom/client';
import EightBall from './eight-ball';
import answers from './reponses';

const App = () => (
  <div>
    <EightBall answers={answers} />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
