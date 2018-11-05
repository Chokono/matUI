import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import classNames from 'classnames';

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
	classes
}) => {
    return ([
        <Header key="1" headerText={'Login'}/>,
        <LeftDraver key="2"/>,
        <div key="3" className={'wraper'}>
	        <div className={'container'}>
		        <form className={classes.form} noValidate autoComplete="off">
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
			        />
			        <TextField
			          id="outlined-password-input"
			          label="Password"
			          className={classes.textField}
			          type="password"
			          autoComplete="current-password"
			          margin="normal"
			          variant="outlined"
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

export default withStyles(styles)(Login);