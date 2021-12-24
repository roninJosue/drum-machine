import React from "react"
import {render, screen} from "@testing-library/react";
import Display from "../Display";

describe('Display component', () => {

  it('Should render', async () => {
    const {asFragment} =  render(<Display text='hello'/>)

    const html = asFragment()

    expect(html).toMatchSnapshot()
  })

  it("Should contain the text 'OLLEH'",() => {
    render(<Display text='hello' />)
    screen.debug()

    const text = screen.getByText('OLLEH')

    expect(text).toHaveTextContent('OLLEH')
  });
})
