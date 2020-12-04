import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";
import axios from "axios";

jest.mock("axios");

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders an alert when no events are found", async () => {
  axios.get.mockImplementationOnce((url) => {
    if (url.startsWith("https://eonet.sci.gsfc.nasa.gov/api/v3/categories")) {
      console.log('returning a categories response')
      return Promise.resolve({
        data: {
          categories: [{ title: "Volcanoes" }],
        },
      });
    } else if (
      url.startsWith("https://eonet.sci.gsfc.nasa.gov/api/v3/events")
    ) {
      console.log('returning an events response')
      return Promise.resolve({
        data: {
          events: [],
        },
      });
    }
  });
  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<App />, container);
  });

  expect(container.querySelector(".alert .card").textContent).toBe(
    "We found no events. Try another category or time."
  );

  // remove the mock to ensure tests are completely isolated
  axios.mockRestore();
});
