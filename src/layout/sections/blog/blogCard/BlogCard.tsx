import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';
import { Icon } from '../../../../components/icon/Icon';
// import IconSVG from '../../../../assets/images/for-link.svg';

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

            <Wrapper>
                <Title>{item.title}</Title>
                <Text>{item.text}</Text>

                <Link href='#'>
                    Learn more <Icon iconId='for-link' width='20px' height='20px' />
                </Link>
            </Wrapper>
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

const Wrapper = styled.div`
    padding: 25px 25px 16px;

    & > a {
        display: flex;
        align-items: center;
        color: ${theme.colors.accent};
    }
`;

const Title = styled.h3`
    text-transform: capitalize;
`;

const Text = styled.p`
    margin: 8px 0;

    line-height: 1.6;
    text-transform: capitalize;
`;
