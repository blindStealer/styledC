import React from 'react'
import styled from "styled-components";
import {Title} from "./components/Title";
import {Flex} from "./components/Flex";
import {Console} from "./components/Console";
import Button from "./components/Button";


const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
  
`


export const App = () => {
  return (
    <AppWrapper>
            <Flex justify={'center'}>
                <Title color={'green'}>
                    console cmd 2022. blindStealer
                </Title>
            </Flex>

        <Flex direction={'column'}>
            <Console />
            <Button  background={'blue'} color={'white'}  alignSelf={'flex-end'}>
                Отправить
            </Button>
        </Flex>


    </AppWrapper>
  )
}
