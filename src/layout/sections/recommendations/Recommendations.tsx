import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Recommendation } from './recommendation/Recommendation';
import photo1 from '../../../assets/images/recommendation-1.webp';
import photo2 from '../../../assets/images/recommendation-2.webp';
import photo3 from '../../../assets/images/recommendation-3.webp';
import { Slider } from '../../../components/slider/Slider';

export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <SectionTitle
                title='recommendations'
                description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
            />

            <FlexWrapper wrap='wrap' justify='center'>
                <Slider />
            </FlexWrapper>
            {/* <FlexWrapper wrap='wrap' justify='space-between'>
                <Recommendation
                    title='Great Quality!'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'
                    src={photo1}
                    name='James Gouse'
                    profession='Graphic Designer'
                />
                <Recommendation
                    title='Amazing work!'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'
                    src={photo2}
                    name='Tiana Philips'
                    profession='Photographer'
                />
                <Recommendation
                    title='Great Quality!'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'
                    src={photo3}
                    name='Talan Westervelt'
                    profession='Business man'
                />
            </FlexWrapper> */}
        </StyledRecommendations>
    );
};

const StyledRecommendations = styled.section`
    background-color: #d777af;
    min-height: 50vh;
`;
