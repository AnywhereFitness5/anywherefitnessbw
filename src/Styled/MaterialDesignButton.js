import styled from 'styled-components';

// Make sure your styled components are capitalized so that React can recognize them as custom components.

export const MaterialDesignButton = styled.button`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    margin: 0 8px;
    border: none;
    border-radius: 2px;
    padding: 0 16px;
    min-width: 64px;
    height: 36px;
    vertical-align: middle;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: #fff;
    background-color: #1c5d76;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system;
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.2s;

    &:hover,
    &:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }

    &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    &:disabled {
    color: rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: none;
    cursor: initial;
    }

    &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 0.2s;
    }

    &:hover::before {
    opacity: 0.12;
    }

    &:focus::before {
    opacity: 0.2;
    }

    &:active::before {
    opacity: 0.32;
    }

    &:disabled::before {
    opacity: 0;
    }

    &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 18px;
    border-radius: 50%;
    padding: 50%;
    width: 32px;
    height: 32px;
    background-color: currentColor;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
    }

    &:active::after {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
    }

    &:disabled::after {
    opacity: 0;
    }
`;