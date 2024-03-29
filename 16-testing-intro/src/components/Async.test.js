import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    // we use jest to mock the fetch function
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<Async />);

    // add an assertion here
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0); // check if the list is not empty
  });
});
