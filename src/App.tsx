import './App.css';
import styled from 'styled-components';

import { FlexWrapper } from './components/FlexWrapper';
import { Main } from './layout/sections/main/Main';
import { Aside } from './layout/aside/Aside';
import { Nav } from './layout/nav/Nav';

function App() {
    return (
        <div className='App'>
            <FlexWrapper justify='space-between'>
                <Aside />
                <Main />
                <Nav />
            </FlexWrapper>
        </div>
    );
}

export default App;
