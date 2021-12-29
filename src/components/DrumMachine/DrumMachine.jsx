import React from 'react';
import GlobalFonts from '../../fonts/fonts'
import styled from "styled-components";
import PropTypes from 'prop-types';
import {primaryColor, white} from "../../utils/colors";

const Section = styled.section`
  width: 600px;
  height: 300px;
  color: ${primaryColor};
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
  background-color: ${white};
  border-radius: 10px;
`

const DrumMachine = props => {
  return (
    <Section>
      <GlobalFonts />
      asdasdasdasd
    </Section>
  );
};

DrumMachine.propTypes = {

};

export default DrumMachine;
