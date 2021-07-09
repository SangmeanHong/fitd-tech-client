import React from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Auth from '../pages/Auth/auth.index';
import ForgotPwd from '../pages/ForgotPwd/ForgotPwd.index';
import Faq from '../pages/Faq/Faq.index';
import ResetPwd from '../pages/ResetPwd/ResetPwd.index';
import Home from '../pages/Home/HomePage.index';
import Coaching from '../pages/Coaching/Coaching.index';
import Content from '../pages/Content/Content.index';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import NewCoach from '../pages/NewCoach/NewCoach';
import AddProduct from '../pages/AddProduct/AddProduct';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import Articles from '../pages/Articles/Articles.index';
import { CoachDetail } from '../pages/CoachDetailPage/CoachDetail';
import { ManageUsersPage } from '../pages/Admin/ManageUsersPage/ManageUsersPage';

const RootRoute = () => {

    return (
        <BrowserRouter>
            <Container disableGutters maxWidth={false}>
                <Navbar />
                <Switch>
                    <Route path='/faq' component={Faq} />
                    <Route path='/articles' component={Articles} />
                    <Route path='/newcoach' component={NewCoach} />
                    <Route path='/coaching' component={Coaching} />
                    <Route path='/content' component={Content} />ManageUsers
                    <Route path='/manageusers' component={ManageUsersPage} />
                    <Route path='/auth' component={Auth} />
                    <Route path='/resetpw/:token/:email' exact component={ResetPwd} />
                    <Route path='/forgotPwd' exact component={ForgotPwd} />
                    <Route path='/coaches/:name' exact component={CoachDetail} />
                    <Route path='/' component={Home} exact />
                    <Route render={() => <ErrorPage />} />
                </Switch>
                <Footer />
            </Container>
        </BrowserRouter>
    );
};
export default RootRoute;
