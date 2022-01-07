import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {
  borderColor,
  primaryColor,
  primaryColorHover,
  white
} from "../../utils/colors";

const StyledButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: .5rem;
  background-color: ${white};
  padding: 2rem;
  color: ${primaryColor};
  text-transform: uppercase;
  border: 1px solid ${borderColor};
  font-size: 1.2rem;
  font-weight: bolder;
  border-bottom: 4px solid ${borderColor};
  //border-top: 4px solid transparent;
  transition: all .500ms ease;
  margin: 0 .625rem .625rem 0;
  &:nth-child(3n){
    margin: 0;
  }

  &:hover {
    background-color: ${primaryColor};
    cursor: pointer;
    color: ${white};
    border-color: ${primaryColorHover};
  }
  
  &:active {
    top: 3px;
    border-bottom: 1px solid transparent;
    //border-top: 4px solid ${primaryColorHover};
  }
`

const Pad = ({text, onClick}) => {
  return (
    <StyledButton
      onClick={onClick}
      className='drum-pad'
    >
      {text}
    </StyledButton>
  );
};

Pad.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Pad;
