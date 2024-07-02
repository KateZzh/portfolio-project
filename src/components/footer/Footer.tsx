import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const Footer = () => {
    return (
        <StyledFooter>
            <Icon iconId='copyright' width='24' height='24' viewBox='0 0 24 24' />
            <Copyright>2021 All Rights Reserved.Ojjomedia</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 10vh;
    background-color: #77af81;
    text-align: center;
`;

const Copyright = styled.small``;
