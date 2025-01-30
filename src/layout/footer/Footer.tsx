import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper
                justify='center'
                align='center'
                gap='15px'
                backgroundColor={theme.colors.secondaryBg}
                padding='18px 0'
            >
                <Icon iconId='copyright' width='24' height='24' />
                <Copyright>2021 All Rights Reserved.Ojjomedia</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding-top: 35px;
`;

const Copyright = styled.small`
    font-weight: 400;
    font-size: 15px;
    line-height: 1.6;
    text-transform: capitalize;
`;
