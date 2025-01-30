import styled, { css } from 'styled-components';
import { Header } from '../../header/Header';
import { Services } from '../myServices/Services';
import { PricePlans } from '../pricePlans/PricePlans';
import { Recommendations } from '../recommendations/Recommendations';
import { Education } from '../education/Education';
import { Portfolio } from '../portfolio/Portfolio';
import { Blog } from '../../../layout/sections/blog/Blog';
import { Contact } from '../contact/Contact';
import { Footer } from '../../footer/Footer';
import { WorkHistory } from '../workHistory/WorkHistory';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { Sidebar } from '../../sidebar/Sidebar';
import { useEffect, useState } from 'react';

export const Main = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden');
        !open && (document.body.style.overflow = 'unset');
    }, [open]);

    return (
        <StyledMain>
            <Container>
                {open && <Background onClick={handleClose} />}
                <TabletSidebarWrapper isOpen={open}>
                    <Sidebar handleClose={handleClose} />
                </TabletSidebarWrapper>

                <Header isOpen={open} handleOpen={handleOpen} />
                <Services />
                {/* <PricePlans /> */}
                <Recommendations />
                {/* <Education />
                <WorkHistory /> */}
                <Portfolio />
                {/* <Blog />
                <Contact />
                <Footer /> */}
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    padding: 0 108px 0 305px;
    width: 100%;

    @media ${theme.media.tabletXl} {
        padding: 0 108px 0 0;
    }

    @media ${theme.media.tablet} {
        padding: 0;
    }
`;

const Background = styled.div`
    background-color: ${theme.colors.font};
    opacity: 0.4;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
`;

const TabletSidebarWrapper = styled.div<{ isOpen: boolean }>`
    display: none;

    ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
            display: block;
        `}

    @media ${theme.media.mobile} {

    }
`;

