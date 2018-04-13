/**
 * Created by elliot on 10/05/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import {store} from './_helpers';

import TaskBox from './pages/TaskBox';
import TaskList from './pages/TaskList';

import {Container, Button, Row, Col} from 'reactstrap';
class App extends React.Component {
	render() {

		return (
			<Container>
				Elliot
				<Button>AC</Button>

				<Row>
					<Col>
						<TaskBox/>
					</Col>
				</Row>
				<Row>
					<Col>
						<TaskList/>
					</Col>
				</Row>

			</Container>
		);
	}
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('main'));