import React from "react";
import { render } from "@testing-library/react";
import HelloWorld from "../components/HelloWorld";

test("renders Hello World", () => {
	const { getByText } = render(<HelloWorld punctuation="!" />);
	const element = getByText("Hello World!");
	expect(element).toBeInTheDocument();
});
