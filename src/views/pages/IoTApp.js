import React, { useContext, useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import AdminLayout from '../../layouts/Admin';
import Register from '../../views/pages/auth/Register';
import Error from '../../views/pages/Error';
import Login from './auth/Login';
import ForgotPassword from './auth/ForgotPassword';
import ConfirmPassword from './auth/ConfirmPassword';
import { Context } from '../../store/Store';
import useRefreshTokensMutation from '../../components/auth/graphql/useRefreshTokensMutation';

const IotApp = () => {
    // eslint-disable-next-line
    const [globalState, dispatch, setUserAuthData] = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [refreshUserTokens] = useRefreshTokensMutation();

    useEffect(() => {
        async function refreshTokens() {
            try {
                const {data} = await refreshUserTokens();
                setLoading(false);
                setUserAuthData(data.refreshUserTokens, refreshUserTokens);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }

        refreshTokens();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return (
            <Col className="d-flex justify-content-center align-items-center">
                <Loader
                    type="Bars"
                    color="#00BFFF"
                    height={80}
                    width={80}
                    style={{marginTop: `calc(50vh - ${80}px)`}}
                />
            </Col>
        );
    }

    if (!globalState.isAuthenticated) {
        return (
            <Switch>
                <Redirect exact from="/" to="/login"/>

                <Route exact path="/login" render={(props) => <Login {...props} />}/>
                <Route
                    exact
                    path="/register"
                    render={(props) => <Register {...props} />}
                />
                <Route
                    exact
                    path="/forgot-password"
                    render={(props) => <ForgotPassword {...props} />}
                />
                <Route
                    exact
                    path="/confirm-password/:username?"
                    render={(props) => <ConfirmPassword {...props} />}
                />

                <Route exact path="/error" render={(props) => <Error {...props} />}/>
                <Route exact path="/" render={(props) => <Login {...props} />}/>
            </Switch>
        );
    }
    return (
        <Switch>
            <Redirect exact from="/login" to="/"/>
            <Route exact path="/login" render={(props) => <Login {...props} />}/>
            <Route exact path="/error" render={(props) => <Error {...props} />}/>
            <Route path="/" render={(props) => <AdminLayout {...props} />}/>
            <Route
                exact
                path="/register"
                render={(props) => <Register {...props} />}
            />
        </Switch>
    );
};

export default IotApp;
