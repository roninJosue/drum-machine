import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import "@fontsource/roboto"

const DivStyled = styled.div`
  //background-color: red;
  font-family: 'Roboto',monospace;
  //color: #fff;
  padding: 1rem;
  width: 100%;
`

const Display = ({text}) => {
  const newText = text.toUpperCase().split('').reverse().join('')
  return (
    <DivStyled>
      {newText}
    </DivStyled>
  );
};

Display.propTypes = {
  text: PropTypes.string.isRequired
};

export default Display;
