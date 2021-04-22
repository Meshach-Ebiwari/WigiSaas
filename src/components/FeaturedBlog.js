import React from 'react'
import {
    FeaturedBlogContainer,
    FbWrap,
    FbHeader,
    FbText,
    FbImage,
    ImageLink
} from './ComponentElements'


const FeaturedBlog = ({data}) => {
    return (
        <>
        {data.map((Fblog) => {
            return(
        <FeaturedBlogContainer>

           
                <FbWrap>
                <FbHeader>{Fblog.Header}</FbHeader>
                <FbText>{Fblog.date}</FbText>
             </FbWrap>
            <FbImage>
                <ImageLink />
            </FbImage>
             
        </FeaturedBlogContainer>
        );
    })} 
    </>
    )
}

export default FeaturedBlog
