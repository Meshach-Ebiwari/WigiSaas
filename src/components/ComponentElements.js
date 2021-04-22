
import styled from 'styled-components'
import BGImg from '../assets/maritime.jpg'
import {Link} from 'react-router-dom';


// export const NavContainer = styled.nav`
// width: 100% !important;
// display: flex !important;
// flex-direction: column !important;
// padding-top: 1.25rem !important;
// padding-bottom: 1.25rem !important;
// background-color: #000 !important;

// @media (min-width:768px){
//     flex-direction: row !important;
//     padding-left: 2.5rem !important;
// 	padding-right: 2.5rem !important
// }
// `;
// export const NavFlex = styled.div`
//     display: flex !important;
//     justify-content: space-between !important;
// `;
// export const NavLogo =styled.a`

// align-items: center !important;
// padding: .5rem !important;
// margin-right: 1rem !important;
// text-decoration: none !important;
// cursor: pointer !important;
// `;
// export const Img = styled.img`
// max-height: 2rem !important;
// width: auto !important;
// `;
// export const NavLinkWrap = styled.div`
// display: none !important;
// display: flex !important;
// flex-direction: column !important;
// align-items: center !important;


// @media (min-width: 576px) {
//     width: 100% !important
// }
// @media (min-width: 768px){
//     display: flex !important;
//     flex-direction: row !important;
//     justify-content: flex-end !important;
   
// }
// `;
// export const NavLink = styled.a`
// font-size: .9rem !important;
// margin-left: .75rem !important;
// margin-right: .75rem !important;
// padding-top: .75rem !important;
// padding-bottom: .75rem !important;
// color: #5A4FCF !important;
// text-decoration: none !important;
// transition: all 300ms ease;

// :hover{
//     text-decoration: underline !important;
//     transition: all 300ms ease;
// }
// `;



export const Navigation = styled.div`
height:10vh;
display:flex;
background-color:black;
position:relative;
justify-content:space-between;
text-transform:uppercase;
border-bottom: 2px solid #33333320;
margin: 0 auto;
padding: 3rem 5vw;
z-index:2;
align-self:center;

@media (max-width:768px) {
    position:sticky;
    height:8;
    left:0;
    right:0;
}
`;

export const LogoWrap = styled.div`
margin:auto 0;
flex:0 1 36px;

@media (max-width:768px) and (orientation: landscape){
    flex:0 1 25px;
}
`;
export const LogoImage = styled.img`
`;
export const Toggle = styled.div`
display:none;
height:100%;
cursor: pointer;
padding:20px 10vw;
@media (max-width:768px) {

    display:flex;

}
`;
 export const Navbox = styled.div`
 display:flex;
 height:100%;
justify-content:flex-end;
align-items:center;

@media (max-width:768px) {
    flex-direction:column;
    position:fixed;
    width:100%;
    padding-top:3rem;
    justify-content:flex-start;
    background-color: black;
    transition: all 0.3s ease-in-out;
    top:10vh;
    left: ${props => (props.open ? "-100%" : "0")}
}
 `;

export const Hamburger = styled.div`
background-color:#fff;
width:30px;
height:3px;
transition:all 0.3s linear;
position: relative;
transform:${props => (props.open ? "rotate(-45deg)" : "inherit")};

::before, 
::after{
    width:30px;
    height:3px;
    background-color: #fff;
    content:"";
    position: absolute;
    transition:all 0.3s linear;
}
::after{
    opacity:${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : " rotate(0deg)")};
    top:10px;
}
::before{
    transform: ${props => 
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top:-10px;
}
`;

export const NavItem = styled(Link)`
text-decoration:none;
color:#fff;
display:inline-block;
white-space:nowrap;
margin:0 1vw;
transition: all 200ms ease-in;
position:relative;
font-size: .9rem !important;

::after{
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    width:0%;
    content:"";
    color:transparent;
    background:#837AE6;
    height:1px;
    transition: all 0.4s ease-in;
}
:hover{
    color:#837AE6;
    ::after{
        width:100%;
    }
}

@media (max-width:768px) {
    padding:20px 0;
    font-size:1.5rem;
    z-index:4;
}
`;


/* Hero Section */
export const HeroContainer = styled.section`
min-height: 100vh !important;
display: flex !important;
justify-content: flex-start !important;
align-items: center !important;
`;

