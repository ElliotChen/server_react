import React from 'react';

import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import * as actions from '../_actions';
import * as constants from  '../_constants';

import {todoService} from '../_apis';

import {Table} from 'reactstrap';
class TaskList extends React.Component {
	componentDidMount() {
		console.log('do fetch here!');
		this.props.dispatch(actions.thunkLoadTasks());
	}
	render() {
		console.log(this.props);
		const {tasks} = this.props;

		return (
			<Table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Title</th>
						<th>Function</th>
					</tr>
				</thead>
				<tbody>
				{tasks.map((task) => {
					return <TaskItem key={task.oid} task={task}/>
				})}
				</tbody>
			</Table>
		);
	}
}

function mapStateToProps(state) {
	return {
		tasks:state.tasks
	}
}

TaskList = connect(mapStateToProps)(TaskList);

export default TaskList;