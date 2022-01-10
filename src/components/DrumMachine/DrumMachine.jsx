import React from 'react';
import styled from "styled-components";
import {primaryColor, white} from "../../utils/colors";
import {breakpoints} from "../utils/styledBreakpoint";
import useDrumMachine from "./hooks/useDrumMachine";
import Pad from "../Pad";
import DrumPadContainer from "../DrumPadContainer/DrumPadContainer";
import Display from "../Display";

const Section = styled.section`
  width: 600px;
  min-height: 300px;
  color: ${primaryColor};
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
  background-color: ${white};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${breakpoints('width', '%', [
    {600: 90},
  ])}
  ${breakpoints('flex-wrap', '', [
    {600: 'wrap'},
  ])}
  ${breakpoints('justify-content', '', [
    {600: 'center'},
  ])}
  ${breakpoints('padding', 'rem', [
    {300: 1},
  ])}
`

const DrumMachine = () => {
  const {
    drumPads,
    displayText,
    handleClickPad,
    activePad
  } = useDrumMachine()

  return (
    <Section>
      <DrumPadContainer>
        {drumPads.map(pad => {
          return (
            <Pad
              key={pad.keyCode}
              onClick={handleClickPad}
              text={pad.keyTrigger}
              id={pad.keyCode}
              active={pad.keyCode === activePad}
            />
          )
        })}
      </DrumPadContainer>
      <Display text={displayText} />
    </Section>
  );
};

DrumMachine.propTypes = {};

export default React.memo(DrumMachine);
