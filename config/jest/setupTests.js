import Enzyme, { configure } from 'enzyme';

const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

configure({ adapter: new Adapter() });
