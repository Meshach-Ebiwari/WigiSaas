import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterImageWrap,
    FImage,
    FooterContent,
    FooterP,
    FooterLinks,
    FooterLinkWrap,
    FLink,
    FLinkH5,
    FLinkUL,
    FooterLI,
    FooterA,
    FooterForm,
    FooterFormWrap,
    FooterInput,
    FooterButton
} from './ComponentElements';
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
       <FooterContainer>
            <FooterWrap>
                <FooterImageWrap>
                    <FImage src={Logo} />
                    <FooterContent>
                        <FooterP>
                        This is a template designed and developed by <a href="https://www.linkedin.com/in/ebiwari-meshach-a6862a193/">Ebiwari Meshach</a> using React.js and styled-components
                        </FooterP>
                        <br/> 
                        <FooterP>
                        you can check out the source code on <a>github</a> and its solely for learning purposes
                        </FooterP>
                    </FooterContent>
                </FooterImageWrap>

                <FooterLinks>
                    <FooterLinkWrap>
                        <FLink>
                            <FLinkH5>Company</FLinkH5>
                            <FLinkUL>
                                <FooterLI>
                                    <FooterA>About</FooterA>
                                </FooterLI>
                                <FooterLI>
                                    <FooterA>Jobs</FooterA>
                                </FooterLI>
                                <FooterLI>
                                    <FooterA>Media</FooterA>
                                </FooterLI>
                            </FLinkUL>
                        </FLink>

                        <FLink>
                            <FLinkH5>Product</FLinkH5>
                            <FLinkUL>
                                <FooterLI>
                                    <FooterA>About</FooterA>
                                </FooterLI>
                                <FooterLI>
                                    <FooterA>Jobs</FooterA>
                                </FooterLI>
                                <FooterLI>
                                    <FooterA>Media</FooterA>
                                </FooterLI>
                            </FLinkUL>
                        </FLink>
                        <FLink>
                            <FLinkH5>Support</FLinkH5>
                            <FLinkUL>
                                <FooterLI>
                                    <FooterA>About</FooterA>
                                </FooterLI>
                                <FooterLI>
                                    <FooterA>Jobs</FooterA>
                                </FooterLI>
                                <FooterLI>
                                    <FooterA>Media</FooterA>
                                </FooterLI>
                            </FLinkUL>
                        </FLink>
                 </FooterLinkWrap>         
                </FooterLinks>
                        <FooterForm>
                            <FooterFormWrap>
                                <FooterInput placeholder="Email Address" />
                                <FooterButton>Start</FooterButton>
                            </FooterFormWrap>
                        </FooterForm>
            </FooterWrap>
       </FooterContainer>
    )
}
export default Footer
