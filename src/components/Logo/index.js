import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './style.module.css';

const logo = (props) => (
    <div className={classes.logo}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;