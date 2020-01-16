import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import TodosMain from './containers/TodosMain/TodosMain';
import TodosEdit from './containers/TodosEdit/TodosEdit';
import classes from './App.module.css'

class App extends Component {

  render() {
    return (
      <div className={classes.Fill}>
        <Layout>
          <TodosMain />
          <TodosEdit />
        </Layout>
      </div>
    );
  }

}

export default App;
