import styled from 'styled-components';
import { Link } from '../../../../components/Link';

export const TabMenu = (props: { tabMenuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabMenuItems.map((item: string, index: number) => {
                    return (
                        <ListItem key={index}>
                            <Link href='#'>{item}</Link>
                        </ListItem>
                    );
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    margin-bottom: 50px;

    ul {
        display: flex;
        justify-content: center;
        gap: 38px;
    }
`;

const ListItem = styled.li``;


