import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory,useLocation } from 'react-router-dom';
import { AppBar,Avatar,Button,Toolbar,Typography } from '@material-ui/core';
import logo from '../../images/logo.png';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import { getUserFromToken, shouldLogout } from '../../utils/userUtils';

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user,setUser] = useState(getUserFromToken());

  const logout = () => {
    dispatch({type: LOGOUT});
    history.push('/');
    setUser(null);
  }

  useEffect(() => {
    setUser(getUserFromToken());

    if(shouldLogout()){
      logout();
    }
  },[location]);
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Link to="/" className={classes.brandContainer}>
            <Typography className={classes.heading} variant="h3" align="center">Social Wave</Typography>
            <img className={classes.image} src={logo} alt="social-wave" height="40px"/>
        </Link>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.userName} src={user?.image}>{user.userName.charAt(0)}</Avatar>
              <Typography className={classes.user} variant='h6'>{user.userName}</Typography>
              <Button variant='outlined' style={{color: 'rgb(9,73,150)'}} className={classes.logout} onClick={logout}> Logout </Button>
            </div>
          ) : (
            <Button component={Link} to='/auth' variant='contained' color='primary'>
              Sign In
            </Button>
          )}
        </Toolbar>
    </AppBar>
  )
}

export default Navbar