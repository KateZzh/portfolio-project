import './App.css';
import styled from 'styled-components';

import { FlexWrapper } from './components/FlexWrapper';
import { Main } from './layout/sections/main/Main';
import { Sidebar } from './layout/sidebar/Sidebar';
import { Nav } from './layout/nav/Nav';
import { theme } from './styles/Theme';

function App() {
    return (
        <div className='App'>
            <FlexWrapper justify='space-between'>
                <SidebarWrapper>
                    <Sidebar />
                </SidebarWrapper>
                <Main />
                <Nav />
            </FlexWrapper>
        </div>
    );
}

const SidebarWrapper = styled.div`
    @media ${theme.media.tabletXl} {
        display: none;
    }`;

export default App;
