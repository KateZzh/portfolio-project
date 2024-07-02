import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { InfoForm } from './infoForm/InfoForm';
import { ContactInfo } from './contactInfo/ContactInfo';
import location from '../../assets/images/location.webp';
import { Icon } from '../icon/Icon';

export const Contact = () => {
    return (
        <StyledContact>
            <FlexWrapper justify='space-between'>
                <InfoForm />
                <ContactInfo />
            </FlexWrapper>

            <Location src={location}></Location>

            <FlexWrapper wrap='wrap' justify='space-between'>
                <Icon iconId='logo1' width='140' height='140' viewBox='0 0 140 140' />
                <Icon iconId='logo2' width='140' height='140' viewBox='0 0 140 140' />
                <Icon iconId='logo3' width='140' height='140' viewBox='0 0 140 140' />
                <Icon iconId='logo4' width='140' height='140' viewBox='0 0 140 140' />
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    background-color: #825b75;
    min-height: 50vh;
`;

const Location = styled.img`
    max-height: 300px;
    width: 100%;
    object-fit: cover;
`;
