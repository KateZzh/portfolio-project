import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

export const Rating = () => {
  return (
    <StyledRating>
      <Icon iconId='star'/>
      <Icon iconId='star'/>
      <Icon iconId='star'/>
      <Icon iconId='star'/>
      <Icon iconId='star'/>
    </StyledRating>
  );
}

const StyledRating = styled.div`
  
`
