import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { PricePlan } from './pricePlan/PricePlan';
import { Container } from '../../../components/Container';

const priceCards = [
    {
        id: '1',
        type: 'unpopular',
        title: 'silver',
        price: '0.00',
        text: 'For most businesses that want to optimize web queries',
        planItems: [
            { title: 'UI Design', isAllowed: true },
            { title: 'web development', isAllowed: true },
            { title: 'logo design', isAllowed: false },
            { title: 'seo optimization', isAllowed: false },
            { title: 'wordPress integration', isAllowed: false },
            { title: '5 Websites', isAllowed: false },
            { title: 'unlimited user', isAllowed: false },
            { title: '20 gB bandwith', isAllowed: false },
        ],
    },
    {
        id: '2',
        type: 'popular',
        title: 'gold',
        price: '50.00',
        text: 'For most businesses that want to optimize web queries',
        planItems: [
            { title: 'UI Design', isAllowed: true },
            { title: 'web development', isAllowed: true },
            { title: 'logo design', isAllowed: true },
            { title: 'seo optimization', isAllowed: true },
            { title: 'wordPress integration', isAllowed: false },
            { title: '5 Websites', isAllowed: false },
            { title: 'unlimited user', isAllowed: false },
            { title: '20 gB bandwith', isAllowed: false },
        ],
    },
    {
        id: '3',
        type: 'unpopular',
        title: 'dimond',
        price: '80.00',
        text: 'For most businesses that want to optimize web queries',
        planItems: [
            { title: 'UI Design', isAllowed: true },
            { title: 'web development', isAllowed: true },
            { title: 'logo design', isAllowed: true },
            { title: 'seo optimization', isAllowed: true },
            { title: 'wordPress integration', isAllowed: true },
            { title: '5 Websites', isAllowed: true },
            { title: 'unlimited user', isAllowed: true },
            { title: '20 gB bandwith', isAllowed: true },
        ],
    },
];

export const PricePlans = () => {
    return (
        <StyledPrice>
            <Container>
                <SectionTitle
                    title='Price plans'
                    description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
                />

                <FlexWrapper wrap='wrap' justify='space-between'>
                    {priceCards.map((el) => (
                        <PricePlan key={el.id} priceCard={el} />
                    ))}
                </FlexWrapper>
            </Container>
        </StyledPrice>
    );
};

const StyledPrice = styled.section``;
