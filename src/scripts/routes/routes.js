import HomeComp from 'comp/screens/home/HomeComp';
import Login from 'comp/screens/autentification/Login';
import Signup from 'comp/screens/autentification/Signup'
import ErrorPage from "comp/screens/error/ErrorPage";

export const routes = [{
        path: '/',
        exact: true,
        component: HomeComp,
    },
    {
        path: '/login',
        exact: true,
        component: Login,
    },
    {
        path: '/signup',
        exact: true,
        component: Signup,
    },
    {
        path: '*',
        component: ErrorPage
    }
];
