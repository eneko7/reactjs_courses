import React from 'react';
import WelcomComponent from '../WelcomComponent/WelcomComponent';
import WelcomPureComponent from '../WelcomPureComponent/WelcomPureComponent';
import WelcomFunction from '../WelcomFunction/WelcomFunction';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    {React.createElement('div', null, 'Hello World - first method - React.CreateElement')}
    <WelcomComponent />
    <WelcomPureComponent />
    <WelcomFunction />
  </ErrorBoundary>

);

export default App;
