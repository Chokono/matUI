import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import {pink} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    color: 'white',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  icon: {
    color: 'white',
  }
};

const Header = ({
    onToggleDrawerClick,
    auth,
    anchorEl,
    classes,
    open,
    headerText,
})=>{
    return (
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={onToggleDrawerClick(true)}>
              <i className={`material-icons ${classes.icon}`} color="secondary">
                menu
              </i>
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {headerText}
            </Typography>
            {auth ? null : (
              <Link to="/login">
                <Button color="inherit" className={classes.icon}>Login</Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
    )
}

export default connect(
    state => ({
      auth: state.userState.auth,
    }),
    dispatch => ({
        onToggleDrawerClick: (status) => () => {
            dispatch({
                type: 'menuTrigger',
                payload: {
                    leftDraverStatus: status,
                }
            })
        },
    })
)(withStyles(styles)(Header));
