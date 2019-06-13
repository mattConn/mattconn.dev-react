import React from 'react';
import {render} from 'react-dom';

const Test = () => <div>HELLO WORLD</div>;

render(<Test />, document.querySelector('#root'));