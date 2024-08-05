import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Slider } from '../../../components/slider/Slider';
import { Container } from '../../../components/Container';

export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <Container>
                <SectionTitle
                    title='recommendations'
                    description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
                />

                <Slider />
            </Container>
        </StyledRecommendations>
    );
};

const StyledRecommendations = styled.section``;
