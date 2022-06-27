import React from 'react';
import Navbar from './Components/Navbar';

const layout = (props) => (
    <div>
        <Navbar />
        {props.children}
    </div>
);

export default layout;