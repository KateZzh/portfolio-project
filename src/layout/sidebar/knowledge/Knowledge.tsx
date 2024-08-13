import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Subtitle } from '../Subtitle';

type KnowledgeType = {
    skill: string;
    level: string;
};

type KnowledgePropsType = {
    knowledge: KnowledgeType[];
    subtitle: string;
};

export const Knowledge = ({ knowledge, subtitle }: KnowledgePropsType) => {
    return (
        <StyledKnowledge>
            <Subtitle>{subtitle}</Subtitle>

            {knowledge.map(({ skill, level }, index) => {
                return (
                    <KnowledgeWrapper key={index}>
                        <FlexWrapper justify='space-between'>
                            <Text>{skill}</Text>
                            <Text>{level}</Text>
                        </FlexWrapper>
                        <ProgressBar>
                            <Progress style={{ width: level }}></Progress>
                        </ProgressBar>
                    </KnowledgeWrapper>
                );
            })}
        </StyledKnowledge>
    );
};

const StyledKnowledge = styled.div`
    padding: 25px 0;
    border-bottom: 2px solid ${theme.colors.primaryBg};

    & > div:last-child{
        padding-bottom: 0;
    }
`;

const KnowledgeWrapper = styled.div`
    padding-bottom: 10px;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 6px;
    border: 1px solid ${theme.colors.accent};
    border-radius: 30px;
    display: flex;
    align-items: center;

    margin-top: 5px;
`;

const Progress = styled.div`
    height: 2px;
    border-radius: 30px;
    background: #ffb400;
    margin: 0 2px;
`;

const Text = styled.span`
    line-height: 1.6;
    text-transform: capitalize;
    color: ${theme.colors.fontSecondary};
`;