export const HeroContent = styled.div`
margin-left: 1.25rem !important;
margin-right: 1.25rem !important;

@media (min-width: 768px){
    margin-left: 5rem !important;
	margin-right: 5rem !important
}
`;

export const HeaderTextWrap = styled.div`
display: inline-block !important;
border-radius: 9999rem !important;
background-color: rgba(90, 79, 207, 0.3) !important;
color: #F0EEFF !important;
padding: .5rem !important;
font-size: .8rem !important;
margin-bottom: 1.25rem !important;
`;
export const HeaderText =styled.div`
display: inline-block !important;
color: #F0EEFF !important;
border-radius: 9999rem !important;
padding-left: .75rem !important;
padding-right: .75rem !important;
padding-top: .25rem !important;
padding-bottom: .25rem !important;
margin-right: .75rem !important;
font-size: .7rem !important;
background-color: #5A4FCF !important;
`;

export const MainTextWrap = styled.div`

`;

export const H1Text = styled.h1`
color: #fff !important;
font-size: 3rem !important;
line-height: 1.25 !important;
font-weight: 900 !important;

@media (min-width: 768px){
    font-size: 5rem !important;

}
`;

export const InputWrap = styled.div`
border-radius: 8px !important;
margin-top: 2.5rem !important;
display: inline-flex !important;
`;

export const Input = styled.input`
    display: inline-block;
	font-weight: 400;
	line-height: 1.5;
	color: #668295;
	background-color: transparent;
	background-clip: padding-box;
	border: 0;
	border-radius: 4px;
	vertical-align: middle;
    width: 50%;
    border-width: 0px !important;
    font-weight: 200 !important;
    background-color: rgba(240, 238, 255, 0.1) !important;
    color: #fff !important;
    border-color: #fff !important;
    opacity: .8;
    font-size: .7rem !important;
    padding-top: 1.25rem !important;
	padding-bottom: 1.25rem !important;
    min-width: 25vw !important;
    border-top-right-radius: 0px !important;
	border-bottom-right-radius: 0px !important;
    height: calc(1.8rem + 1.25rem + 2px);
    padding: 0.625rem calc(1.25rem + .5rem);

    ::-webkit-input-placeholder{
        color: #F0EEFF !important
    }
    ::-moz-placeholder{
        color: #F0EEFF !important
    }
    ::-ms-input-placeholder{
        color: #F0EEFF !important
    }
    ::placeholder{
        color: #F0EEFF !important
    }
    :focus{
        outline: none;
	    box-shadow: 0 0 0 0.15em rgba(102, 130, 149, 0.5)
    }
    :active{
        outline: none
    }
`;
export const InputButton = styled.button`
	height: calc(1.8rem + 1.25rem + 2px);
	padding: 0.625rem calc(1.25rem + 1.5rem);
	font-size: 1.2rem;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	line-height: 1.5;
	color: #fff;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: rgba(240, 238, 255, 0.2) !important;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 4px;
    color: #F0EEFF !important;
    font-weight: 300 !important;
    font-size: .7rem !important;
    margin-right: 0 !important;
    border-top-left-radius: 0px !important;
	border-bottom-left-radius: 0px !important;


    
    :focus{
        outline: none;
	    box-shadow: 0 0 0 0.15em rgba(102, 130, 149, 0.5)
    }
    :hover{
        opacity: 0.6;
    }
    [class*= ' hover']:hover{
        opacity: 1;
    }
`;
export const GetStarted = styled.div`
color: #fff !important;
opacity: .2;
font-size: .7rem !important;
margin-top: .75rem !important;
`;



/* Features */
export const FeaturesContainer = styled.section`
padding: 2.5rem !important;
`;

export const FeaturesWrap = styled.div`
display: flex !important;
flex-direction: column !important;
margin-left: auto !important;
margin-right: auto !important;

@media (min-width: 768px) {
    flex-direction: row !important;
}
`;
export const FeaturesContent = styled.div`
width: 100% !important;

@media (min-width: 768px) {
    width: 40% !important;
}
`;
export const IconWrap = styled.div`
border-radius: 8px !important;
padding: 1.25rem !important;
margin: 1.25rem !important;
`;

