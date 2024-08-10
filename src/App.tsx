import './App.css';
import styled from 'styled-components';

import { FlexWrapper } from './components/FlexWrapper';
import { Main } from './layout/sections/main/Main';
import { Sidebar } from './layout/sidebar/Sidebar';
import { Nav } from './layout/nav/Nav';

function App() {
    return (
        <div className='App'>
            <FlexWrapper justify='space-between'>
                <Sidebar />
                <Main />
                <Nav />
            </FlexWrapper>
        </div>
    );
}

export default App;
