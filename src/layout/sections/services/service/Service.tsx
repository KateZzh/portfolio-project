import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';

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
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`} />
            <h3>{props.title}</h3>
            <span>{props.directions}</span>
        </StyledService>
    );
};

const StyledService = styled.div`
    width: 30%;
    margin: 10px;
    background-color: #d58c8c7f;
    border: 1px solid red;
`
