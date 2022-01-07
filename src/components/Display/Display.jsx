import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import "@fontsource/roboto"
import {primaryColor} from "../../utils/colors";


const DisplayStyled = styled.div`
  width: 200px;
  height: 56px;
  font-family: 'Roboto',monospace;
  padding: 1rem;
  border: 4px solid ${primaryColor};
  text-transform: uppercase;
`

const Display = ({text}) => {
  return (
    <DisplayStyled>
      {text}
    </DisplayStyled>
  );
};

Display.propTypes = {
  text: PropTypes.string.isRequired
};

export default Display;
