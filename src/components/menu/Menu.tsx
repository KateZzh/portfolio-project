import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { FlexWrapper } from '../FlexWrapper';

export const Menu = () => {
    return (
        <StyledMenu>
                <Icon iconId='contrast' width='30' height='30' viewBox='0 0 30 30' />

                <ul>
                    <li>
                        <a href=''>
                            <Icon iconId='home' />
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <Icon iconId='services' />
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <Icon iconId='aducation' />
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <Icon iconId='portfolio' />
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <Icon iconId='blog' />
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <Icon iconId='contact' />
                        </a>
                    </li>
                </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    background-color: pink;

    ul {
        display: flex;
        flex-direction: column;
        gap: 43px;
    }
`;
