import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import classNames from 'classnames';

import httpXHR from 'lib/httpXHR';

import { withStyles } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LeftDraver from 'shared/LeftDraver';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {pink} from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

import Footer from 'shared/Footer';
import Header from 'shared/Header';

const styles = theme => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '500px',
    margin: '0 auto',
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  link: {
  	width: 'calc(100% - 16px)',
  },
  button: {
  	width: '100%',
  	margin: '16px 8px 8px',
  	padding: '18.5px 14px',
    color: 'white',
    boxSizing: 'border-box',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    color: 'white',
  },
});

const Login = ({
	classes,
	errorEmail,
	errorPassword,
	emailValue,
	passwordValue,
	onEmailChange,
	onPasswordChange,
	onSubmitFormCheck,
	onGetUser,
	onSubmitForm,
	...props,
}) => {
    return ([
        <Header key="1" headerText={'Login'}/>,
        <LeftDraver key="2"/>,
        <div key="3" className={'wraper'}>
	        <div className={'container'}>
		        <form
		        	className={classes.form}
		        	noValidate
		        	autoComplete="off"
		        	onSubmit={onSubmitForm({
		        		emailValue,
		        		passwordValue,
		        		push: props.history.push,
		        		onSubmitFormCheck: onSubmitFormCheck,
		        		onGetUser: onGetUser,
		        	})}
		        >
		        	<Typography variant="h5" color="inherit" className={classes.grow}>
		                To Log In, enter your details.
		            </Typography>
			        <TextField
			          id="outlined-email-input"
			          label="Email"
			          className={classes.textField}
			          type="email"
			          name="email"
			          autoComplete="email"
			          margin="normal"
			          variant="outlined"
			          value={emailValue}
			          error={errorEmail}
			          onChange={onEmailChange}
			        />
			        <TextField
			          id="outlined-password-input"
			          label="Password"
			          className={classes.textField}
			          type="password"
			          autoComplete="current-password"
			          margin="normal"
			          variant="outlined"
			          value={passwordValue}
			          error={errorPassword}
			          onChange={onPasswordChange}
			        />
			        <Button
			        	variant="contained"
			        	color="primary"
			        	className={classes.button}
			        	type="submit"
			        >
			        	Log In
			        </Button>
			        <Button
			        	variant="contained"
			        	color="primary"
			        	className={classes.button}
			        >
			        	<i className={classNames("fab fa-facebook-square", classes.leftIcon)}></i>Log In with Facebook
			        </Button>
			        <Button
			        	variant="contained"
			        	color="primary"
			        	className={classes.button}
			        >
			        	<i className={classNames("fab fa-vk", classes.leftIcon)}></i>Log In with VK
			        </Button>
			        <Link to='/signup' className={classes.link}>
				        <Button
				        	variant="contained"
				        	color="primary"
				        	className={classes.button}
				        >
				        	Sugn Up
				        </Button>
				    </Link>
		        </form>
		    </div>
		</div>,
		<Footer key="4" />
    ]);
};

export default connect(
	state => ({
		errorEmail: state.loginState.errorEmail,
		errorPassword: state.loginState.errorPassword,
		emailValue: state.loginState.emailValue,
		passwordValue: state.loginState.passwordValue,
	}),
    dispatch => ({
        onEmailChange: (e) => {
        	dispatch({
                type: 'loginEmailValue',
                payload: {
                    emailValue: e.target.value,
                },
            })
        },
        onPasswordChange: (e) => {
        	dispatch({
                type: 'loginPasswordValue',
                payload: {
                    passwordValue: e.target.value,
                },
            })
        },
        onSubmitFormCheck: (obj)=> {
        	dispatch({
                type: 'loginFormCheck',
                payload: {
                    checkResults: obj,
                },
            });
        },
        onGetUser: (obj) => {
        	dispatch({
        		type: 'setUser',
        		payload: {
        			user: obj,
        		}
        	})
        },
        onSubmitForm: (obj) => (e) => {
			e.preventDefault();
			let emailErrorStatus = !(/^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(obj.emailValue));
			let passwordErrorStatus = !(obj.passwordValue);
			obj.onSubmitFormCheck({emailErrorStatus: emailErrorStatus, passwordErrorStatus: passwordErrorStatus});
			if (emailErrorStatus || passwordErrorStatus) {
				return;
			}
			httpXHR({
				path: '/login',
				type: 'POST',
				contentType: 'application/json',
				data: JSON.stringify({
					emailValue: obj.emailValue,
					passwordValue: obj.passwordValue,
				})
			})
                .then((res) => {
                    obj.onGetUser(res);
                    obj.push('/');
                })
                .catch((err) => {
                    console.log(err);
                });
			return;
		},
    })

)(withStyles(styles)(Login));