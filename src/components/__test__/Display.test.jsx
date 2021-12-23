import React from "react"
import {render} from "@testing-library/react";
import Display from "../Display";

describe('Display component', () => {
  it('Should render', async () => {
    const {asFragment} =  render(<Display text='hello'/>)

    const html = asFragment()

    expect(html).toMatchSnapshot()
  })
})
