import './App.css';
import styled from 'styled-components';
import { Menu } from './components/menu/Menu';
import { Aside } from './components/aside/Aside';
import { FlexWrapper } from './components/FlexWrapper';
import { Main } from './layout/sections/main/Main';

function App() {
    return (
        <div className='App'>
            <FlexWrapper>
                <Aside />
                <Main />
                <Menu />
            </FlexWrapper>
        </div>
    );
}

export default App;
