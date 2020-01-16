import React from 'react';
import Combine from '../../hoc/Combine';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import TodosMain from '../../containers/TodosMain/TodosMain';
import TodosEdit from '../../containers/TodosEdit/TodosEdit';

const layout = ( props ) => (

        <div className={classes.LayoutContainer}>
            <Toolbar />
            <TodosMain />
            <TodosEdit />
        </div>

);

export default layout;