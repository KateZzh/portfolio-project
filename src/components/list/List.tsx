import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const List = (props: { listItems: Array<string> }) => {
    return (
        <StyledList>
            <ul>
                {props.listItems.map((list, index) => {
                    return (
                        <li key={index}>
                            <Icon iconId='check' width='24' height='24' viewBox='0 0 24 24' />
                            {list}
                        </li>
                    );
                })}
            </ul>
        </StyledList>
    );
};

const StyledList = styled.div``;
