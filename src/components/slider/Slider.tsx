import React from 'react';
import styled from 'styled-components';
import { Rating } from '../../layout/sections/recommendations/rating/Rating';
import photo1 from '../../assets/images/recommendation-1.webp';
import photo2 from '../../assets/images/recommendation-2.webp';
import photo3 from '../../assets/images/recommendation-3.webp';
import { FlexWrapper } from '../FlexWrapper';

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Rating />

                    <Title>Great Quality!</Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec
                        amet....
                    </Text>

                    <FlexWrapper>
                        <Image src={photo1} />

                        <div>
                            <Name>Tiana Philips</Name>
                            <Profession>Photographer</Profession>
                        </div>
                    </FlexWrapper>
                </Slide>

                <Slide>
                    <Rating />

                    <Title>Great Quality!</Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec
                        amet....
                    </Text>

                    <FlexWrapper>
                        <Image src={photo1} />

                        <div>
                            <Name>Tiana Philips</Name>
                            <Profession>Photographer</Profession>
                        </div>
                    </FlexWrapper>
                </Slide>

                <Slide>
                    <Rating />

                    <Title>Great Quality!</Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec
                        amet....
                    </Text>

                    <FlexWrapper>
                        <Image src={photo1} />

                        <div>
                            <Name>Tiana Philips</Name>
                            <Profession>Photographer</Profession>
                        </div>
                    </FlexWrapper>
                </Slide>
            </FlexWrapper>

            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Slide = styled.div`
    max-width: 310px;
    width: 100%;
    border: 1px solid red;
`;

const Title = styled.h3``;

const Text = styled.p``;

const Image = styled.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
`;

const Name = styled.h3``;

const Profession = styled.span``;

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        background-color: #ffb400;
        border-radius: 100%;
    }
`;
