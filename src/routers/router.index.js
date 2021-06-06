import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Auth from '../components/Auth/Auth.index';

const RootRoute = () => {
	return (
		<BrowserRouter>
			<Container>
				<Switch>
					<Route path='/auth' exact component={Auth} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default RootRoute;
