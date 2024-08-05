import styled from 'styled-components';
import photo1 from '../../assets/images/recommendation-1.webp';
import photo2 from '../../assets/images/recommendation-2.webp';
import photo3 from '../../assets/images/recommendation-3.webp';
import { FlexWrapper } from '../FlexWrapper';
import { theme } from '../../styles/Theme';
import { Icon } from '../icon/Icon';

const recommendationData = [
    {
        id: '1',
        name: 'James Gouse',
        position: 'Graphic Designer',
        rating: 5,
        title: 'Great Quality!',
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
        photo: photo1,
    },
    {
        id: '2',
        name: 'Tiana Philips',
        position: 'Photographer',
        rating: 5,
        title: 'Amazing work!',
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
        photo: photo2,
    },
    {
        id: '3',
        name: 'Talan Westervelt',
        position: 'Business man',
        rating: 5,
        title: 'Great Quality!',
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
        photo: photo3,
    },
];

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper justify='space-between'>
                {recommendationData.map((el) => {
                    return (
                        <Slide key={el.id}>
                            <FlexWrapper gap='10px'>
                                {[1, 2, 3, 4, 5].map((num, index) => {
                                    return <Icon key={index} iconId='star' fill={num <= el.rating ? theme.colors.accent : theme.colors.font} />;
                                })}
                            </FlexWrapper>

                            <Title>{el.title}</Title>
                            <Text>{el.feedback}</Text>

                            <FlexWrapper align='center' gap='20px'>
                                <Image src={el.photo} alt='photo of the person who made the recommendation' />

                                <div>
                                    <Name>{el.name}</Name>
                                    <Position>{el.position}</Position>
                                </div>
                            </FlexWrapper>
                        </Slide>
                    );
                })}
            </FlexWrapper>

            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div``;

const Slide = styled.div`
    max-width: 310px;
    width: 100%;
    padding: 25px;
    background-color: ${theme.colors.secondaryBg};
`;

const Title = styled.h3`
    text-transform: capitalize;
    margin: 16px 0 18px;
`;

const Text = styled.p`
    line-height: 1.6;
    text-transform: capitalize;
    margin-bottom: 30px;
`;

const Image = styled.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 50%;
`;

const Name = styled.h3`
    text-transform: capitalize;
    margin-bottom: 5px;
`;

const Position = styled.span`
    line-height: 1.6;
    text-transform: capitalize;
    color: ${theme.colors.fontSecondary};
`;

const Pagination = styled.div`
    margin-top: 50px;
    text-align: center;

    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        background-color: #ffb400;
        border-radius: 100%;
    }
`;
