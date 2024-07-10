import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import photo from '../../assets/images/photo.webp';
import { Menu } from '../../components/menu/Menu';
import { List } from '../../components/list/List';
import { Button } from '../../components/button/Button';
import { theme } from '../../styles/Theme';

const socialItems = ['facebook', 'instagram', 'twitter', 'dribbble', 'youtube'];
const listItems = ['Bootstrap, Materialize', 'Stylus, Sass, Less', 'Gulp, Webpack, Grunt', 'GIT Knowledge'];

const InfoItem = () => {
    return (
        <FlexWrapper justify='space-between'>
            <Name>Age:</Name>
            <Info>24</Info>
        </FlexWrapper>
    );
};

export const Aside = () => {
    return (
        <StyledAside>
            <MainInfo>
                <Image src={photo} alt='photo' />
                <Title>Rayan Adlardard</Title>
                <Position>Font-end Developer</Position>

                {/* <Menu menuItems={socialItems}/> */}
                <SocialList>
                    <SocialItem>
                        <SocialLink href=''>
                            <Icon iconId='facebook' width='14' height='14' viewBox='0 0 14 14' />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink href=''>
                            <Icon iconId='instagram' width='14' height='14' viewBox='0 0 14 14' />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink href=''>
                            <Icon iconId='twitter' width='14' height='14' viewBox='0 0 14 14' />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink href=''>
                            <Icon iconId='linkedin' width='14' height='14' viewBox='0 0 14 14' />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink href=''>
                            <Icon iconId='youtube' width='14' height='14' viewBox='0 0 14 14' />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink href=''>
                            <Icon iconId='dribbble' width='14' height='14' viewBox='0 0 14 14' />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </MainInfo>

            <AdditionInfo>
                <FlexWrapper justify='space-between'>
                    <Name>Age:</Name>
                    <Info>24</Info>
                </FlexWrapper>

                <FlexWrapper justify='space-between'>
                    <Name>Residence:</Name>
                    <Info>BD</Info>
                </FlexWrapper>

                <FlexWrapper justify='space-between'>
                    <Name>Freelance:</Name>
                    <Info>Available</Info>
                </FlexWrapper>

                <FlexWrapper justify='space-between'>
                    <Name>Address:</Name>
                    <Info>Dhaka,Bangladesh</Info>
                </FlexWrapper>

                <Skills>
                    <Title>Languages</Title>

                    <FlexWrapper justify='space-between'>
                        <Skill>Bangla</Skill>
                        <Level>100%</Level>
                    </FlexWrapper>
                    <ProgressBar></ProgressBar>

                    <FlexWrapper justify='space-between'>
                        <Skill>Bangla</Skill>
                        <Level>100%</Level>
                    </FlexWrapper>
                    <ProgressBar></ProgressBar>
                </Skills>

                <ExtraSkills>
                    <Title>Extra Skills</Title>
                    <List listItems={listItems} />
                </ExtraSkills>

                <Button title='Download cv' />
            </AdditionInfo>
        </StyledAside>
    );
};

const StyledAside = styled.aside`
    background-color: ${theme.colors.secondaryBg};
    max-width: 305px;
    width: 100%;
    padding: 50px 45px 25px 40px;
    min-height: 100vh;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999; */
`;

const MainInfo = styled.div``;

const SocialLink = styled.a``;

const SocialList = styled.ul`
    display: flex;
    justify-content: space-between;
`;

const SocialItem = styled.li``;

const Image = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

const AdditionInfo = styled.div``;

const Name = styled.span`
    background-color: #ffb400;
`;
const Info = styled.span``;

const Skills = styled.div``;
const Title = styled.h2``;
const Position = styled.span``;
const Skill = styled.span``;
const Level = styled.span``;
const ProgressBar = styled.div`
    border: 1px solid #ffb400;
`;

const ExtraSkills = styled.div``;
