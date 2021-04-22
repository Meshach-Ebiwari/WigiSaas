import React from 'react';
import {
    SubContainer,
    SubContainerWrap,
    SubContent,
    SubForm,
    SubHeader,
    SubText,
    SubInput,
    SInput,
    SubButton,
} from './ComponentElements'

const Subscribe = () => {
    return (
        <SubContainer>
            <SubContainerWrap>
                <SubContent>
                    <SubHeader>Try Hook today</SubHeader>
                    <SubText>Get first month free for commercial use. Forever free for
                    open source products.</SubText>
                </SubContent>
                <SubForm>
                    <SubInput>
                        <SInput placeholder="Email Address" />
                        <SubButton>Get Started</SubButton>
                    </SubInput>
                </SubForm>
            </SubContainerWrap>
        </SubContainer>
    )
}

export default Subscribe
