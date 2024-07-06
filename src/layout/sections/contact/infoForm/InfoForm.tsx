import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/button/Button';

export const InfoForm = () => {
    return (
        <StyledInfoForm>
            <Title>Leave us your info</Title>

            <StyledForm>
                <Label>
                    Your Full Name ( Required)
                    <Field />
                </Label>

                <Label>
                    Your Email ( Required)
                    <Field id='email' />
                </Label>

                <Label>
                    Subject
                    <Field id='subject' />
                </Label>

                <Label>
                    Your Message
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

const StyledForm = styled.form`
    max-width: 570px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Title = styled.h2``;
const Label = styled.label``;
const Field = styled.input``;
