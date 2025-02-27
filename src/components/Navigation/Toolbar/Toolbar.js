import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <span>Logo</span>
        </div>
        <nav className={classes.Desktop}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;