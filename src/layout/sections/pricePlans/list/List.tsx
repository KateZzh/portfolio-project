import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { planItemsType } from '../pricePlan/PricePlan';
import { theme } from '../../../../styles/Theme';

export const List = ({ listItems }: { listItems: planItemsType[] }) => {
    return (
        <StyledList>
            {listItems.map((el, index) => {
                return (
                    <ListItem key={index} flag={el.isAllowed}>
                        <Icon iconId={el.isAllowed ? 'check' : 'close'} width='24' height='24' />
                        {el.title}
                    </ListItem>
                );
            })}
        </StyledList>
    );
};

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ListItem = styled.li<{ flag: boolean }>`
    display: flex;
    align-items: center;
    gap: 15px;

    font-weight: 400;
    font-size: 15px;
    line-height: 1.6;
    text-transform: capitalize;

    color: ${(props) => (props.flag ? theme.colors.font : theme.colors.fontSecondary)};
`;
