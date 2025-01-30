import styled from 'styled-components';

import { FlexWrapper } from '../../components/FlexWrapper';
import { Button } from '../../components/button/Button';
import { theme } from '../../styles/Theme';
import { Profile } from './profile/Profile';
import { Knowledge } from './knowledge/Knowledge';
import { Subtitle } from './Subtitle';
import { Icon } from '../../components/icon/Icon';

const extraSkillsItems = ['Bootstrap, Materialize', 'Stylus, Sass, Less', 'Gulp, Webpack, Grunt', 'GIT Knowledge'];

const aboutItems = [
    { title: 'Age', info: '24' },
    { title: 'Residence', info: 'BD' },
    { title: 'Freelance', info: 'Available' },
    { title: 'Address', info: 'Dhaka, Bangladesh' },
];

const languagesItems = [
    { skill: 'Bangla', level: '100%' },
    { skill: 'English', level: '80%' },
    { skill: 'Spanish', level: '60%' },
];

const skillsItems = [
    { skill: 'Html', level: '90%' },
    { skill: 'CSS', level: '85%' },
    { skill: 'Js', level: '80%' },
    { skill: 'PHP', level: '75%' },
    { skill: 'WordPress', level: '85%' },
];

type Props = {
    handleClose?: () => void;
};

export const Sidebar = (props: Props) => {
    return (
        <StyledSidebar>
            <CloseButton onClick={props.handleClose} />

            <SidebarContainer>
                <Profile />

                <About>
                    {aboutItems.map(({ title, info }, index) => {
                        return (
                            <FlexWrapper justify='space-between' key={index}>
                                <Name>{title}:</Name>
                                <Info className='info'>{info}</Info>
                            </FlexWrapper>
                        );
                    })}
                </About>

                <Knowledge knowledge={languagesItems} subtitle='Languages' />
                <Knowledge knowledge={skillsItems} subtitle='Skills' />

                <ExtraSkills>
                    <Subtitle>Extra Skills</Subtitle>

                    <ListExtraSkills>
                        {extraSkillsItems.map((el, index) => {
                            return (
                                <ExtraSkillItem key={index}>
                                    <Icon iconId='marker' width='15' height='15' fill='none' />
                                    {el}
                                </ExtraSkillItem>
                            );
                        })}
                    </ListExtraSkills>
                </ExtraSkills>

                <Button title='Download cv' iconId='btnCV' btnType='btnCV' />
            </SidebarContainer>
        </StyledSidebar>
    );
};

const StyledSidebar = styled.aside`
    background-color: ${theme.colors.secondaryBg};
    max-width: 305px;
    width: 100%;
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    overflow-y: auto;
    height: 100vh;

    @media ${theme.media.mobile} {
        max-width: 375px;
    }
`;

const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    display: none;

    position: absolute;
    top: 35px;
    right: 30px;
    z-index: 99;

    @media ${theme.media.tabletXl} {
        display: block;
    }

    &::before {
        content: '';
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${theme.colors.accent};
        transform: rotate(-45deg) translateY(0);
        position: absolute;
    }

    &::after {
        content: '';
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${theme.colors.accent};
        transform: rotate(45deg) translateY(0);
        position: absolute;
    }
`;

const SidebarContainer = styled.div`
    max-width: 250px;
    width: 100%;
    padding: 50px 15px 25px;
    margin: 0 auto;

    & > button {
        margin-top: 25px;
    }
`;

const About = styled.div`
    padding: 25px 0;
    border-bottom: 2px solid ${theme.colors.primaryBg};
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > ${FlexWrapper}:nth-child(3) .info {
        color: ${theme.colors.specialColor};
    }
`;

const Name = styled.span`
    background-color: ${theme.colors.accent};
    line-height: 1.6;
    text-transform: capitalize;
    display: inline-block;
    padding: 0 4px;
`;

const Info = styled.span`
    line-height: 1.6;
    text-transform: capitalize;
`;

const ExtraSkills = styled.div`
    padding: 25px 0;
    border-bottom: 2px solid ${theme.colors.primaryBg};
`;

const ListExtraSkills = styled.ul`
    li:not(:last-child) {
        padding-bottom: 5px;
    }
`;

const ExtraSkillItem = styled.li`
    font-weight: 400;
    font-size: 15px;
    line-height: 1.6;
    text-transform: capitalize;
    color: ${theme.colors.fontSecondary};

    display: flex;
    align-items: center;
    gap: 15px;
`;
