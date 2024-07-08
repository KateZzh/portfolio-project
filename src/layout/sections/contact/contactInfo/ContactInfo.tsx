import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';

type contactCardItem = {
    id: string;
    name: string;
    info: string;
};

const contactCardItems1 = [
    { id: '1', name: 'Country', info: 'Bangladesh' },
    { id: '2', name: 'City', info: 'Dhaka' },
    { id: '3', name: 'Streat', info: '35 vhatara, Badda' },
];

const contactCardItems2 = [
    { id: '1', name: 'Email', info: 'youremail@gmail.com' },
    { id: '2', name: 'Skype', info: '@yourusername' },
    { id: '3', name: 'Telegram', info: 'yourusername' },
];

const contactCardItems3 = [
    { id: '1', name: 'Support services', info: '15369' },
    { id: '2', name: 'Office', info: '+58 (021)356 587 235' },
    { id: '3', name: 'Personal', info: '+58 (021)356 587 235' },
];

export const ContactInfo = () => {
    return (
        <StyledContactInfo>
            <Title>Contact information</Title>

            <FlexWrapper direction='column' gap='18px'>
                <ContactCard iconId='location' contactCardItems={contactCardItems1} />
                <ContactCard iconId='mail' contactCardItems={contactCardItems2} />
                <ContactCard iconId='mobile' contactCardItems={contactCardItems3} />
            </FlexWrapper>
        </StyledContactInfo>
    );
};

const ContactCard = (props: { iconId: string; contactCardItems: contactCardItem[] }) => {
    return (
        <StyledContactCard>
            <IconWrapper>
                <Icon iconId={props.iconId} />
            </IconWrapper>

            <FlexWrapper direction='column' gap='16px'>
                {props.contactCardItems.map((item) => (
                    <FlexWrapper justify='space-between' key={item.id}>
                        <Name>{item.name}:</Name>
                        <Info>{item.info}</Info>
                    </FlexWrapper>
                ))}
            </FlexWrapper>
        </StyledContactCard>
    );
};

const StyledContactInfo = styled.div`
    max-width: 370px;
    width: 100%;
`;
const Title = styled.h2`
    margin-bottom: 50px;
    text-transform: capitalize;
`;

const StyledContactCard = styled.div`
    background-color: ${theme.colors.secondaryBg};
    height: 210px;
    padding: 36px 25px 10px;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    position: relative;
    z-index: 0;

    &::before {
        content: '';
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: ${theme.colors.accent};
        transform: translate(-50%, -50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
        z-index: -1;
    }
`;

const Name = styled.span`
    font-weight: 500;
    font-size: 18px;
    text-transform: capitalize;
    color: ${theme.colors.fontSecondary};
`;

const Info = styled.span`
    font-weight: 400;
    font-size: 15px;
    line-height: 1.6;
    text-transform: capitalize;
    text-align: right;
    color: ${theme.colors.fontSecondary};
`;
