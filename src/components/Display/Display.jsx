import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import "@fontsource/roboto"
import {primaryColor} from "../../utils/colors";


const DisplayStyled = styled.div`
  font-family: 'Roboto',monospace;
  padding: 1rem;
  border: 2px solid ${primaryColor};
  border-bottom: 5px solid ${primaryColor};
  border-left: 5px solid ${primaryColor};
`

const Display = ({text}) => {
  const newText = text.toUpperCase().split('').reverse().join('')
  return (
    <DisplayStyled>
      {newText}
    </DisplayStyled>
  );
};

Display.propTypes = {
  text: PropTypes.string.isRequired
};

export default Display;
