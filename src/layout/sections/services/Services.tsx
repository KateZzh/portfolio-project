import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Service } from './service/Service';

export const Services = () => {
    return (
        <StyledServices>
            <SectionTitle
                title='My Services'
                description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
            />

            <FlexWrapper>
                <Service iconId='coding' title='Web Development' directions='Blog, E-Commerce' />
            </FlexWrapper>
        </StyledServices>
    );
};

const StyledServices = styled.section``;
