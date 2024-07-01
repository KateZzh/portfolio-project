import React from 'react';
import styled from 'styled-components';
import photo from '../../assets/images/photo.webp';
import { Button } from '../../components/button/Button';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper align='center'>
                <div>
                    <Name>I’m Rayan Adlrdard </Name>
                    <MainTitle>
                        <span>Front-end </span>Developer
                    </MainTitle>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed
                        suspendisse nunc lectus.
                    </p>

                    <Button />
                </div>

                <Photo src={photo} alt='mainPhoto' />
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #a3e5a3;

    min-width: 100vh;
`;

const MainTitle = styled.h1``;

const Name = styled.h2``;

const Photo = styled.img`
    width: 326px;
    height: 460px;
    object-fit: cover;
`;
