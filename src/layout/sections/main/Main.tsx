import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Header } from '../../header/Header';
import { Services } from '../services/Services';
import { PricePlans } from '../pricePlans/PricePlans';
import { Recommendations } from '../recommendations/Recommendations';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction='column'>
                <Header />
                <Services />
                <PricePlans />
                <Recommendations />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main``;
