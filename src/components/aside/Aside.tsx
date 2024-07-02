import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { Icon } from '../icon/Icon';
import photo from '../../assets/images/photo.webp';
import { Menu } from '../menu/Menu';
import { List } from '../list/List';
import { Button } from '../button/Button';

const socialItems = ['facebook', 'instagram', 'twitter', 'dribbble', 'youtube'];
const listItems = ['Bootstrap, Materialize', 'Stylus, Sass, Less', 'Gulp, Webpack, Grunt', 'GIT Knowledge'];

export const Aside = () => {
    return (
        <StyledAside>
            <MainInfo>
                <Image src={photo} alt='photo' />
                <Title>Rayan Adlardard</Title>
                <Info>Font-end Developer</Info>

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
    background-color: #8787ce;
    /* max-width: 305px;
    width: 100%;  */
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
const Title = styled.h4``;
const Skill = styled.span``;
const Level = styled.span``;
const ProgressBar = styled.div`
    border: 1px solid #ffb400;
`;

const ExtraSkills = styled.div``;
