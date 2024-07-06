import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { PricePlan } from './pricePlan/PricePlan';
import { Container } from '../../../components/Container';

export const PricePlans = () => {
    return (
        <StyledPrice>
            <Container>
                <SectionTitle
                    title='Price plans'
                    description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
                />

                <FlexWrapper wrap='wrap' justify='space-between'>
                    <PricePlan title='silver' price='0.00' text='For most businesses that want to' />
                    <PricePlan title='gold' price='50.00' text='For most businesses that want to' />
                    <PricePlan title='dimond' price='80.00' text='For most businesses that want to' />
                </FlexWrapper>
            </Container>
        </StyledPrice>
    );
};

const StyledPrice = styled.section`
    background-color: #e2e5a1;
    max-height: 100vh;
`;
