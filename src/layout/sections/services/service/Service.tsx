import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { FlexWrapper } from '../../../../components/FlexWrapper';

type ServicePropsType = {
    iconId: string;
    title: string;
    directions: string;
    width: string;
    height: string;
    // serviceType: 'primary' | 'secondary'
};

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <FlexWrapper direction='column' align='center'>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`} />
                <Title>{props.title}</Title>
                <Info>{props.directions}</Info>
            </FlexWrapper>
        </StyledService>
    );
};

const StyledService = styled.div`
    width: 310px;
    height: 225px;
    padding: 30px 0;
    background-color: ${theme.colors.secondaryBg};
`;

const Title = styled.h3`
    margin: 25px 0 15px;
    font-weight: 500;
    font-size: 18px;
    text-transform: capitalize;
    color: ${theme.colors.font};
`;

const Info = styled.span`
    font-weight: 400;
    font-size: 15px;
    line-height: 1.6;
    text-transform: capitalize;
    color: ${theme.colors.fontSecondary};
`;
