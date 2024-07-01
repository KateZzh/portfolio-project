import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { Icon } from '../icon/Icon';
import photo from '../../assets/images/photo.webp';
import { Menu } from '../menu/Menu';

const socialItems = ['facebook', 'instagram', 'twitter', 'dribbble', 'youtube']

export const Aside = () => {
    return (
        <StyledAside>
            <MainInfo>
                <Image src={photo} alt='photo' />
                <h4>Rayan Adlardard</h4>
                <span>Font-end Developer</span>
            </MainInfo>

            {/* <Menu menuItems={socialItems}/> */}
            <Social>
                <li>
                    <a href=''>
                        <Icon iconId='facebook' width='14' height='14' viewBox='0 0 14 14'/>
                    </a>
                </li>
                <li>
                    <a href=''>
                        <Icon iconId='instagram' width='14' height='14' viewBox='0 0 14 14'/>
                    </a>
                </li>
                <li>
                    <a href=''>
                        <Icon iconId='twitter' width='14' height='14' viewBox='0 0 14 14'/>
                    </a>
                </li>
                <li>
                    <a href=''>
                        <Icon iconId='dribbble' width='14' height='14' viewBox='0 0 14 14'/>
                    </a>
                </li>
                <li>
                    <a href=''>
                        <Icon iconId='youtube' width='14' height='14' viewBox='0 0 14 14'/>
                    </a>
                </li>
            </Social>


        </StyledAside>
    );
};

const StyledAside = styled.aside`
    background-color: #8787ce;
    /* max-width: 305px;
    width: 100%;  */
`;

const MainInfo = styled.div`

`;

const Social = styled.ul`
    display: flex;
    justify-content: space-between;
`;

const Image = styled.img`
    width:100%;
    height: 150px;
    object-fit: cover;
`