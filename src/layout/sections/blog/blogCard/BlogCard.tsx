import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';

type BlogCardItems = {
    id: string;
    src: string;
    title: string;
    text: string;
};

type BlogCardPropsType = {
    item: BlogCardItems;
};

export const BlogCard = ({ item }: BlogCardPropsType) => {
    return (
        <StyledBlogCard>
            <Image src={item.src} />
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
            <Link href='#'>Learn more</Link>
        </StyledBlogCard>
    );
};

const StyledBlogCard = styled.div`
    background-color: ${theme.colors.secondaryBg};
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
