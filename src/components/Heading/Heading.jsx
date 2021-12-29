import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import {white} from "../../utils/colors";

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-family: 'Roboto', sans-serif;
  color: ${white};
`

const Heading = ({text}) => (<StyledHeading>{text}</StyledHeading>)

Heading.propTypes = {
  text: PropTypes.string.isRequired
};

export default Heading;

