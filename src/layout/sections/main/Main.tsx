import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Header } from '../../header/Header';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction='column'>
                <Header />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main``;
