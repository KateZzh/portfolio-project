import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';

export const Button = (props: { title: string; type?: 'submit' | 'button' }) => {
    return (
        <StyledButton type={props.type}>
            {props.title} <Icon iconId='btnArrow' width='16' height='16' />
        </StyledButton>
    );
};

const StyledButton = styled.button`
    width: 159px;
    height: 35px;

    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: ${theme.colors.font};
    background-color: ${theme.colors.accent};
`;
