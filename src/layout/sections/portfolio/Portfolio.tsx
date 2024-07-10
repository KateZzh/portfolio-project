import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { Icon } from '../../../components/icon/Icon';

import image1 from '../../../assets/images/portfolio-1.webp';
import image2 from '../../../assets/images/portfolio-2.webp';
import image3 from '../../../assets/images/portfolio-3.webp';
import image4 from '../../../assets/images/portfolio-4.webp';
import image5 from '../../../assets/images/portfolio-5.webp';
import image6 from '../../../assets/images/portfolio-6.webp';
import image7 from '../../../assets/images/portfolio-7.webp';
import image8 from '../../../assets/images/portfolio-8.webp';
import image9 from '../../../assets/images/portfolio-9.webp';

const portfolioItems = ['All categories', 'UI Design', 'Web Templates', 'Logo', 'Branding'];
const imageItems = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <SectionTitle
                    title='Portfolio'
                    description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
                />

                <TabMenu tabMenuItems={portfolioItems} />

                <FlexWrapper wrap='wrap' justify='space-between' gap='10px'>
                    {imageItems.map((item, index) => (
                        <ImageWrapper key={index}>
                            <Image src={item} alt={item} />

                            <IconWrapper>
                                <Icon iconId='plus' width='52' height='52' viewBox='0 0 52 52' />
                            </IconWrapper>
                        </ImageWrapper>
                    ))}
                </FlexWrapper>
            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section``;

const IconWrapper = styled.div``;

const ImageWrapper = styled.div`
    height: 300px;
    width: 305px;

    position: relative;
    z-index: 0;

    &:hover {
        cursor: pointer;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

            background-color: ${theme.colors.accent};
            opacity: 0.9;
        }

        ${IconWrapper} {
            display: block;
        }
    }

    ${IconWrapper} {
        display: none;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
