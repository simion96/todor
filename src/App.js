import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import TodosMain from './containers/TodosMain/TodosMain';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <TodosMain />
        </Layout>
      </div>
    );
  }

}

export default App;
