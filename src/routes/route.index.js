import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Auth from '../pages/Auth/auth.index';
import ForgotPwd from '../pages/ForgotPwd/ForgotPwd.index';
import ResetPwd from '../pages/ResetPwd/ResetPwd.index';
import { Home } from '../pages/Home/Home.index';

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Container>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path='/auth' exact component={Auth} />
                    <Route path='/resetpw/:token/:email' exact component={ResetPwd} />
                    <Route path='/forgotPwd' exact component={ForgotPwd} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default RootRoute;