export const InboxIcon = styled.div`
display: flex !important;
justify-content: center !important;
align-items: center !important;
background-color: whitesmoke !important;
color: #fff !important;
width: 5rem !important;
height: 5rem !important;
border-radius: 9999rem !important;
margin-bottom: 1.25rem !important;

> img {
    width: 2.5rem !important
}
`;

export const H4 = styled.h4`
color: #fff !important;
font-weight: 600 !important;
font-size: 1.5rem !important;
margin-bottom: 1.25rem !important;
`;

export const HeaderDesc = styled.div`
color: #F0EEFF !important;
font-weight: 600 !important;
font-size: 1.125rem !important;
line-height: 1.5 !important;
opacity: .5;
`;

export const ReadMore = styled.a`
margin-top: 1.25rem !important;
display: inline-flex;
	align-items: center;
	justify-content: center;
	line-height: 1.5;
	color: #fff;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: #566E7E;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 4px;
    height: calc(1.5rem + .75rem + 2px);
	padding: 0.375rem calc(.75rem + 1rem);
	font-size: .8rem;
    background-color: rgba(240, 238, 255, 0.1) !important;
    font-size: .7rem !important;
    text-decoration: none !important;
    transition: all 300ms ease;


    :hover{
        opacity:1;
        transform: scale(1.125);
        transition: all 300ms ease
    }
`;

/*Slider */

export const SliderContainer = styled.section`
position: relative !important;
background-color: rgba(240, 238, 255, 0.1) !important;
`;

/* Big Text*/ 

export const BTContainer =  styled.section`
padding: 2.5rem !important;
padding-top: 2.5rem !important;
padding-bottom: 2.5rem !important;
`;

export const BigTextWrap = styled.div`
width: 100% !important;
margin-left: auto !important;
margin-right: auto !important;
padding-top: 2.5rem !important;
padding-bottom: 2.5rem !important;

@media (min-width: 768px){
    width: 70% !important
}
`;

export const H2Text = styled.h2`
color: #fff !important;
font-size: 2.5rem !important;
font-weight: 900 !important;
line-height: 1.25 !important;

@media (min-width: 768px){
font-size: 5rem !important
}
>span{
    border-bottom: 1px solid #E4E8EB;
    border-color: #5A4FCF !important;
    border-width: 4px !important;
}
`;

/*  Product */ 
export const ProductContainer = styled.section`
padding-top: 10rem !important;
padding-bottom: 10rem !important;
`;

export const ProductWrap = styled.div`
display: flex !important;
flex-direction: column !important;
margin-left: auto !important;
margin-right: auto !important;
width: 80% !important;

@media (min-width: 768px) {
    flex-direction: row !important;
    
}
`;
export const ProductCard = styled.div`
width: 100% !important;

@media (min-width: 768px) {
    width: 50% !important
}
`;
export const PCardContent = styled.div`
border-radius: 8px !important;
padding: 1.25rem !important;
margin: 1.25rem !important;
background-color: rgba(240, 238, 255, 0.1) !important;
cursor: pointer;
transition: all 300ms ease;
:hover{
    transform: scale(1.125);
    transition: all 300ms ease;
}
`;
export const ProductCardTitle = styled.div`
display: inline-block !important;
background-color: #5A4FCF !important;
color: #F0EEFF !important;
border-radius: 3px !important;
padding-left: 1rem !important;
padding-right: 1rem !important;
padding-top: .25rem !important;
padding-bottom: .25rem !important;
margin-bottom: 2.5rem !important;
font-size: .6rem !important;
text-transform: uppercase;
`;

export const ProductDesc = styled.div`
color: #F0EEFF !important;
font-weight: 600 !important;
font-size: 1.125rem !important;

> span{
    opacity: .3;
}
`;

export const ProductButton = styled.a`
margin-top: 2.5rem !important;
display: inline-flex;
	align-items: center;
	justify-content: center;
	line-height: 1.5;
	color: #fff;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: #566E7E;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 4px;
    background-color: #000 !important;
    font-size: .7rem !important;
    color: #fff !important;
    text-decoration: none !important;
    height: calc(1.5rem + .75rem + 2px);
	padding: 0.375rem calc(.75rem + 1rem);
    transition: all 300ms ease;

    :hover{
        opacity:0.6;
        transition: all 300ms ease
    }

`;


