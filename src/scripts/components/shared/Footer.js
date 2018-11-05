import React from "react";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    padding: '20px 24px',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  grow: {
    flexGrow: 1,
    textAlign: 'right',
  },
});

const Footer = ({
	classes
}) => {
	return (
		<AppBar position="fixed" color="primary" className={classes.appBar}>
	        <Typography variant="h6" color="inherit" className={classes.grow}>
	            The developer: Strubitskiy Andrey.
	        </Typography>
	    </AppBar>
	)
}

export default withStyles(styles)(Footer);