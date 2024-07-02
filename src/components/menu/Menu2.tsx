import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const Menu2 = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu2>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return (
                        <li key={index}>
                            <a href='#'>{item}</a>
                        </li>
                    );
                })}
            </ul>

            {/* {props.typeMenu === 'secondary' ? (
                <ul>
                    {props.menuItems.map((item: string, index: number) => {
                        return (
                            <li key={index}>
                                <a href='#'>{item}</a>
                            </li>
                        );
                    })}
                </ul>
            ) : (
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
            )} */}
        </StyledMenu2>
    );
};

const StyledMenu2 = styled.nav`
    ul {
        display: flex;
justify-content: center;
        gap: 43px;
    }
`;
