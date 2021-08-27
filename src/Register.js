import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { StyledButton } from "./components/Button";
import RegisterInput from "./components/RegisterInput";
import run from "./Assets/run.jpg";
import { RegisterCheckbox } from './components/RegisterCheckbox';

function Register(props)
{
    const { values, change, errors } = props;

    const handleRegisterNow = (event) =>
    {
        console.log("Login button clicked");
    };

    const handleChange = (event) =>
    {
        const { name, value, checked, type } = event.target;
        const valueToUse = (type === "checkbox") ? checked : value;

        // console.log(`Name: ${name}, Value: ${valueToUse}`);
        change(name, valueToUse);
    };

    return (
        <Body>
            <MainContainer>
                <RegisterText>Register</RegisterText>

                <InputContainer>
                    <ErrorContainer>{errors.first_name}</ErrorContainer>
                    <RegisterInput
                        name="first_name"
                        value={values.first_name}
                        id="first-name-input"
                        onChange={handleChange}
                        type="text"
                        placeholder="First Name"

                    />

                    <ErrorContainer>{errors.last_name}</ErrorContainer>
                    <RegisterInput
                        name="last_name"
                        value={values.last_name}
                        id="last-name-input"
                        onChange={handleChange}
                        type="text"
                        placeholder="Last Name"
                    />

                    <ErrorContainer>{errors.email}</ErrorContainer>
                    <RegisterInput
                        name="email"
                        value={values.email}
                        id="email-input"
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                    />

                    <ErrorContainer>{errors.user_name}</ErrorContainer>
                    <RegisterInput
                        name="user_name"
                        value={values.user_name}
                        id="user-name-input"
                        onChange={handleChange}
                        type="text"
                        placeholder="Username"
                    />

                    <ErrorContainer>{errors.password}</ErrorContainer>
                    <RegisterInput
                        name="password"
                        value={values.password}
                        id="password-input"
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                    />

                    <ErrorContainer>{errors.confirm_password}</ErrorContainer>
                    <RegisterInput
                        name="confirm_password"
                        value={values.confirm_password}
                        id="confirm-password-input"
                        onChange={handleChange}
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <ErrorContainer>{errors.user_type}</ErrorContainer>
                    <Select
                        id='size-dropdown'
                        onChange={handleChange}
                        value={values.user_type}
                        name='user_type'
                        type='dropdown'
                    >
                        <option value=''>-- Select a user type --</option>
                        <option value='client'>Client</option>
                        <option value='instructor'>Instructor</option>
                    </Select>

                    <ErrorContainer>{errors.terms}</ErrorContainer>
                    <RegisterCheckbox
                        name="terms"
                        checked={values.terms}
                        id="terms-input"
                        onChange={handleChange}
                        label="Accept Terms of Service" />
                </InputContainer>

                <ButtonContainer>
                    <StyledButton type="button" onClick={handleRegisterNow}>Register Now</StyledButton>
                </ButtonContainer>

                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <SignIn>Already have an account ?</SignIn>
                </Link>

            </MainContainer>
        </Body>
    );
};

const Body = styled.body`
    background-image: url(${run});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-family: "Raleway", sans-serif;
`;

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    background: rgba(255, 255, 255, .9);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    @media only screen and (max-width: 320px) {
        width: 80vw;
        height: 90vh;
        hr {
            margin-bottom: 0.3rem;
        }
        h4 {
            font-size: small;
        }
    }
    @media only screen and (min-width: 360px) {
        width: 80vw;
        height: 90vh;
        h4 {
            font-size: small;
        }
    }
    @media only screen and (min-width: 411px) {
        width: 80vw;
        height: 90vh;
    }
    @media only screen and (min-width: 768px) {
        width: 80vw;
        height: 80vh;
    }
    @media only screen and (min-width: 1024px) {
        width: 70vw;
        height: 50vh;
    }
    @media only screen and (min-width: 1280px) {
        width: 30vw;
        height: 80vh;
    }
`;

const RegisterText = styled.h2`
    margin: 2rem 0 1rem 0;
    color: #3c354e;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80%;
    width: 100%;
`;

const ButtonContainer = styled.div`
    margin: 2rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignIn = styled.h4`
    cursor: pointer;
`;

const Select = styled("select")`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    width: 82%;
    height: 1rem;
    padding: .5rem;
    border: none;
    outline: none;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
    border-radius: 2rem;
    height: 2.2rem;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    z-index: 100;
`;

const ErrorContainer = styled.div`
     margin: -10px;
     font-size: 0.45em;
     color: red;
     display: block;
     margin-top: 4px;
     font-family: tahoma, serif;
`;

export default Register;;