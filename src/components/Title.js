import React from 'react';
import styled from "styled-components";

const StyledTitle = styled.h1`
color: ${props => props.color}
`

export const Title = ({children, ...props}) => {

    console.log(props)

    return (
        <StyledTitle {...props}>
            {children}
        </StyledTitle>
    );
};

