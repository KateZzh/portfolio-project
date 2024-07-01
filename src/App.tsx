import './App.css';
import styled from 'styled-components';
import { Aside } from './components/aside/Aside';
import { FlexWrapper } from './components/FlexWrapper';
import { Main } from './layout/sections/main/Main';
import { Nav } from './components/nav/Nav';

function App() {
    return (
        <div className='App'>
            <FlexWrapper>
                <Aside />
                <Main />
                <Nav />
            </FlexWrapper>
        </div>
    );
}

export default App;
