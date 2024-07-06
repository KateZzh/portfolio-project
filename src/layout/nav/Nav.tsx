import React from 'react';
import styled from 'styled-components';


import { Icon } from '../../components/icon/Icon';
import { Menu } from '../../components/menu/Menu';

const items = ['home', 'services', 'education', 'portfolio', 'blog', 'contact'];

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
