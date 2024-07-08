import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { Menu } from '../../components/menu/Menu';
import { theme } from '../../styles/Theme';

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
    background-color: ${theme.colors.secondaryBg};
    max-width: 108px;
    width: 100%;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999; */
`;
