import React from 'react';
import GlobalFonts from '../../fonts/fonts'
import styled from "styled-components";
import { primaryColor, white } from "../../utils/colors";
import { breakpoints } from "../utils/styledBreakpoint";

const Section = styled.section`
  width: 600px;
  height: 300px;
  color: ${primaryColor};
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
  background-color: ${white};
  border-radius: 10px;
  ${breakpoints('width', '%', [
    {450: 90}
  ])}
  ${breakpoints('height', 'vh', [
    {450: 100}
  ])}
`

const DrumMachine = () => {
  return (
    <Section>
      <GlobalFonts />
      Drum Machine
    </Section>
  );
};

DrumMachine.propTypes = {

};

export default DrumMachine;
