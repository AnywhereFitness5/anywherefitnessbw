import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import { GlobalStyle } from "./Styled/Global";
import { Container } from "./Styled/Container";
import Login from "./Login";
import Register from "./Register";
import 
{
    Nav,
    NavHeader,
    NavItem,
    NavItems,
    NavItemButton
} from "./Styled/Navbar";

export default function App()
{
    return (
        <Container>
            <GlobalStyle />
            <Nav>
                <NavHeader>Anywhere Fitness</NavHeader>
                <NavItems>
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/class/schedule">Class Schedule</NavItem>
                    <NavItem to="/instructors">List of Instructors</NavItem>
                    <NavItemButton to="/login">Login</NavItemButton>
                    <NavItemButton primary to="/register">Register</NavItemButton>
                </NavItems>
            </Nav>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/class/schedule">

                </Route>

                <Route path="/instructors">

                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </Container>
    );
};;