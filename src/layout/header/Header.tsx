import styled, { css } from 'styled-components';

import photo from '../../assets/images/photo.webp';
import headerBackground from '../../assets/images/header-background.svg';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Button } from '../../components/button/Button';

type Props = {
    isOpen: boolean;
    handleOpen: () => void
};

export const Header = ({ isOpen, handleOpen }: Props) => {
    return (
        <StyledHeader id='home'>
            <BurgerButton isOpen={isOpen} onClick={handleOpen}>
                <span></span>
            </BurgerButton>

            <FlexWrapper align='center' justify='space-between'>
                <Wrapper>
                    <Name>I’m Rayan Adlrdard </Name>
                    <MainTitle>
                        <TitleStyle>Front-end </TitleStyle>Developer
                    </MainTitle>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
                        Natoque rutrum semper sed suspendisse nunc lectus.
                    </Description>

                    <Button title='HIRE ME' iconId='btnArrow' btnType='primary' />
                </Wrapper>

                <Photo src={photo} alt='mainPhoto' />
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    margin-bottom: 100px;
    background: linear-gradient(to right, ${theme.colors.secondaryBg}, ${theme.colors.secondaryBg}),
        url(${headerBackground});
    background-blend-mode: multiply;
    background-size: 100% 100% cover;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: absolute;
    width: 40px;
    height: 25px;
    margin-top: 20px;
    margin-left: 60px;
    display: none;

    /* ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
            display: block;
        `} */

    @media ${theme.media.tabletXl} {
        display: block;
    }

    span {
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        top: 10px;
        right: 5px;

        &::before {
            content: '';
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;
            transform: translateY(-6px);
        }

        &::after {
            content: '';
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;
            transform: translateY(6px);
        }
    }
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
    background-color: ${theme.colors.secondaryBg};
`;

const Photo = styled.img`
    width: 326px;
    height: 460px;
    object-fit: cover;
`;
