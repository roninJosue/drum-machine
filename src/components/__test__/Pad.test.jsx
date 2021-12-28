import React from "react"
import {render, screen} from "@testing-library/react"
import Pad from "../Pad/Pad";

describe('Pad component', () => {
  it('should render', function () {
    const fn = jest.fn()
    const {asFragment} = render(<Pad onClick={fn} text='A' />)

    const html = asFragment()

    expect(html).toMatchSnapshot()
  });
})