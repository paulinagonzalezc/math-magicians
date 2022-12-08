import { render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import ButtonsBox from "../components/Home";

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const tree = renderer.create(<ButtonsBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Matches DOM Snapshot", () => {
    const tree = renderer.create(<ButtonsBox handleClick="handleClick"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

//   it('Render ButtonsBox Container ', () => {
//     render(<ButtonsBox />);
//     const heading = screen.getByRole('heading');
//     expect(heading).toBeInTheDocument();
//     expect(heading).toHaveTextContent("Let's do some math!");
//     expect(screen.getByText('1')).toHaveClass('button');
// });

});