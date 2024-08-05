import styled from 'styled-components';
import { Button } from '../../../../components/button/Button';
import { theme } from '../../../../styles/Theme';

export const InfoForm = () => {
    return (
        <StyledInfoForm>
            <Title>Leave us your info</Title>

            <StyledForm>
                <Label>
                    Your Full Name (Required)
                    <Field />
                </Label>

                <Label>
                    Your Email (Required)
                    <Field />
                </Label>

                <Label>
                    Subject
                    <Field />
                </Label>

                <Label>
                    Your Message
                    <Field as={'textarea'} />
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
    display: flex;
    flex-direction: column;
    gap: 25px;

    textarea {
        resize: none;
        height: 210px;
        vertical-align: bottom;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 500;
    font-size: 18px;
    text-transform: capitalize;
    color: ${theme.colors.fontSecondary};
`;

const Field = styled.input`
    width: 100%;
    height: 50px;
    background-color: ${theme.colors.primaryBg};
    border: none;
    padding: 5px 7px;
    margin-top: 8px;
    font:
        400 20px Inter,
        sans-serif;

    &:focus-visible {
        outline: 1px solid ${theme.colors.primaryBg};
    }
`;
