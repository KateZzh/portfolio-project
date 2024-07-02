import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Header } from '../../header/Header';
import { Services } from '../services/Services';
import { PricePlans } from '../pricePlans/PricePlans';
import { Recommendations } from '../recommendations/Recommendations';
import { History } from '../history/History';
import { Portfolio } from '../../../components/portfolio/Portfolio';
import { Blog } from '../../../components/blog/Blog';
import { Contact } from '../../../components/contact/Contact';
import { Footer } from '../../../components/footer/Footer';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction='column'>
                <Header />
                <Services />
                <PricePlans />
                <Recommendations />
                <History/>
                <History/>
                <Portfolio/>
                <Blog/>
                <Contact/>
                
                <Footer/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main``;
