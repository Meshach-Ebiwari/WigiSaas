import React from 'react'
import {
    HeroContainer,
    HeroContent,
    HeaderTextWrap,
    HeaderText,
    MainTextWrap,
    H1Text,
    InputWrap,
    Input,
    InputButton,
    GetStarted
} from './ComponentElements'

const Hero = ({
    text1, 
    text2, 
    text3, 
    text4, 
    button,
    text5}) => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeaderTextWrap>
                    <HeaderText>{text1}</HeaderText>
                    {text2}
                </HeaderTextWrap>
                <MainTextWrap>
                    <H1Text>{text3}</H1Text>
                    <H1Text>{text4}</H1Text>
                    <InputWrap>
                        <Input placeholder="Email Address" type="text"/>
                        <InputButton>{button}</InputButton>
                    </InputWrap>
                    <GetStarted>{text5}</GetStarted>
                </MainTextWrap>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
