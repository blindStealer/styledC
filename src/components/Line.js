import React from 'react';
import styled from "styled-components";

const StyledLine = styled.div`
  font-size: 24px;
  color: ${props => props.color || props.theme.colors.primary};
  background-color: white;
  
`

export const Line = (props) => {
    return (
        <StyledLine {...props}>

        </StyledLine>
    );
};

