import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

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

                <FlexWrapper wrap='wrap' justify='space-between' gap='20px'>
                    {imageItems.map((item, index) => (
                        <Image src={item} alt={item} key={index} />
                    ))}
                </FlexWrapper>
            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`

`;

const Image = styled.img`
    height: 300px;
    width: 305px;
    object-fit: cover;
`;
