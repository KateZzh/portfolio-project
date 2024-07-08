import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { theme } from '../../styles/Theme';

type BackgroundItems = {
    id: string;
    title: string;
    status: string;
    duration: string;
    direction: string;
    description: string;
};

type BackgroundPropsType = {
    items: BackgroundItems;
};

export const Background = ({ items }: BackgroundPropsType) => {
    return (
        <StyledBackground>
            <FlexWrapper justify='space-between' gap='20px'>
                <Wrapper>
                    <Title>{items.title}</Title>

                    <FlexWrapper align='center' gap='21px'>
                        <Status>{items.status}</Status>
                        <Duration>{items.duration}</Duration>
                    </FlexWrapper>
                </Wrapper>

                <Wrapper>
                    <Direction>{items.direction}</Direction>
                    <Description>{items.description}</Description>
                </Wrapper>
            </FlexWrapper>
        </StyledBackground>
    );
};

const StyledBackground = styled.div`
    position: relative;

    &:not(:last-child) {
        margin-bottom: 40px;
    }

    &:not(:last-child)::after {
        content: '';
        display: inline-block;
        border: 1px solid ${theme.colors.primaryBg};
        max-width: 901px;
        width: 100%;

        position: absolute;
        left: 50%;
        bottom: -19px;
        transform: translateX(-50%);
    }
`;

const Wrapper = styled.div``;

const Title = styled.h3`
    text-transform: capitalize;
    margin-bottom: 28px;
`;

const Status = styled.span`
    font-weight: 400;
    font-size: 15px;
    line-height: 1.6;
    text-transform: capitalize;
    color: ${theme.colors.font};
`;

const Direction = styled.h3`
    text-transform: capitalize;
    margin-bottom: 28px;
`;

const Duration = styled.span`
    display: inline-block;
    width: 110px;
    height: 18px;
    padding-top: 4px;
    background-color: ${theme.colors.accent};
    text-align: center;
    border-radius: 1px;

    color: #fff;
    font-weight: 400;
    font-size: 10px;
`;

const Description = styled.p`
    max-width: 536px;
    width: 100%;
    line-height: 1.6;
    text-transform: capitalize;
`;
