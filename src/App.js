import React from "react";
import {Container, createTheme, ThemeProvider} from '@material-ui/core';

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () =>{
    const theme = createTheme({
        typography: {
          fontFamily: 'Poppins, sans-serif',
        },
        palette: {
            primary: {
                main: 'rgb(17,119,211)'
            }
        }
    });

    return(
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_OAUTH}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Container maxWidth='xl'>
                        <Navbar />
                        <Switch>
                            <Route path="/" exact component={() => <Redirect to="/posts" />} />
                            <Route path="/posts" exact component={Home} />
                            <Route path="/posts/search" exact component={Home} />
                            <Route path="/posts/:id" exact component={PostDetails} />
                            <Route path="/auth" exact component={() => (!localStorage.getItem('token') ? <Auth /> : <Redirect to="/posts" />)} />
                        </Switch>
                    </Container>
                </ThemeProvider>
            </BrowserRouter>
        </GoogleOAuthProvider>
    )
}

export default App;