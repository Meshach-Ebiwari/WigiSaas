import React from 'react';
import {
    BlogContainer,
    BlogWrap,
    BlogContent,
    BlogLink,
    Image,
    BlogPost,
    BlogDate
} from './ComponentElements'

const Blog = ({post}) => {
    return (
        <BlogContainer>
            <BlogWrap >
            {post.map((Blog, index) => {
                        return(
                <BlogContent key={index}>
                    <BlogLink>
                        <Image src={Blog.img} />
                        <BlogPost>{Blog.content}</BlogPost>
                        <BlogDate>{Blog.date}</BlogDate>
                    </BlogLink>
                </BlogContent>
                   );
                })}
            </BlogWrap>
        </BlogContainer>
    )
}

export default Blog
