import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import * as yup from 'yup';
import Home from "./Home";
import { GlobalStyle } from "./Styled/Global";
import { Container } from "./Styled/Container";
import Login from "./Login";
import Register from "./Register";
import registerSchema from './validation/registerSchema';
import UnderConstruction from "./UnderConstruction";
import UserProfile from "./UserProfile";
import 
{
    Nav,
    NavHeader,
    NavItem,
    NavItems,
    NavItemButton
} from "./Styled/Navbar";

const initialRegisterValues =
{
    first_name: '',
    last_name: '',
    email: '',
    user_name: '',
    password: '',
    confirm_password: '',
    user_type: '',
    terms: false
};

const initialRegisterErrors =
{
    first_name: '',
    last_name: '',
    email: '',
    user_name: '',
    password: '',
    confirm_password: '',
    user_type: ''
};

export default function App()
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [registerValues, setRegisterValues] = useState(initialRegisterValues);
    const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors);
    const [registerDisabled, setRegisterDisabled] = useState(true);

    const login = function (username, password, history)
    {
        // return axios
        // Validate user credentials against loginSchema
        // Use user credentials to authenticate the user
        // If authentication is successful, then 
        setIsLoggedIn(true);

        // Use returned user id in order to get information to display in user profile/ schedule/ etc.
        // Save user id in React State Hook
        setUserId(5);

        //Redirect to User Profile
        history.push(`/user-profile/${userId}`);
    };

    const validate = (name, value) =>
    {
        if (name === "confirm_password")
        {
            const passwordValue = registerValues["password"];
            const confirmValue = value;

            if (passwordValue === confirmValue)
            {
                registerErrors["confirm_password"] = '';
            }
            else
            {
                registerErrors["confirm_password"] = 'Passwords must match';
            }
        }
        else
        {
            yup.reach(registerSchema, name)
                .validate(value)
                .then(() => setRegisterErrors({ ...registerErrors, [name]: '' }))
                .catch(err => setRegisterErrors({ ...registerErrors, [name]: err.errors[0] }));
        }
    };

    const inputRegisterChange = (name, value) =>
    {
        validate(name, value);
        setRegisterValues({ ...registerValues, [name]: value });
    };

    const registerSubmit = (history) =>
    {
        // Navigate to "/login"
        history.push("/login");
    };


    useEffect(() =>
    {
        registerSchema.isValid(registerValues).then(valid => setRegisterDisabled(!valid));
    }, [registerValues]);

    let loginButton;

    if (isLoggedIn)
    {
        loginButton = <NavItemButton to="/logout">Logout</NavItemButton>;
    } else
    {
        loginButton = <NavItemButton to="/login">Login</NavItemButton>;
    }

    return (
        <Container>
            <GlobalStyle />
            <Nav>
                <NavHeader>Anywhere Fitness</NavHeader>
                <NavItems>
                    <NavItem to="/">Home</NavItem>
                    {isLoggedIn && <NavItem to="/class/schedule">Class Schedule</NavItem>}
                    <NavItem to="/instructors">List of Instructors</NavItem>

                    {loginButton}

                    <NavItemButton primary to="/register">Register</NavItemButton>
                </NavItems>
            </Nav>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/class/schedule">
                    <UnderConstruction />
                </Route>

                <Route path="/instructors">
                    <UnderConstruction />
                </Route>

                <Route path="/login">
                    <Login login={login} />
                </Route>

                <Route path="/register">
                    <Register
                        values={registerValues}
                        change={inputRegisterChange}
                        errors={registerErrors}
                        disabled={registerDisabled}
                        submit={registerSubmit}
                    />
                </Route>

                <Route path={`/user-profile/:${userId}`}>
                    <UserProfile />
                </Route>

                <Route path="/logout">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Container>
    );
};