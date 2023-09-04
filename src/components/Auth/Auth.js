import React, { useState } from 'react'
import { Avatar,Button,Paper,Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import { GoogleLogin,googleLogout } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import { useHistory } from 'react-router-dom';
import {signin,signup} from '../../actions/auth';

const Auth = () => {
    const history = useHistory();
    const classes = useStyles();
    const [showPassword,setShowPassword] = useState(false);
    const [formData,setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [isSignup,setIsSignup] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup){
            dispatch(signup(formData,history));
        }else{
            dispatch(signin(formData,history));
        }
    }

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const switchMode = () => {
        setIsSignup((isSignup) => !isSignup);
        setShowPassword(false);
    }

    const googleSuccess = async (response) => {
        try {
            dispatch({type: AUTH, data: response?.credential});
            history.push('/');
        } catch (error) {
            console.log(error)
        }

    }

    const googleFailure = async (response) => {
        console.log(response);
    }

    return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon style={{fontSize: '1.5rem'}}/>
            </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {
                    isSignup && (
                        <>
                            <Input name='firstName' label="First Name" handleChange={handleChange} autoFocus={true} half={true} />
                            <Input name='lastName' label="Last Name" handleChange={handleChange} autoFocus={true} half={true} />
                        </>
                    )
                }
                <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
            </Grid>
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
            <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',width: '100%'}}>
                <GoogleLogin onSuccess={googleSuccess} onError={googleFailure} />
            </div>
            <Grid container justifyContent='flex-end' style={{marginTop: '10px'}}>
                <Grid item>
                    <Button onClick={switchMode}>
                        {isSignup ? 'Already have an account? sign in' : "Don't have an account? Sign up"}
                    </Button>
                </Grid>
            </Grid>
        </form>
        </Paper>
    </Container>
    )
}

export default Auth