import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../FlexWrapper';
import { Icon } from '../../icon/Icon';

export const ContactInfo = () => {
    return (
        <StyledContactInfo>
            <Title>Contact information</Title>

            <FlexWrapper direction='column'>
                <ContactCard>
                  <Icon iconId='location'/>

                  <FlexWrapper justify='space-between'>
                    <Name>Country:</Name>
                    <Info>Bangladesh</Info>
                  </FlexWrapper>

                  <FlexWrapper justify='space-between'>
                    <Name>City:</Name>
                    <Info>Dhaka</Info>
                  </FlexWrapper>
                  
                  <FlexWrapper justify='space-between'>
                    <Name>Streat:</Name>
                    <Info>35 vhatara, Badda</Info>
                  </FlexWrapper>
                </ContactCard>

                <ContactCard>
                  <Icon iconId='mail'/>

                  <FlexWrapper justify='space-between'>
                    <Name>Email:</Name>
                    <Info>youremail@gmail.com</Info>
                  </FlexWrapper>

                  <FlexWrapper justify='space-between'>
                    <Name>Skype:</Name>
                    <Info>@yourusername</Info>
                  </FlexWrapper>

                  <FlexWrapper justify='space-between'>
                    <Name>Telegram:</Name>
                    <Info>@yourusername</Info>
                  </FlexWrapper>
                </ContactCard>

                <ContactCard>
                  <Icon iconId='mobile'/>

                  <FlexWrapper justify='space-between'>
                    <Name>Support services:</Name>
                    <Info>15369</Info>
                  </FlexWrapper>

                  <FlexWrapper justify='space-between'>
                    <Name>Office:</Name>
                    <Info>+58 (021)356 587 235</Info>
                  </FlexWrapper>

                  <FlexWrapper justify='space-between'>
                    <Name>Personal:</Name>
                    <Info>+58 (021)356 587 235</Info>
                  </FlexWrapper>
                </ContactCard>
            </FlexWrapper>
        </StyledContactInfo>
    );
};

const StyledContactInfo = styled.div`
    max-width: 370px;
    width: 100%;
`;
const Title = styled.h2``;
const ContactCard = styled.div``;
const Name = styled.span``;
const Info = styled.span``;
