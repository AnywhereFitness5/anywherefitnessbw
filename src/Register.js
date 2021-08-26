import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { StyledButton } from "./components/Button";
import RegisterInput from "./components/RegisterInput";
import run from "./Assets/run.jpg";
import { RegisterCheckbox } from './components/RegisterCheckbox';
import axios from 'axios';
import { useHistory } from "react-router";

const options = ["Client", "Instructor"];

function Register(props) {

    const registeredValues = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '' 
    }
    
    const push = useHistory()

    const [registered, setRegistered] = useState(registeredValues)

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);


    const handleChanges = e =>{
      setRegistered({...registered, [e.target.name]: e.target.value})
    }

    const handleRegisterNow = (event) => {
        console.log("register button clicked");
        event.preventDefault()
        axios.post('https://anywhere-fitness5-lambda.herokuapp.com/api/auth/register', registered)
        .then((res)=> {
          console.log(res)
          push('login')
          setRegistered(registered)
        })
        .catch((err)=>console.log(err))   
    };




    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () =>
    {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <Body>
            <MainContainer>
                <RegisterText>Register</RegisterText>

                <InputContainer>
                    <RegisterInput 
                     type="text"
                     name = 'first_name'
                     placeholder="First Name"
                     value={registered.first_name}
                     onChange={handleChanges}
                     />
                     <RegisterInput 
                     type="text"
                     name = 'last_name'
                     placeholder="Last Name"
                     value={registered.last_name}
                     onChange={handleChanges}
                     />
                    <RegisterInput 
                    type="email" 
                    name = 'email'
                    placeholder="Email" 
                    value = {registered.email}
                    onChange={handleChanges}
                    />
                    <RegisterInput 
                    type="text" 
                    name='username'
                    placeholder="Username" 
                    value={registered.username}
                    onChange={handleChanges}
                    />
                    <RegisterInput 
                    type="password" 
                    name='password'
                    placeholder="Password" 
                    value={registered.password}
                    onChange={handleChanges}
                    />
                    <RegisterInput 
                    type="password" 
                    name='password'
                    placeholder="Confirm Password" 
                    value={registered.password}
                    onChange={handleChanges}
                    />

                    <DropDownContainer>
                        <DropDownHeader onClick={toggling}>
                            {selectedOption || "-- Select an Option --"}
                        </DropDownHeader>
                        {isOpen && (
                            <DropDownListContainer>
                                <DropDownList>
                                    {options.map(option => (
                                        <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                            {option}
                                        </ListItem>
                                    ))}
                                </DropDownList>
                            </DropDownListContainer>
                        )}
                    </DropDownContainer>

                    <RegisterCheckbox label="Accept Terms of Service" />
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
                `

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

export default Register;