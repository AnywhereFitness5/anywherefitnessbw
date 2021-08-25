import React from "react";
import styled from "styled-components";

const Input = styled.input`
    background: rgba(255, 255, 255, 0.15);
    width: 7%;
    height: 1.5rem;
    margin-left: 72%;
    position: absolute;
`;

const Label = styled.label`
    display: flex;
    align-content: center;
    justify-content: flex-start;
    text-align: left;
    line-height: 34px;
    background: linear-gradient(to right, #a44a3f 0%, #f08080 79%);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    width: 80%;
    height: 2.2rem;
    padding: 0.4rem;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #b9abe0;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
    }
    &::placeholder {
        color: #b9abe099;
        font-weight: 100;
        font-size: 1rem;
    }
`;

export function RegisterCheckbox(
    {
        value,
        checked,
        onChange,
        name,
        id,
        label,
        disabled
    })
{
    return (
        <Label htmlFor={id}>
            &nbsp;{label}
            <Input
                id={id}
                type="checkbox"
                name={name}
                value={value}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
        </Label>
    );
}