import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { StyledButton } from "./components/Button";
import RegisterInput from "./components/RegisterInput";
import run from "./Assets/run.jpg";
import { RegisterCheckbox } from './components/RegisterCheckbox';

const options = ["Client", "Instructor"];

function Register(props)
{
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const { values, change, errors } = props;

    const handleRegisterNow = (event) =>
    {
        console.log("Login button clicked");
    };

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () =>
    {
        setSelectedOption(value);
        setIsOpen(false);
        console.log("Selected:", selectedOption);
    };

    const onChange = (event) =>
    {
        const { name, value, checked, type } = event.target;

        const valueToUse = (type === "checkbox") ? checked : value;

        console.log(`Name: ${name}, Value: ${valueToUse}`);
        change(name, valueToUse);
    };

    return (
        <Body>
            <MainContainer>
                <RegisterText>Register</RegisterText>

                <ErrorContainer>
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.user_name}</div>
                    <div>{errors.password}</div>
                    <div>{errors.confirm_password}</div>
                    <div>{errors.user_type}</div>
                    <div>{errors.terms}</div>
                </ErrorContainer>

                <InputContainer>
                    <RegisterInput
                        name="first_name"
                        value={values.first_name}
                        id="first-name-input"
                        onChange={onChange}
                        type="text"
                        placeholder="First Name"

                    />

                    <RegisterInput
                        name="last_name"
                        value={values.last_name}
                        id="last-name-input"
                        onChange={onChange}
                        type="text"
                        placeholder="Last Name"
                    />

                    <RegisterInput
                        name="email"
                        value={values.email}
                        id="email-input"
                        onChange={onChange}
                        type="email"
                        placeholder="Email"
                    />

                    <RegisterInput
                        name="user_name"
                        value={values.user_name}
                        id="user-name-input"
                        onChange={onChange}
                        type="text"
                        placeholder="Username"
                    />

                    <RegisterInput
                        name="password"
                        value={values.password}
                        id="password-input"
                        onChange={onChange}
                        type="password"
                        placeholder="Password"
                    />

                    <RegisterInput
                        name="confirm_password"
                        value={values.confirm_password}
                        id="confirm-password-input"
                        onChange={onChange}
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <DropDownContainer>
                        <DropDownHeader onClick={toggling}>
                            {selectedOption || "-- Select an Option --"}
                        </DropDownHeader>
                        {isOpen && (
                            <DropDownListContainer>
                                <DropDownList>
                                    {options.map(option => (
                                        // onClick={onOptionClicked("user_type", option)}
                                        <ListItem onClick={onOptionClicked(option)} key={option}>
                                            {option}
                                        </ListItem>
                                    ))}
                                </DropDownList>
                            </DropDownListContainer>
                        )}
                    </DropDownContainer>

                    <RegisterCheckbox
                        name="terms"
                        checked={values.terms}
                        id="terms-input"
                        onChange={onChange}
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
    margin: 3rem 0 2rem 0;
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
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const SignIn = styled.h4`
    cursor: pointer;
    `;

const DropDownContainer = styled("div")`
    width: 82%;
    margin: 0 auto;
    `;

const DropDownHeader = styled("div")`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
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
    `;

const DropDownListContainer = styled("div")`
    border-radius: 2rem;
    height: 3.2rem;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    z-index: 100;
    `;

const DropDownList = styled("ul")`
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    `;

const ListItem = styled("li")`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    height: 1rem;
    padding: .5rem;
    border: none;
    outline: none;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    list-style: none;
    &:hover {
        color: #d62828;
        cursor: pointer;
        }
    `;

const ErrorContainer = styled.div`
     margin: 8px;
     font-size: 0.5em;
     color: red;
     display: block;
     margin-top: 4px;
     font-family: "Arial";
`;

export default Register;;