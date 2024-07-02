import React from 'react';
import styled from 'styled-components';

type BlogCardPropsType = {
    src: string;
    title: string;
    text: string;
};

export const BlogCard = (props: BlogCardPropsType) => {
    return (
        <StyledBlogCard>
            <Image src={props.src} />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href='#'>Learn more</Link>
        </StyledBlogCard>
    );
};

const StyledBlogCard = styled.div`
    border: 1px solid red;
    max-width: 310px;
    width: 100%;
`;
const Image = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
`;

const Title = styled.h3``;
const Text = styled.p``;
const Link = styled.a``;
