import React, { Fragment } from 'react';
import WelcomComponent from './WelcomComponent/WelcomComponent';
import WelcomPureComponent from './WelcomPureComponent/WelcomPureComponent';
import WelcomFunction from './WelcomFunction/WelcomFunction';

const WelcomCreateElement = React.createElement('div', null, 'Hello World - first method - React.CreateElement');

const Root = () => (
  <Fragment>
    {WelcomCreateElement}
    <WelcomComponent />
    <WelcomPureComponent />
    <WelcomFunction />
  </Fragment>

);

export default Root;
