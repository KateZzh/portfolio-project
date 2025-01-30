import styled from 'styled-components';
import { Link } from '../../../../components/Link';

export const TabMenu = (props: { tabMenuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ScrollContainer>
                <MenuList>
                    {props.tabMenuItems.map((item: string, index: number) => {
                        return (
                            <ListItem key={index}>
                                <Link href='#'>{item}</Link>
                            </ListItem>
                        );
                    })}
                </MenuList>
            </ScrollContainer>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    width: 100%;
    margin-bottom: 40px;
`;

const ScrollContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const MenuList = styled.ul`
    display: flex;
    gap: 36px;
    width: max-content;
    padding-bottom: 10px;
    margin: 0 auto;
`;

const ListItem = styled.li`
    & > a {
        white-space: nowrap;
    }
`;
