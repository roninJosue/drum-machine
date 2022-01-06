import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import {white} from "../../utils/colors";
import {breakpoints} from "../utils/styledBreakpoint";

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-family: 'Roboto', sans-serif;
  margin: 0 0 1rem;
  color: ${white};
  ${breakpoints('font-size', 'rem', [
    {900: 1.8},
    {320: 1.5},
  ])}
`

const Heading = ({text}) => (<StyledHeading>{text}</StyledHeading>)

Heading.propTypes = {
  text: PropTypes.string.isRequired
};

export default Heading;

