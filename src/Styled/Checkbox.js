import React from "react";
import styled from "styled-components";

const Input = styled.input`
    vertical-align: middle;
`;

const Label = styled.label`
    display: inline-block;
    white-space: nowrap;
    vertical-align: middle;
`;

export function Checkbox(
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
            <Input
                id={id}
                type="checkbox"
                name={name}
                value={value}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            {label}
        </Label>
    );
}