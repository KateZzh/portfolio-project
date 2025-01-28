import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Slider } from '../../../components/slider/Slider';

export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <SectionTitle
                title='recommendations'
                description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
            />

            <Slider />
        </StyledRecommendations>
    );
};

const StyledRecommendations = styled.section``;
