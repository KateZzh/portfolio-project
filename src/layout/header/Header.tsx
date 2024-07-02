import React from 'react';
import styled from 'styled-components';
import photo from '../../assets/images/photo.webp';
import { Button } from '../../components/button/Button';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
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

                        <Button title='HIRE ME' />
                    </div>

                    <Photo src={photo} alt='mainPhoto' />
                </FlexWrapper>
            </Container>
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
