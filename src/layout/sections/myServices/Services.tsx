import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Service } from './myService/Service';
import { Container } from '../../../components/Container';

const servicesItems = [
    { id: 1, iconId: 'coding', width: '68', height: '68', title: 'Web Development', directions: 'Blog, E-Commerce' },
    { id: 2, iconId: 'illustration', width: '68', height: '68', title: 'UI/UX Design', directions: 'Mobile App, Website Design' },
    { id: 3, iconId: 'microphone', width: '74', height: '74', title: 'Sound Design', directions: 'Voice Over, Beat Making' },
    { id: 4, iconId: 'gameDevelopment', width: '74', height: '74', title: 'Game Design', directions: 'Character Design, Props & Objects' },
    { id: 5, iconId: 'photographer', width: '78', height: '78', title: 'Photography', directions: 'Portrait, Product Photography' },
    { id: 6, iconId: 'ad-pop-up', width: '74', height: '74', title: 'Something else...', directions: 'Something else...' },
];

export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <SectionTitle
                    title='My Services'
                    description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
                />

                <FlexWrapper wrap='wrap' justify='space-between' gap='20px'>
                    {servicesItems.map((item) => (
                        <Service
                            key={item.id}
                            iconId={item.iconId}
                            width={item.width}
                            height={item.height}
                            title={item.title}
                            directions={item.directions}
                        />
                    ))}

                    {/* <ServiceSecondary>
                    <h3>Advertising</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </p>
                    <a href='#'></a>
                </ServiceSecondary> */}
                </FlexWrapper>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section``;

// const ServiceSecondary = styled.div`
//     width: 33%;
//     background-color: #d58c8c7f;
//     border: 1px solid red;
// `;
