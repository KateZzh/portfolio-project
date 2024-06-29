import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';

type ServicePropsType = {
    iconId: string;
    title: string;
    directions: string;
};

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <Icon iconId={props.iconId} width='68' height='68' />
            <h3>{props.title}</h3>
            <span>{props.directions}</span>
        </StyledService>
    );
};

const StyledService = styled.div``;
