import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/button/Button';
import { theme } from '../../../../styles/Theme';

export const InfoForm = () => {
    return (
        <StyledInfoForm>
            <Title>Leave us your info</Title>

            <StyledForm>
                <Label>
                    <Name>Your Full Name ( Required)</Name>
                    <Field />
                </Label>

                <Label>
                    <Name>Your Email ( Required)</Name>
                    <Field id='email' />
                </Label>

                <Label>
                    <Name>Subject</Name>
                    <Field id='subject' />
                </Label>

                <Label>
                    <Name>Your Message</Name>
                    <Field as={'textarea'} id='message' />
                </Label>

                <Button title='send message' type='submit' />
            </StyledForm>
        </StyledInfoForm>
    );
};

const StyledInfoForm = styled.div`
    max-width: 570px;
    width: 100%;
`;

const Title = styled.h2`
    margin-bottom: 50px;
    text-transform: capitalize;
`;

const StyledForm = styled.form`
    background-color: ${theme.colors.secondaryBg};
    max-width: 570px;
    padding: 25px 24px 25px 25px;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
`;

const Name = styled.span`
    font-weight: 500;
    font-size: 18px;
    text-transform: capitalize;
    color: ${theme.colors.fontSecondary};
    margin-bottom: 8px;
`;

const Field = styled.input`
    height: 50px;
    background: ${theme.colors.primaryBg};
    border: none;
    margin-bottom: 25px;
`;
