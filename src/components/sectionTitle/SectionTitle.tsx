import styled from 'styled-components';

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
    line-height: 1.6;
    text-transform: capitalize;
    margin: 25px auto 50px;
    max-width: 438px;
`;
