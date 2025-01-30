import styled from 'styled-components';

import photo from '../../assets/images/photo.webp';
import headerBackground from '../../assets/images/header-background.svg';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Button } from '../../components/button/Button';
import { font } from '../../styles/Common';

type Props = {
    isOpen: boolean;
    handleOpen: () => void;
};

export const Header = ({ isOpen, handleOpen }: Props) => {
    return (
        <StyledHeader id='home'>
            <FlexWrapper justify='center' wrap='wrap' gap='20px'>
                <Wrapper>
                    <BurgerButton isOpen={isOpen} onClick={handleOpen}>
                        <span></span>
                    </BurgerButton>

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
    padding: 0 30px;

    background: linear-gradient(to right, ${theme.colors.secondaryBg}, ${theme.colors.secondaryBg}),
        url(${headerBackground});
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: cover, auto;
    background-position:
        center,
        center 30px;

    position: relative;

    @media ${theme.media.mobile} {
        & > ${FlexWrapper} {
            gap: 50px;
        }

        margin-bottom: 50px;
    }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: absolute;
    width: 40px;
    height: 25px;
    margin-top: -50px;
    display: none;

    span {
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        top: 0px;
        left: 0px;

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

    @media ${theme.media.tabletXl} {
        display: block;
    }
`;

const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
    padding-top: 92px;
    position: relative;

    @media ${theme.media.tabletXl} {
        padding-top: 100px;
    }
    @media ${theme.media.tablet} {
        padding-top: 100px;
    }
`;

const Name = styled.h2`
    font-size: 48px;
`;

const MainTitle = styled.h1`
    ${font({ size: '48px', weight: 700 })}
`;

const TitleStyle = styled.span`
    ${font({ size: '48px', weight: 700, color: theme.colors.accent })}
`;

const Description = styled.p`
    margin: 18px 0 25px;
    ${font({ size: '16px', lineHeight: 1.5, textTransform: 'capitalize' })}
    max-width: 425px;
    background-color: ${theme.colors.secondaryBg};

    @media ${theme.media.mobile} {
        margin: 80px 0 35px;
    }
`;

const Photo = styled.img`
    width: 326px;
    height: 460px;
    object-fit: cover;
`;
