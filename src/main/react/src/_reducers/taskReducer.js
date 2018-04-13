import * as constant from '../_constants';

function taskReducer(state = [], action) {
	switch (action.type) {
		case constant.ADD_TASK:
			return [action.task, ... state];
		case constant.REMOVE_TASK:
			return state.filter((task) => {return (task.oid != action.oid)});
		case constant.LOAD_TASKLIST_SUCCESS:
			return action.tasks;
		default :
				return state;
	}
	return state;
}

export {taskReducer};