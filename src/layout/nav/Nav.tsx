import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { Menu } from '../../components/menu/Menu';
import { theme } from '../../styles/Theme';

export type Item = {
    id: number;
    link: string;
    title: string;
};

const items: Item[] = [
    { id: 1, link: 'home', title: 'Home' },
    { id: 2, link: 'services', title: 'Services' },
    { id: 3, link: 'education', title: 'Education' },
    { id: 4, link: 'portfolio', title: 'Work' },
    { id: 5, link: 'blog', title: 'Blog' },
    { id: 6, link: 'contact', title: 'Contact' },
];

export const Nav = () => {
    return (
        <StyledNav>
            <Icon iconId='contrast' width='30' height='30' />
            <Menu items={items} />
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    background-color: ${theme.colors.secondaryBg};
    max-width: 108px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    padding: 50px 0;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
`;
