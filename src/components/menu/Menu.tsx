import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return (
                        <li key={index}>
                            <a href='#'>
                                <Icon iconId={item} />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        flex-direction: column;
        gap: 43px;
    }
`;
