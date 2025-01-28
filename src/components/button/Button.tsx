import styled, { css } from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';

type ButtonType = 'submit' | 'primary' | 'secondary' | 'secondaryWhite' | 'btnCV';

type Props = {
    title?: string;
    btnType?: ButtonType;
    iconId?: string;
};

export const Button = ({ title, btnType = 'primary', iconId }: Props) => {
    return (
        <StyledButton btnType={btnType}>
            {title}
            {iconId && <Icon iconId={iconId} width='16' height='16' />}
        </StyledButton>
    );
};

const StyledButton = styled.button<{ btnType: ButtonType }>`
    font-weight: 600;
    font-size: 14px;
    background-color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.secondaryBg};
    }

    ${({ btnType }) => buttonStyles[btnType]}
`;

const withIconStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const secondaryStyles = css`
    padding: 10px 40px;
    border-radius: 30px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    font-weight: 700;
    text-transform: capitalize;
`;

const buttonStyles = {
    primary: css`
        border-radius: 5px;
        padding: 16px 32px;
        font-weight: 500;
        font-size: 16px;

        ${withIconStyles}
        gap: 8px;
    `,
    btnCV: css`
        padding: 10px 0;
        text-transform: uppercase;
        width: 100%;

        ${withIconStyles}
        gap: 18px;
    `,
    submit: css`
        padding: 8px 25px;
        text-transform: uppercase;
    `,
    secondary: css`
        ${secondaryStyles}
    `,
    secondaryWhite: css`
        ${secondaryStyles}
        background-color: ${theme.colors.secondaryBg};

        &:hover {
            color: ${theme.colors.accent};
        }
    `,
};
