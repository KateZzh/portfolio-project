import styled from 'styled-components';
import photo from '../../../assets/images/photo.webp';
import { Icon } from '../../../components/icon/Icon';
import { theme } from '../../../styles/Theme';
import { Subtitle } from '../Subtitle';

const socialItems = ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'dribbble'];

export const Profile = () => {
    return (
        <StyledProfile>
            <Image src={photo} alt='photo' />
            <Subtitle>Rayan Adlardard</Subtitle>
            <Position>Front-end Developer</Position>

            <SocialIcons>
                {socialItems.map((el, index) => {
                    return (
                        <SocialItem key={index}>
                            <SocialLink href='#'>
                                <Icon iconId={el} width='14' height='14' />
                            </SocialLink>
                        </SocialItem>
                    );
                })}
            </SocialIcons>
        </StyledProfile>
    );
};

const StyledProfile = styled.div`
    text-align: center;
`;

const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 30px;
`;

// const SidebarTitle = styled.h2`
//     font-weight: 500;
//     font-size: 18px;
//     text-transform: capitalize;
//     padding-bottom: 15px;
// `;

const Position = styled.span`
    line-height: 1.6;
    text-transform: capitalize;
    color: ${theme.colors.fontSecondary};
    padding-bottom: 15px;
    display: inline-block;
`;

const SocialIcons = styled.ul`
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
    border-bottom: 2px solid ${theme.colors.primaryBg};
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.accent};
    border-radius: 50%;
    width: 24px;
    height: 24px;
`;
