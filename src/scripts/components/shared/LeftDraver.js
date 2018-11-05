import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {indigo} from '@material-ui/core/colors';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    color: indigo[900],
    textDecoration: 'none',
  },
  color: {
  	color: indigo[900],
  }
};

const LeftDraver = ({
	classes,
	isOpen,
	onToggleDrawerClick,
	auth,
}) => {
	return (
		<Drawer open={isOpen} onClose={onToggleDrawerClick(false)}>
          <div
            tabIndex={0}
            role="button"
          >
          	<div className={classes.list}>
          		<Link to="/" className={classes.fullList}>
	            	<List onClick={onToggleDrawerClick(false)}>
	            		<ListItem button>
	            			<ListItemIcon>
	            				<i className={`material-icons ${classes.color}`}>
      									home
      								</i>
      							</ListItemIcon>
	            			<ListItemText primary={'Home'} />
	            		</ListItem>
	            	</List>
            	</Link>
            	<Divider />
            	<Link to={auth ? "/profile" : "/login"} className={classes.fullList}>
	            	<List onClick={onToggleDrawerClick(false)}>
	            		<ListItem button>
	            			<ListItemIcon>
	            				<i className={`material-icons ${classes.color}`}>
      									{auth ? 'person' : 'fingerprint'}
      								</i>
      							</ListItemIcon>
	            			<ListItemText primary={auth ? 'Profile' : "Login"} />
	            		</ListItem>
	            	</List>
            	</Link>
            	<Divider />
              {auth ? ([
                <Link key='1' to="/" className={classes.fullList}>
                  <List onClick={onToggleDrawerClick(false)}>
                    <ListItem button>
                      <ListItemIcon>
                        <i className={`material-icons ${classes.color}`}>
                            power_settings_new
                        </i>
                      </ListItemIcon>
                      <ListItemText primary={'Logout'} />
                    </ListItem>
                  </List>
                </Link>,
                <Divider key='2'/>
              ]) : null}
		    </div>
          </div>
        </Drawer>
	)
}

export default connect(
	state => ({
        isOpen: state.menuTrigger.openLeftDraver,
        auth: state.userState.auth,
    }),
    dispatch => ({
        onToggleDrawerClick:(status) => () => {
            dispatch({
                type: 'menuTrigger',
                payload: {
                    leftDraverStatus: status,
                }
            })
        },
    })
)(withStyles(styles)(LeftDraver));