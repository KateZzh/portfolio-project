import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';
import { Item } from '../../layout/nav/Nav';

type Props = {
    items: Item[];
};

export const Menu = ({ items }: Props) => {
    return (
        <StyledMenu>
            <ul>
                {items.map((item) => (
                    <MenuItem key={item.id} title={item.title}>
                        <a href={`#${item.link}`}>
                            <Icon iconId={item.link} />
                        </a>
                    </MenuItem>
                ))}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 42px;
    }
`;

const MenuItem = styled.li<{ title: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.fontSecondary};
    cursor: pointer;

    position: relative;

    & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        /* width: 100%; */
        height: 100%;
        color: ${theme.colors.fontSecondary};
    }

    &:hover {
        background-color: ${theme.colors.accent};

        & > a {
            color: ${theme.colors.font};
        }

        &::before {
            content: '${(props) => props.title || ''}';
            display: inline-block;
            width: 65px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            border-radius: 2px;
            background-color: ${theme.colors.font};
            color: ${theme.colors.secondaryBg};
            font-weight: 500;
            font-size: 12px;

            position: absolute;
            top: -32px;
            left: 50%;
            transform: translate(-50%);
        }

        &::after {
            content: '';
            width: 0;
            height: 0;

            position: absolute;
            top: -16px;
            left: 50%;
            transform: translate(-50%);

            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 14px solid ${theme.colors.font};
            z-index: 9999;
        }
    }
`;
