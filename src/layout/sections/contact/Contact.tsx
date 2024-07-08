import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { InfoForm } from './infoForm/InfoForm';
import { ContactInfo } from './contactInfo/ContactInfo';
import { Icon } from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';

const itemsLogos = [
    { id: 1, title: 'logo1' },
    { id: 2, title: 'logo2' },
    { id: 3, title: 'logo3' },
    { id: 4, title: 'logo4' },
];

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper justify='space-between' gap='30px'>
                    <InfoForm />
                    <ContactInfo />
                </FlexWrapper>

                <Map
                    // src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.99641074073!2d-122.52000121956848!3d37.757807037626925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z0KHQsNC9LdCk0YDQsNC90YbQuNGB0LrQviwg0JrQsNC70LjRhNC-0YDQvdC40Y8sINCh0KjQkA!5e0!3m2!1sru!2sby!4v1720275684422!5m2!1sru!2sby'
                    width='100%'
                    height='300'
                    loading='lazy'
                ></Map>

                <FlexWrapper wrap='wrap' justify='space-between'>
                    {itemsLogos.map((item) => (
                        <Icon key={item.id} iconId={item.title} width='140' height='140' viewBox='0 0 140 140' />
                    ))}
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section``;

const Map = styled.iframe`
    max-height: 300px;
    width: 100%;
    border: 0;
    margin: 70px 0;
`;
