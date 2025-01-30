import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { FlexWrapper } from '../../../../components/FlexWrapper';

type Props = {
    item: {
        iconId: string;
        title: string;
        directions: string;
        width: string;
        height: string;
    };
};

export const Service = ({ item }: Props) => {
    return (
        <StyledService>
            <FlexWrapper direction='column' align='center'>
                <Icon iconId={item.iconId} width={item.width} height={item.height} />
                <Title>{item.title}</Title>
                <Info>{item.directions}</Info>
            </FlexWrapper>
        </StyledService>
    );
};

const StyledService = styled.div`
    width: 100%;
    height: 100%;
    padding: 25px 10px 10px;
    background-color: ${theme.colors.secondaryBg};
    text-align: center;
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
