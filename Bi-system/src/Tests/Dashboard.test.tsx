
import Dashboard from '../Pages/Dashboard';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';

test("Renders Dashboard correctly", async () => {
  await act(async () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId("chartcontainer")).toBeInTheDocument();
  });
});

test('Dropdown renders', async() =>{
  await act(async () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId("dropDownButton")).toBeTruthy();
});
});