import React from 'react';
import styled from "styled-components";
import { StyledButton } from "./components/Button";
import Input from "./components/Input";
import run from "./Assets/run.jpg";

function Register(props)
{
    const handleRegisterNow = (event) =>
    {
        console.log("Login button clicked");
    };
    return (
        <Body>
            <MainContainer>
                <RegisterText>Register</RegisterText>

                <InputContainer>
                    <Input type="text" placeholder="First Name" />
                    <Input type="text" placeholder="Last Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Confirm Password" />
                    <label>User Type&nbsp;
                        <select
                            id='role-dropdown'
                            name='role'
                        >
                            <option value=''>-- Select An Option --</option>
                            <option value='client'>Client</option>
                            <option value='instructor'>Instructor</option>
                        </select>
                    </label>
                    <label>Accept Terms of Service&nbsp;
                        <input
                            type="checkbox"
                            name="terms"
                        />
                    </label>
                </InputContainer>

                <ButtonContainer>
                    <StyledButton type="button" onClick={handleRegisterNow}>Register Now</StyledButton>
                </ButtonContainer>

                <SignIn>Already have an account ?</SignIn>

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

export default Register;