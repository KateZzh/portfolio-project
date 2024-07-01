import React from 'react';
import styled from 'styled-components';
import { Rating } from '../rating/Rating';
import { FlexWrapper } from '../../../../components/FlexWrapper';

type RecommendationPropsType = {
    title: string;
    text: string;
    src: string;
    name: string;
    profession: string;
};

export const Recommendation = (props: RecommendationPropsType) => {
    return (
        <StyledRecommendation>
            <Rating />

            <Title>{props.title}</Title>
            <Text>{props.text}</Text>

            <FlexWrapper>
                <Image src={props.src} />

                <div>
                    <Name>{props.name}</Name>
                    <Profession>{props.profession}</Profession>
                </div>
            </FlexWrapper>
        </StyledRecommendation>
    );
};

const StyledRecommendation = styled.div`
    max-width: 310px;
    width: 100%;
    background-color: #cf95b790;
`;
const Title = styled.h4``;

const Text = styled.p``;

const Image = styled.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
`;

const Name = styled.h4``;

const Profession = styled.span``;
