import styled, { css } from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';

type ButtonPropsType = {
    title?: string;
    btnType?: 'submit' | 'primary' | 'secondary' | 'secondaryWhite' | 'btnCV';
    iconId?: string;
};

export const Button = ({ title, btnType, iconId }: ButtonPropsType) => {
    return (
        <StyledButton btnType={btnType}>
            {title}
            {iconId && <Icon iconId={iconId} width='16' height='16' />}
        </StyledButton>
    );
};

const StyledButton = styled.button<ButtonPropsType>`
    font-weight: 600;
    font-size: 14px;
    background-color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.secondaryBg};
    }

    ${(props) =>
        props.btnType === 'primary' &&
        css<ButtonPropsType>`
            border-radius: 5px;
            padding: 16px 32px;
            font-weight: 500;
            font-size: 16px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        `}

    ${(props) =>
        props.btnType === 'btnCV' &&
        css<ButtonPropsType>`
            padding: 10px 0;
            text-transform: uppercase;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 18px;
        `}

    ${(props) =>
        props.btnType === 'submit' &&
        css<ButtonPropsType>`
            padding: 8px 25px;
            text-transform: uppercase;
        `}

    ${(props) =>
        props.btnType === 'secondary' &&
        css<ButtonPropsType>`
            padding: 10px 40px;
            border-radius: 30px;
            box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);

            font-weight: 700;
            text-transform: capitalize;
        `}

    ${(props) =>
        props.btnType === 'secondaryWhite' &&
        css<ButtonPropsType>`
            padding: 10px 40px;
            border-radius: 30px;
            box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
            background-color: ${theme.colors.secondaryBg};

            font-weight: 700;
            text-transform: capitalize;

            &:hover {
                color: ${theme.colors.accent};
            }
        `}
`;
