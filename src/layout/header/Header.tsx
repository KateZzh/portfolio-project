import styled from 'styled-components';

import photo from '../../assets/images/photo.webp';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Button } from '../../components/button/Button';

export const Header = () => {
    return (
        <StyledHeader id='home'>
            <Container>
                <FlexWrapper align='center' justify='space-between' backgroundColor={theme.colors.secondaryBg}>
                    <Wrapper>
                        <Name>I’m Rayan Adlrdard </Name>
                        <MainTitle>
                            <TitleStyle>Front-end </TitleStyle>Developer
                        </MainTitle>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed
                            suspendisse nunc lectus.
                        </Description>

                        <Button title='HIRE ME' iconId='btnArrow' btnType='primary'/>
                    </Wrapper>

                    <Photo src={photo} alt='mainPhoto' />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    margin-bottom: 138px;
`;

const Wrapper = styled.div`
    max-width: 560px;
    width: 100%;
    padding-left: 60px;
`;

const Name = styled.h2`
    font-size: 48px;
`;

const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
`;

const TitleStyle = styled.span`
    font-size: 48px;
    font-weight: 700;
    color: ${theme.colors.accent};
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
