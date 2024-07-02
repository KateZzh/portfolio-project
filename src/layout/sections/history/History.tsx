import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const History = () => {
    return (
        <StyledHistory>
            <SectionTitle
                title='Education'
                description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
            />

            <Details>
                <Detail>
                    <FlexWrapper justify='space-between'>
                        <div>
                            <Title>University of Toronto</Title>
                            <Status>Student</Status>
                            <Duration>Jan 1016 - Dec 2021</Duration>
                        </div>

                        <div>
                            <Direction>Certificate of web training</Direction>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet
                                porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.
                                Molestie risus enim neque eget dui.
                            </Description>
                        </div>
                    </FlexWrapper>
                </Detail>

                <Detail>
                    <FlexWrapper justify='space-between'>
                        <div>
                            <Title>University of Toronto</Title>
                            <Status>Student</Status>
                            <Duration>Jan 1016 - Dec 2021</Duration>
                        </div>

                        <div>
                            <Direction>Certificate of web training</Direction>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet
                                porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.
                                Molestie risus enim neque eget dui.
                            </Description>
                        </div>
                    </FlexWrapper>
                </Detail>
                <Detail>
                    <FlexWrapper justify='space-between'>
                        <div>
                            <Title>University of Toronto</Title>
                            <Status>Student</Status>
                            <Duration>Jan 1016 - Dec 2021</Duration>
                        </div>

                        <div>
                            <Direction>Certificate of web training</Direction>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet
                                porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.
                                Molestie risus enim neque eget dui.
                            </Description>
                        </div>
                    </FlexWrapper>
                </Detail>
            </Details>
        </StyledHistory>
    );
};

const StyledHistory = styled.section`
    background-color: #9fdea8;
    min-height: 50vh;
`;

const Details = styled.div`
    border: 1px solid red;
`;

const Detail = styled.div`
    div {
        min-width: 50px;
        width: 100%;
    }
`;

const Title = styled.h3``;
const Status = styled.span``;
const Duration = styled.span`
    background-color: #ffb400;
`;
const Direction = styled.h3``;
const Description = styled.p``;