/*Pricing */ 

export const PricingContainer = styled.section`

`;

export const PricingContentWrap = styled.div`
padding: 2.5rem !important;
display: flex !important;
flex-wrap: wrap !important;
`;

export const PricingRight = styled.div`
width: 100% !important;

@media (min-width: 768px) {
    width: 50% !important;
}
`;

export const PricingRightContent = styled.div`
padding: 1.25rem !important;
`;

export const PRTitle = styled.h4`
color: #fff !important;
font-weight: 800 !important;
font-size: 3rem !important;
margin-bottom: 1.25rem !important;
`;

export const PRDesc = styled.div`
color: #F0EEFF !important;
font-weight: 600 !important;
font-size: 1.125rem !important;
opacity: .5;
`;

export const PRText = styled(PRTitle)`
font-weight: 600 !important;
font-size: 1.25rem !important;
margin-top: 2.5rem !important;
`;

export const PricingLogoWrap = styled.div`
display: flex !important;
color: #F0EEFF !important;
opacity: .5;
`;

export const Companies = styled.div`
width: 25% !important;
`;

export const Svg = styled.svg`

`;

export const Path = styled.path`
`;

export const PricingCard = styled.div`
width: 100% !important;

@media (min-width: 768px) {
width: 25% !important;
}
`;

export const PricingCardWrap = styled.div`
margin: .75rem !important;
padding: 1.25rem !important;
border-radius: 8px !important;
background-color: rgba(240, 238, 255, 0.1) !important;
overflow: hidden !important;
`;
export const PCTitle = styled.div`
padding: .75rem !important;
`;

export const Title = styled.h3`
color: #5A4FCF !important;
`;

export const PCost = styled.div`
color: #fff !important;
display: flex !important;
align-items: center !important;

> span {
    font-size: 4rem !important;
    line-height: 1 !important;
}
`;

export const PCDesc = styled(PCTitle)`
color: #F0EEFF !important;
font-weight: 400 !important;
font-size: .9rem !important;
line-height: 2 !important;
`;

export const PList = styled.div`
opacity: .5;
line-height: 2 !important;
font-size: .9rem !important;
`;

export const Div = styled.div`
padding: .75rem !important;
`;

export const PricingButton =  styled.button`
display: inline-flex;
	align-items: center;
	justify-content: center;
	line-height: 1.5;
	color: #fff;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: #566E7E;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 4px;
    width: 100%;
    background-color: #000 !important;
    color: #fff !important;
    height: calc(1.5rem + .75rem + 2px);
	padding: 0.375rem calc(.75rem + 1rem);
    transition: all 300ms ease;

    :hover{
        opacity: 1;
        transform: scale(1.125);
        transition: all 300ms ease;
    }
`;

export const PricingCardWrapWhite = styled(PricingCardWrap)`
background-color: #fff !important;
`;
export const PCDescWhite = styled(PCDesc)`
color: black !important;
`;

export const PCostWhite = styled(PCost)`
color: black !important;
`;


/* FeaturedBlog*/ 

export const FeaturedBlogContainer =  styled.section`
padding: 2.5rem !important;

@media (min-width: 768px) {
    padding: 10rem !important;
}
`;
export const FbWrap =  styled.div`
@media (min-width: 768px) {
 width: 75% !important;
}
`;

export const FbHeader = styled.h2`
color: #fff !important;
font-size: 3rem !important;
font-weight: 900 !important;
line-height: 1 !important;

`;
export const FbText =  styled.p`
color: #F0EEFF !important;
font-weight: 600 !important;
font-size: 1.125rem !important;
opacity: .5;
margin-top: 1.25rem !important;
margin-bottom: 1.25rem !important;
`;

export const FbImage = styled.div`
position: relative !important;
width: 100% !important;
height: 75vh !important;
background-size: cover !important;
background-position: bottom !important;
background-image: url(${BGImg});

`;
export const ImageLink= styled.a`
background-color: #fff !important;
color: #000 !important;
padding-left: 1.25rem !important;
padding-right: 1.25rem !important;
padding-top: .75rem !important;
padding-bottom: .75rem !important;
position: absolute !important;
right: 0;
bottom: 0;
display: flex !important;
justify-content: center !important;
align-items: center !important;
text-decoration: none !important;
font-size: 1.125rem !important;

:hover{
    background-color: #000 !important;
    color: #fff !important;
    transition: all 500ms ease;
}
::after{
    content: "→";
	font-size: inherit
}
`;


