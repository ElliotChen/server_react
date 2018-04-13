import {BASE_URL} from '../_constants';

const API = BASE_URL+'/tasks';

export const taskApis = {
	saveTask, loadTasks, removeTask
}

/**
 *
 * @returns {Promise<Response>}
 */
function loadTasks() {
	console.log("using service api");
	const requestOptions = {
		method: 'GET'
	}
	return fetch(API+'/', requestOptions).then(handelResponse);
}

function saveTask(task) {
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(task)
	}

	return fetch(API+'/', options).then(handelResponse);
}

function removeTask(task) {
	const options = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(task)
	}

	return fetch(API+'/'+task.oid, options).then(handelResponse);
}


function handelResponse(response) {
	if (!response.ok) {
		return Promise.reject(response.statusText);
	}

	return response.json();
}
