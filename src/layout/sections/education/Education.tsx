import styled from 'styled-components';
import { SectionTitle } from '../../../components/sectionTitle/SectionTitle';
import { Container } from '../../../components/Container';
import { Background } from '../../../components/background/Background';
import { theme } from '../../../styles/Theme';

const backgroundsItems = [
    {
        id: '1',
        title: 'University of Toronto',
        status: 'Student',
        duration: 'Jan 1016 - Dec 2021',
        direction: 'Certificate of web training',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
    },
    {
        id: '2',
        title: 'University of Toronto',
        status: 'Student',
        duration: 'Jan 1016 - Dec 2021',
        direction: 'Certificate of web training',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
    },
    {
        id: '3',
        title: 'University of Toronto',
        status: 'Student',
        duration: 'Jan 1016 - Dec 2021',
        direction: 'Certificate of web training',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
    },
];

export const Education = () => {
    return (
        <StyledEducation>
            <Container>
                <SectionTitle
                    title='Education'
                    description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
                />

                <Backgrounds>
                    {backgroundsItems.map((items) => (
                        <Background items={items} key={items.id} />
                    ))}
                </Backgrounds>
            </Container>
        </StyledEducation>
    );
};

const StyledEducation = styled.section``;

const Backgrounds = styled.div`
    background-color: ${theme.colors.secondaryBg};
    padding: 46px 28px 38px 36px;
`;
