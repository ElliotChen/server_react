import * as constant from '../_constants';
import {taskApis} from '../_apis';

function addTask(task) {
	return {
		type: constant.ADD_TASK,
		task
	};
}

function removeTask(task) {
	return {
		type: constant.REMOVE_TASK,
		oid:task.oid
	}
}

function loadTasks(tasks) {
	return {
		type: constant.LOAD_TASKLIST,
		tasks
	}
}

function loadTask(task) {
	return {
		type: constant.LOAD_TASK,
		task
	}
}


function loadTasksSuccess(tasks) {
	return {
		type: constant.LOAD_TASKLIST_SUCCESS,
		tasks
	}
}

function loadTasksFailed(error) {
	return {
		type: constant.LOAD_TASKLIST_FAILED,
		error
	}
}

function thunkCreateTask(task) {
	return dispatch => {
		taskApis
			.saveTask(task)
			.then(
				task => {
					dispatch(addTask(task));
				}
			);
	}
}

function thunkRemoveTask(task) {
	return dispatch => {
		taskApis
			.removeTask(task)
			.then(
				() => {
					dispatch(removeTask(task));
				}
			);
	}
}

function thunkLoadTasks() {
	return dispatch => {
		taskApis
			.loadTasks()
			.then(
				tasks => {
					dispatch(loadTasksSuccess(tasks))
				}
			);
	}
}

export {addTask, removeTask, loadTask, loadTasks, thunkLoadTasks, thunkCreateTask, thunkRemoveTask};