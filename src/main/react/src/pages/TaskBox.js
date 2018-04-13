import React from 'react';



import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {thunkCreateTask} from '../_actions';
import {connect} from 'react-redux';
import {store} from '../_helpers';
import PropTypes from 'prop-types';

class TaskBox extends React.Component {

	handleSubmit = (event) => {
		console.log('Press submit');
		event.preventDefault();
		let task = {
			oid:null,
			date:this.props.date,
			title:this.props.title
		}
		store.dispatch(thunkCreateTask(task));
	}

	handleDate = (event) => {
		console.log(event.target.value);
		this.props.date = event.target.value;
	}

	handleTitle = (event) => {
		console.log(event.target.value);
		this.props.title = event.target.value;
	}
	render() {
		return(
			<Form>
				<FormGroup>
					<Label for="date">日期</Label>
					<Input type="date" name="date" id="date" placeholder="日期" defaultValue={this.props.date} onChange={this.handleDate}/>
				</FormGroup>
				<FormGroup>
					<Label for="title">待辦項目</Label>
					<Input type="text" name="title" id="title" placeholder="待辦項目" defaultValue={this.props.title} onChange={this.handleTitle}/>
				</FormGroup>
				<Button onClick={this.handleSubmit}>Submit</Button>
			</Form>
		);
	}
}

TaskBox.propTypes = {
	date:PropTypes.string.isRequired,
	title:PropTypes.string.isRequired
}

TaskBox.defaultProps = {
	date:'2018-12-03',
	title:'XXX'
}
/*
function mapStateToProps(state) {
	return {
		todos:state.todos
	}
}

TaskBox = connect(mapStateToProps)(TaskBox);
*/



export default TaskBox;