/* BlogContainer */ 

export const BlogContainer = styled.section`
padding: 0 !important;

@media (min-width: 768px) {
    padding: 1.25rem !important;
}
`;

export const BlogWrap = styled.div`
	display: flex !important;
    flex-wrap: wrap !important;
`;

export const BlogContent = styled.div`
width: 100% !important;
padding: 2.5rem !important;

@media (min-width: 768px) {
    width: 33.3333% !important;
}
`;

export const BlogLink = styled.a`
display: block !important;
text-decoration: none !important;
padding: 1.25rem !important;
border-radius: 8px !important;
transition: all 300ms ease;

:hover{
    transform: scale(1.125);
    transition: all 300ms ease;
    background-color: rgba(240, 238, 255, 0.1) !important;
}
`;

export const Image = styled.img`
width: 100% !important;
`;
export const BlogPost = styled.p`
color: #fff !important;
font-size: 1.5rem !important;
margin-top: .75rem !important;
font-weight: 600 !important;
`;
export const BlogDate = styled.div`
color: #5A4FCF !important;
font-size: .7rem !important;
font-style: italic;
margin-top: 1rem !important;
margin-bottom: 1rem !important;

::after{
    content: "→";
	font-size: inherit
}
`;




/* SUBSCRIBE */

export const SubContainer= styled.section`
padding: 2.5rem !important;

@media (min-width: 768px) {
    padding: 5rem !important;
}
`;


export const SubContainerWrap = styled.div`
border-radius: 8px !important;
background-color: rgba(240, 238, 255, 0.1) !important;
padding: 1.25rem !important;
flex-wrap: wrap !important;

@media (min-width: 768px){
    padding: 5rem !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
}
`;
export const  SubContent = styled.div`
   	width: 100% !important;

@media (min-width: 768px) {
    width: 33.3333% !important;
    }
`;
   
export const SubHeader = styled.h2`
color: #fff !important;
font-size: 1.75rem !important;
font-weight: 800 !important;
`;
export const SubText = styled.p`
font-weight: 600 !important;
color: #F0EEFF !important;
opacity: .4;
`;
export const SubForm = styled.div`
width: 100% !important;

@media (min-width: 768px){
width: 50% !important;
}
`;
export const SubInput = styled.div`
display: flex !important;
margin-top: 1.25rem !important;
margin-bottom: 1.25rem !important;
`;
export const SInput = styled.input`
    display: inline-block;
	line-height: 1.5;
	color: #668295;
	background-color: transparent;
	background-clip: padding-box;
	border: 0;
	border-radius: 4px;
	vertical-align: middle;
    width: 50%;
    border-width: 0px !important;
    font-weight: 200 !important;
    background-color: rgba(240, 238, 255, 0.1) !important;
    color: #fff !important;
    border-color: #fff !important;
    opacity: .8;
    font-size: .7rem !important;
    padding-top: 1.25rem !important;
	padding-bottom: 1.25rem !important;
    min-width: 25vw !important;
    border-top-right-radius: 0px !important;
	border-bottom-right-radius: 0px !important;
    height: calc(1.8rem + 1.25rem + 2px);
    padding: 0.625rem calc(1.25rem + .5rem);
    flex-grow: 1 !important;
    border-width: 0px !important;
    font-weight: 200 !important;

    ::-webkit-input-placeholder{
        color: #F0EEFF !important
    }
    ::-moz-placeholder{
        color: #F0EEFF !important
    }
    ::-ms-input-placeholder{
        color: #F0EEFF !important
    }
    ::placeholder{
        color: #F0EEFF !important
    }
    :focus{
        outline: none;
	    box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25) !important;
    }
    :active{
        outline: none
    }
`;

export const SubButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	line-height: 1.5;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: #566E7E;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 4px;
    background-color: #5A4FCF !important;
    color: #F0EEFF !important;
    font-weight: 300 !important;
    font-size: .7rem !important;
    border-top-left-radius: 0px !important;
	border-bottom-left-radius: 0px !important;
    height: calc(1.8rem + 1.25rem + 2px);
	padding: 0.625rem calc(1.25rem + 1.5rem);
	font-size: 1.2rem;
