import styled from 'styled-components';
import { font } from '../../styles/Common';

type SectionTitlePropsType = {
    title: string;
    description: string;
};

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.div`
    text-align: center;
`;

const Title = styled.h2`
    text-transform: capitalize;
`;

const Description = styled.p`
    ${font({ lineHeight: 1.6, textTransform: 'capitalize' })}
    margin: 25px auto 50px;
    max-width: 438px;
`;
