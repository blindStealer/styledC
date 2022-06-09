import React from 'react';
import styled, {css, keyframes} from "styled-components";

const rotateAnimation = keyframes`
0%{
  transform: rotateZ(0deg);
}
  100%{
    transform: rotateZ(360deg);
  }
`


const StyledButton = styled.button.attrs({
    primary: true
})`
border: none;
padding: 10px 15px;
  font-size: 18px; // 30px
  cursor: pointer;
  &:focus {
    outline: none;
  }

  &:hover {
    animation: ${rotateAnimation} 2s infinite linear ;
  }
  width: 150px; // 300px
  align-self: ${props => props.alignSelf || 'stretch'};

  ${props => props.primary && css`
  color: ${props => props.color};
  background-color: ${props => props.background};
  `}
  
  ${props => props.outlined && css`
  color: ${props => props.color};
  border: ${props => props.border};
  background: transparent;
  `};
  
  
  
`

const LargeButtonStyled = styled(StyledButton)`
font-size: 30px;
  width: 300px;
`


const Button = (props) => {
    return (
        <LargeButtonStyled {...props}>

        </LargeButtonStyled>
    );
};

export default Button;