import React from "react";
import { connect } from 'react-redux';
import classNames from 'classnames';

import httpXHR from 'lib/httpXHR';

import { withStyles } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LeftDraver from 'shared/LeftDraver';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import {indigo, pink} from '@material-ui/core/colors';

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
  formControl: {
  	margin: '16px 8px 8px',
  },
});

const Signup = ({
	classes,
	genderValue,
	onGenderClick,
	errorEmail,
	errorPassword,
	emailValue,
	passwordValue,
	confirmPasswordValue,
	onEmailChange,
	onPasswordChange,
	onConfirmPasswordChange,
	onSubmitFormCheck,
	onGetUser,
	onSubmitForm,
	...props,
}) => {
    return ([
        <Header key="1" headerText={'Signup'}/>,
        <LeftDraver key="2"/>,
        <div key="3" className={'wraper'}>
	        <div className={'container'}>
		        <form
		        	className={classes.form}
		        	noValidate autoComplete="off"
		        	onSubmit={onSubmitForm({
		        		emailValue,
		        		passwordValue,
		        		confirmPasswordValue,
		        		push: props.history.push,
		        		onSubmitFormCheck: onSubmitFormCheck,
		        		onGetUser: onGetUser,
		        	})}
		        >
		        	<Typography variant="h5" color="inherit" className={classes.grow}>
		                To register, enter your details.
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
			          name="password"
			          className={classes.textField}
			          type="password"
			          autoComplete="current-password"
			          margin="normal"
			          variant="outlined"
			          value={passwordValue}
			          error={errorPassword}
			          onChange={onPasswordChange}
			        />
			        <TextField
			          id="outlined-password-input"
			          label="Confirm password"
			          name="confirmPassword"
			          className={classes.textField}
			          type="password"
			          autoComplete="current-password"
			          margin="normal"
			          variant="outlined"
			          value={confirmPasswordValue}
			          error={errorPassword}
			          onChange={onConfirmPasswordChange}
			        />
			        <FormControl component="fieldset" className={classes.formControl}>
	                  <FormLabel>Gender</FormLabel>
	                  <RadioGroup
	                    row
	                    name="color"
	                    aria-label="color"
	                    value={genderValue}
	                    
	                  >
	                    <FormControlLabel
	                    	value="male"
	                    	control={<Radio color='primary'/>}
						    label="Male"
	                    	onClick={onGenderClick('male')}
						/>
	                    <FormControlLabel
	                    	value="female"
	                    	control={<Radio color="secondary"/>}
	                    	label="Female"
	                    	className={classes.female}
	                    	onClick={onGenderClick('female')}
	                    />
	                  </RadioGroup>
	                </FormControl>
			        <Button
			        	variant="contained"
			        	color="primary"
			        	className={classes.button}
			        	type="submit"
			        >
			        	Signup
			        </Button>
		        </form>
		    </div>
		</div>,
        <Footer key="4"/>
    ]);
};

export default connect(
	state => ({
		genderValue: state.signupState.genderValue,
		errorEmail: state.signupState.errorEmail,
		errorPassword: state.signupState.errorPassword,
		emailValue: state.signupState.emailValue,
		passwordValue: state.signupState.passwordValue,
		confirmPasswordValue: state.signupState.confirmPasswordValue,
	}),
    dispatch => ({
        onGenderClick: (status) => () => {
            dispatch({
                type: 'signupState',
                payload: {
                    genderValue: status,
                }
            })
        },
        onEmailChange: (e) => {
        	dispatch({
                type: 'signupEmailValue',
                payload: {
                    emailValue: e.target.value,
                },
            })
        },
        onPasswordChange: (e) => {
        	dispatch({
                type: 'signupPasswordValue',
                payload: {
                    passwordValue: e.target.value,
                },
            })
        },
        onConfirmPasswordChange: (e) => {
        	dispatch({
                type: 'signupConfirmPasswordValue',
                payload: {
                    confirmPasswordValue: e.target.value,
                },
            })
        },
        onSubmitFormCheck: (obj)=> {
        	dispatch({
                type: 'signupFormCheck',
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
			let passwordErrorStatus = !((obj.passwordValue === obj.confirmPasswordValue) && obj.passwordValue);
			obj.onSubmitFormCheck({emailErrorStatus: obj.emailErrorStatus, passwordErrorStatus: obj.passwordErrorStatus});
			if (emailErrorStatus || passwordErrorStatus) {
				return;
			}
			httpXHR({
				path: '/signup',
				type: 'POST',
				contentType: 'application/json',
				data: JSON.stringify({
					emailValue: obj.emailValue,
					passwordValue: obj.passwordValue,
					genderValue: obj.genderValue,
				})
			})
                .then((res) => {
                    obj.onGetUser(res);
                    obj.push('/profile');
                })
                .catch((err) => {
                    console.log(err);
                });
			return;
		},
    })
)(withStyles(styles)(Signup));
