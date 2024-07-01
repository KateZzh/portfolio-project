import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { Menu } from '../menu/Menu';

const items = ['home', 'services', 'aducation', 'portfolio', 'blog', 'contact'];

export const Nav = () => {
    return (
        <StyledNav>
            <Icon iconId='contrast' width='30' height='30' viewBox='0 0 30 30' />
            <Menu menuItems={items} />
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    background-color: #8787ce;
`;
