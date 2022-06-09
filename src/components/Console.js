import React, {useState} from 'react';
import styled from "styled-components";
import {Flex} from "./Flex";
import {Line} from "./Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background-color: black;
  font-size: 24px;
  color: ${((props) => props.color || props.theme.colors.primary)};
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }

`



export const Console = ({color, ...props}) => {

    const [lines, setLines] = useState(['C/Users/Ulbi.tv'])

    const onKeyPress = (e) => {
        if(e.charCode == 13) {
            setLines([...lines, 'C/Users/Ulbi.tv'])
        }
    }

    return (
        <Flex margin={'20px'}>
            <Flex direction={'column'} margin={'0px 10px'}>
                {
                    lines.map(line =>
                    <Line>
                        {line}
                    </Line>
                    )
                }
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} {...props}/>
        </Flex>
    );
};

