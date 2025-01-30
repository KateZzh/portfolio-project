import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
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
            <SectionTitle
                title='Portfolio'
                description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
            />

            <TabMenu tabMenuItems={portfolioItems} />

            <GridWrapper>
                {imageItems.map((item, index) => (
                    <ImageWrapper key={index}>
                        <Image src={item} alt={item} />

                        <IconWrapper>
                            <Icon iconId='plus' width='52' height='52' />
                        </IconWrapper>
                    </ImageWrapper>
                ))}
            </GridWrapper>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section``;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    grid-auto-rows: 300px;
    justify-content: center;
    gap: 20px;

    @media ${theme.media.mobile} {
        grid-template-columns: repeat(auto-fit, 310px);
    }
`;

const IconWrapper = styled.div``;

const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;

    position: relative;
    z-index: 0;

    &::after {
        display: none;
        content: '';
        background-color: ${theme.colors.accent};
        opacity: 0.9;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    ${IconWrapper} {
        display: none;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    &:hover {
        cursor: pointer;

        &::after {
            display: block;
        }

        ${IconWrapper} {
            display: block;
        }
    }

    @media ${theme.media.tablet} {
        &::after {
            display: block;
            opacity: 0.7;
        }

        ${IconWrapper} {
            display: block;
        }
    }
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