`;

/* Footer */
export const FooterContainer = styled.footer`
padding: 1.25rem !important;
background-color: rgba(240, 238, 255, 0.1) !important;

@media (min-width: 768px) {
    padding: 5rem !important;
}
`;

export const FooterWrap = styled.div`
display: flex !important;
flex-wrap: wrap !important;
`;

export const FooterImageWrap = styled.div`
margin-bottom: 2.5rem !important;

@media (min-width: 768px) {
    width: 25% !important
}
`;

export const FImage = styled.img`
width: 5rem !important;
`;

export const FooterContent = styled.div`
color: #fff !important;
opacity: .7;
font-size: .8rem !important;
margin-top: 1rem !important;

@media (min-width: 768px) {
    padding-right: 2.5rem !important;
}
`;

export const FooterP = styled.p`

`;

export const FooterLinks = styled.div`
width: 100% !important;

@media (min-width: 768px) {
    width: 50% !important;
}
`;

export const FooterLinkWrap = styled.div`
display: flex !important;
justify-content: space-around !important;
`;

export const FLink = styled.div`
width: 33.3333% !important;
margin-bottom: 2.5rem !important;

@media (min-width: 768px) {
    padding-left: 2.5rem !important;
	padding-right: 2.5rem !important;
}
`;

export const FLinkH5 = styled.h5`
color: #fff !important;
`;

export const FLinkUL = styled.ul`
list-style-type: none;
margin-top: 1.25rem !important;
font-size: .8rem !important;
`;
export const FooterLI = styled.li`
margin-top: .75rem !important;
margin-bottom: .75rem !important;
`;
 export const FooterA = styled.a`
 color: #fff !important;
 opacity: .7;
 text-decoration: none !important;

 :hover{
    text-decoration: underline !important;
 }
 `;

 export const FooterForm = styled.div`
 width: 100% !important;

 @media (min-width: 768px) {
    width: 25% !important;
 }
 `;

export const FooterFormWrap = styled.div`
display: flex !important;
width: 75% !important;
margin-left: auto !important;
margin-right: auto !important;

@media (min-width: 768px){
    width: 100% !important;
}
`;

export const FooterInput = styled.input`
display: inline-block;
	font-weight: 400;
	line-height: 1.5;
	color: #668295;
	background-color: transparent;
	background-clip: padding-box;
	border: 1px solid #B7C4CD;
	border-radius: 4px;
	vertical-align: middle;
    height: calc(1.5rem + .75rem + 2px);
	padding: 0.375rem calc(.75rem + .5rem);
	font-size: .8rem;
    flex-grow: 1 !important;
    border-width: 0px !important;
    font-weight: 200 !important;
    background-color: rgba(240, 238, 255, 0.1) !important;
    color: #fff !important;
    opacity: .8;
    font-size: .7rem !important;
    padding-top: 1.25rem !important;
	padding-bottom: 1.25rem !important;
    border-top-right-radius: 0px !important;
	border-bottom-right-radius: 0px !important;
    
    :focus{
    border-color: #fff !important;
	box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25) !important;
    }

    ::placeholder{
        color: #F0EEFF !important;
    }
    ::-ms-input-placeholder{
        color: #F0EEFF !important;
    }
    :-ms-input-placeholder{
        color: #F0EEFF !important;
    }
    ::-moz-placeholder{
        color: #F0EEFF !important;
    }
    ::-webkit-input-placeholder{
        color: #F0EEFF !important;
    }
`;
export const FooterButton = styled.button`
display: inline-flex;
	align-items: center;
	justify-content: center;
	line-height: 1.5;
	color: #fff;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: #566E7E;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 4px;
    height: calc(1.5rem + .75rem + 2px);
	padding: 0.375rem calc(.75rem + 1rem);
	font-size: .8rem;
    background-color: #272075 !important;
    color: #F0EEFF !important;
    font-weight: 300 !important;
    font-size: .7rem !important;
    border-top-left-radius: 0px !important;
	border-bottom-left-radius: 0px !important;
`;