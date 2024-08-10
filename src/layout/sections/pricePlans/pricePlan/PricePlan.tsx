import styled from 'styled-components';
import { Button } from '../../../../components/button/Button';
import { List } from '../list/List';
import { theme } from '../../../../styles/Theme';

export type planItemsType = {
    title: string;
    isAllowed: boolean;
};

type priceCardPropsType = {
    id: string;
    type: string;
    title: string;
    price: string;
    text: string;
    planItems: planItemsType[];
};

export const PricePlan = ({ priceCard }: { priceCard: priceCardPropsType }) => {
    return (
        <StyledPricePlan type={priceCard.type}>
            {priceCard.type === 'popular' ? <SpecialHeadline>most popular</SpecialHeadline> : null}

            <Title>{priceCard.title}</Title>

            <PriceWrapper>
                <Price>
                    ${priceCard.price} <Period>/hour</Period>
                </Price>
                <Text>{priceCard.text}</Text>
            </PriceWrapper>

            <List listItems={priceCard.planItems} />

            <Button title='ORDER NOW' btnType={priceCard.type === 'popular' ? 'secondary' : 'secondaryWhite'}/>
        </StyledPricePlan>
    );
};

const StyledPricePlan = styled.div<{ type: string }>`
    background-color: ${theme.colors.secondaryBg};
    max-width: 310px;
    width: 100%;
    padding: 54px 30px 25px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    position: relative;

    & > button {
        margin: 0 auto;
    }
`;

const SpecialHeadline = styled.span`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    min-height: 30px;
    background-color: ${theme.colors.accent};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    line-height: 1.6;
    text-transform: capitalize;
`;

const Title = styled.h3`
    font-weight: 600;
    font-size: 24px;
    text-transform: capitalize;
    text-align: center;
`;

const PriceWrapper = styled.div`
    text-align: center;
`;

const Price = styled.span`
    font-weight: 700;
    font-size: 32px;
    text-transform: capitalize;
    color: ${theme.colors.font};
    padding-bottom: 8px;
`;

const Period = styled.span`
    font-weight: 400;
    font-size: 15px;
    line-height: 1.6;
    text-transform: capitalize;
    color: ${theme.colors.font};
`;

const Text = styled.p`
    line-height: 1.6;
    text-transform: capitalize;
    text-align: center;
`;
