import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { Icon } from '../icon/Icon';
import photo from '../../assets/images/photo.webp';

export const Aside = () => {
    return (
        <StyledAside>
            <MainInfo>
                <img src={photo} alt='photo' />
                <h4>Rayan Adlardard</h4>
                <span>Font-end Developer</span>
            </MainInfo>

            <Social>
                <li>
                    <a href=''>
                        <Icon iconId='facebook' width='14' height='14' />
                    </a>
                </li>
                <li>
                    <a href=''>
                        <Icon iconId='instagram' width='14' height='14' />
                    </a>
                </li>
                <li>
                    <a href=''>
                        <Icon iconId='twitter' width='14' height='14' />
                    </a>
                </li>
                <li>
                    <a href=''>
                        <Icon iconId='dribbble' width='14' height='14' />
                    </a>
                </li>
                <li>
                    <a href=''>
                        <Icon iconId='youtube' width='14' height='14' />
                    </a>
                </li>
            </Social>
        </StyledAside>
    );
};

const StyledAside = styled.aside`
    background-color: #8787ce;
`;

const MainInfo = styled.div`
    img {
        width: 150px;
        height: 150px;
    }
`;

const Social = styled.ul`
    display: flex;
    justify-content: space-between;
`;
