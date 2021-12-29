import React from "react"
import {render, screen} from "@testing-library/react";
import Heading from "../Heading";

const textToShow = 'Drum Machine'

describe('Heading component', () => {
  it('should render', function () {
    render(<Heading text={textToShow} />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
  });

  it('should show text Drum Machine', function () {
    render(<Heading text={textToShow} />)

    const text = screen.getByText('Drum Machine')

    expect(text).toHaveTextContent('Drum Machine')
  });
})