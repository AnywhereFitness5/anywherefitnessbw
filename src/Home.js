import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import yogaBanner from './Assets/yogaBanner.jpg';
import { GlobalStyle } from "./Styled/Global";
import { LoginButton } from './Styled/LoginButton';

export default function Home()
{
    // Make sure your styled components are capitalized so that React can recognize them as custom components.

    const Wrapper = styled.div`
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        height: 100%;
    `;

    const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
    `;

    return (
        <Wrapper>
            <Image src={yogaBanner} alt='silhouette photography of woman doing yoga photo' />
            <Link to="/login">
                <LoginButton>Login to your Account!</LoginButton>
            </Link>
        </Wrapper>
    );
}