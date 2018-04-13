import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import {store} from '../_helpers';
import {thunkRemoveTask} from '../_actions';
class TaskItem extends React.Component {
	handleRemove = (event) => {
		const {task} = this.props;
		store.dispatch(thunkRemoveTask(task));
	}

	render() {
		const {task} = this.props;

		return (
			<tr>
				<td>
					{task.date}
				</td>
				<td>
					{task.title}
				</td>
				<td>
					<Button onClick={this.handleRemove}>Remove</Button>
				</td>
			</tr>
		);
	}
}

export default TaskItem;