import React, {Component} from 'react';
import Combine from '../../hoc/Combine';
import classes from './TodosMain.module.css';
import TaskInput from '../../components/UI/TaskInput/TaskInput';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';


class TodosMain extends Component {

    componentDidMount () {
        console.log(this.props); 
    }

    onKeyPressHandler = (e) => {
        if (e.key === 'Enter') {
            alert('adding');
            this.props.onTaskAdded(e.target.value);
            e.target.value = "";
        }
    }

    render () {
        const taskList = this.props.tasks.map((task, idx) => {
            return (
                    <li key={idx} className={classes.ListItems}>
                        {task.description}
                    </li>
            )
        });

        return (
            <div className={classes.Container}>
                <TaskInput 
                    onChange={(a)=> this.onKeyPressHandler(a)}
                />
                {taskList}
                <div>a</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        taskSelected: state.taskSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTaskAdded: (description) => dispatch(actions.addTask(description))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosMain);