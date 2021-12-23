import React from "react"
import {render, screen} from "@testing-library/react";
import Display from "../components/Display";

const textToTest = 'OLLEH'

test('Display render', async () => {
  render(<Display text='hello' />)

  const text = await screen.findByText(textToTest)

  expect(text).toHaveTextContent(textToTest)
})