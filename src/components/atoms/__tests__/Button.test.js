import { render, fireEvent } from "@testing-library/react";
import { Button } from "../../atoms";

describe("Button", () => {
  it("renders button with correct text", () => {
    const onClickMock = jest.fn();
    const buttonText = "Click me";

    const { getByText } = render(
      <Button onClick={onClickMock}>{buttonText}</Button>
    );

    const buttonElement = getByText(buttonText);

    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick when the button is clicked", () => {
    const onClickMock = jest.fn();
    const buttonText = "Click me";

    const { getByText } = render(
      <Button onClick={onClickMock}>{buttonText}</Button>
    );

    const buttonElement = getByText(buttonText);

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
