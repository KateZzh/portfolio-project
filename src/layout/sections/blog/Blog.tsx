import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';

import image1 from '../../../assets/images/portfolio-1.webp';
import image2 from '../../../assets/images/portfolio-2.webp';
import image3 from '../../../assets/images/portfolio-3.webp';
import { BlogCard } from './blogCard/BlogCard';
import { Container } from '../../../components/Container';

const blogCardItems = [
    {
        id: '1',
        src: image1,
        title: 'How to make web tempates',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    },
    {
        id: '2',
        src: image2,
        title: 'make Business card',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    },
    {
        id: '3',
        src: image3,
        title: 'How to make Flyer Design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    },
];

export const Blog = () => {
    return (
        <StyledBlog>
            <Container>
                <SectionTitle
                    title='Blog'
                    description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
                />

                <FlexWrapper wrap='wrap' justify='space-between'>
                    {blogCardItems.map((item) => (
                        <BlogCard item={item} key={item.id} />
                    ))}
                </FlexWrapper>
            </Container>
        </StyledBlog>
    );
};

const StyledBlog = styled.section``;
