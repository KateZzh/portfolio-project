import React from 'react';
import styled from 'styled-components';

type SectionTitlePropsType = {
    title: string;
    description: string;
};

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.div``;
