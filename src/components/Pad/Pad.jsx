import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from "styled-components";
import {
  borderColor,
  primaryColor,
  primaryColorHover,
  white
} from "../../utils/colors";

const activePadCss = css`
  background-color: ${primaryColor};
  top: 3px;
  border-color: ${primaryColorHover};
  color: ${white} !important;
  border-bottom: 1px solid transparent;
`

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
  transition: all .1s ease;
  margin: 0 .625rem .625rem 0;

  &:nth-child(3n) {
    margin: 0;
  }

  ${props => props.active ? activePadCss : ''}
`

const Pad = ({text, onClick, id, active}) => {
  return (
    <StyledButton
      onClick={() => onClick(id)}
      className='drum-pad'
      active={active}
    >
      {text}
    </StyledButton>
  );
};

Pad.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default React.memo(Pad);
