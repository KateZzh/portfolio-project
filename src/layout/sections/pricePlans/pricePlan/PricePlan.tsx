import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { Button } from '../../../../components/button/Button';
import { List } from '../../../../components/list/List';

type PricePlanPropsType = {
    title: string;
    price: string;
    text: string;
};

const fullPlanItems = [
    'UI Design',
    'web development',
    'logo design',
    'seo optimization',
    'wordPress integration',
    '5 Websites',
    'unlimited user',
    '20 gB bandwith',
];

export const PricePlan = (props: PricePlanPropsType) => {
    return (
        <StyledPricePlan>
            <Title>{props.title}</Title>
            <Price>
                ${props.price} <span>/hour</span>
            </Price>
            <Text>{props.text}</Text>

            <List listItems={fullPlanItems} />

            <Button />
        </StyledPricePlan>
    );
};

const StyledPricePlan = styled.div`
    background-color: rgba(123, 128, 41, 0.421);
    max-width: 310px;
    width: 100%;
`;

const Title = styled.h3``;
const Price = styled.h2``;
const Text = styled.p``;
