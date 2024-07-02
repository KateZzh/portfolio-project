import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../sectionTitle/SectionTitle';
import { FlexWrapper } from '../FlexWrapper';

import image1 from '../../assets/images/portfolio-1.webp';
import image2 from '../../assets/images/portfolio-2.webp';
import image3 from '../../assets/images/portfolio-3.webp';
import { BlogCard } from './blogCard/BlogCard';

export const Blog = () => {
    return (
        <StyledBlog>
            <SectionTitle
                title='Blog'
                description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
            />

            <FlexWrapper wrap='wrap' justify='space-between'>
                <BlogCard
                    src={image1}
                    title='How to make web tempates'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
                />
                <BlogCard
                    src={image2}
                    title='make Business card'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
                />
                <BlogCard
                    src={image3}
                    title='How to make Flyer Design'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
                />
            </FlexWrapper>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
    background-color: #d79e86;
    min-height: 50vh;
`;
