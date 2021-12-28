import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {borderColor, primaryColor, primaryColorHover, white} from "../../utils/colors";

const StyledButton = styled.button`
  border-radius: .5rem;
  background-color: ${white};
  padding: 2rem;
  color: ${primaryColor};
  text-transform: uppercase;
  border: 1px solid ${borderColor};
  font-size: 1.2rem;
  font-weight: bolder;
  border-bottom: 4px solid ${borderColor};
  transition: all .500ms ease;

  &:hover {
    background-color: ${primaryColor};
    cursor: pointer;
    color: ${white};
    border-color: ${primaryColorHover};
  }
  
  &:active {
    border-bottom: none;
    border-top: 4px solid ${primaryColorHover};
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
