import React from "react";
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import createMemoryHistory from 'history/createMemoryHistory';
import { Route, Switch, StaticRouter } from "react-router-dom";

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
//andrey@medibooksystems.com
import rootReducer from 'reducers';
import {routes} from './routes/routes';

const clientRender = (initalState)=>{
    const history = createHistory();

    const middleware = routerMiddleware(history);

    const store = createStore(
        rootReducer,
        initalState,
        applyMiddleware(middleware),
    );


    return (
        <Provider store={store} >
            <ConnectedRouter history={history} >
                <Switch>
                    {routes.map(route=><Route exact={route.exact} path={route.path} key={route.path} component={route.component} />)}
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};

render(clientRender(), document.getElementById('container'));
