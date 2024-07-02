import React from 'react';
import { Icon } from '../icon/Icon';

export const Button = (props: {title: string, type?: 'submit' | 'button'}) => {
    return (
        <button type={props.type}> 
            <a href=''>
                {props.title} <Icon iconId='btnArrow' width='16' height='16' />
            </a>
        </button>
    );
};

