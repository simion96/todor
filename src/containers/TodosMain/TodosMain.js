import React, {Component} from 'react';
import Combine from '../../hoc/Combine';

class TodosMain extends Component {
    render () {
        return (
            <Combine>
                <div>Main todos</div>
                <div>Extend todo</div>
            </Combine>
        )
    }
}

export default TodosMain;