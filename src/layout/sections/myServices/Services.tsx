import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Service } from './myService/Service';
import { theme } from '../../../styles/Theme';

const servicesItems = [
    { id: 1, iconId: 'coding', width: '68', height: '68', title: 'Web Development', directions: 'Blog, E-Commerce' },
    {
        id: 2,
        iconId: 'illustration',
        width: '68',
        height: '68',
        title: 'UI/UX Design',
        directions: 'Mobile App, Website Design',
    },
    {
        id: 3,
        iconId: 'microphone',
        width: '74',
        height: '74',
        title: 'Sound Design',
        directions: 'Voice Over, Beat Making',
    },
    {
        id: 4,
        iconId: 'gameDevelopment',
        width: '74',
        height: '74',
        title: 'Game Design',
        directions: 'Character Design, Props & Objects',
    },
    {
        id: 5,
        iconId: 'photographer',
        width: '78',
        height: '78',
        title: 'Photography',
        directions: 'Portrait, Product Photography',
    },
    {
        id: 6,
        iconId: 'ad-pop-up',
        width: '74',
        height: '74',
        title: 'Something else...',
        directions: 'Something else...',
    },
];

export const Services = () => {
    return (
        <StyledServices id='services'>
            <SectionTitle
                title='My Services'
                description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
            />

            <GridWrapper>
                {servicesItems.map((item) => (
                    <Service key={item.id} item={item} />
                ))}
            </GridWrapper>
        </StyledServices>
    );
};

const StyledServices = styled.section``;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(260px, 310px), 1fr));
    grid-auto-rows: minmax(225px, auto);
    justify-content: center;
    gap: 20px;

    @media ${theme.media.mobile} {
        grid-template-columns: repeat(auto-fit, 310px);
    }
`;
