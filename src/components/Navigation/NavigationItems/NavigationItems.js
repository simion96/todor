import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Todor</NavigationItem>
        <NavigationItem link="/">Others</NavigationItem>
    </ul>
)

export default navigationItems;