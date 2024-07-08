import styled from 'styled-components';

import photo from '../../assets/images/photo.webp';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Button } from '../../components/button/Button';

export const Header = () => {
    return (
        <StyledHeader id="home">
            <Container>
                <FlexWrapper align='center' justify='space-between'>
                    <Wrapper>
                        <Name>I’m Rayan Adlrdard </Name>
                        <MainTitle>
                            <span>Front-end </span>Developer
                        </MainTitle>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed
                            suspendisse nunc lectus.
                        </Description>

                        <Button title='HIRE ME' />
                    </Wrapper>

                    <Photo src={photo} alt='mainPhoto' />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.secondaryBg};
    margin-bottom: 138px;
`;

const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
`;

const Name = styled.h2`
    font-size: 48px;
`;

const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;

    span {
        color: ${theme.colors.accent};
    }
`;

const Description = styled.p`
    margin: 18px 0 25px;
    font-size: 16px;
    line-height: 1.5;
    text-transform: capitalize;
    max-width: 425px;
`;

const Photo = styled.img`
    width: 326px;
    height: 460px;
    object-fit: cover;
`;
