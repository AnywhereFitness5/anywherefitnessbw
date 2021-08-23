import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./Home";
import { GlobalStyle } from "./Styled/Global";
import { Container } from './Styled/Container';
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

                </Route>

                <Route path="/register">

                </Route>
            </Switch>
        </Container>
    );
};;