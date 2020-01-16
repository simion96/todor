import React from 'react';
import Combine from '../../hoc/Combine';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = ( props ) => (


    <Combine>
        <Toolbar />
        <div>Toolbar, Sidedrawer, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Combine>

);

export default layout;