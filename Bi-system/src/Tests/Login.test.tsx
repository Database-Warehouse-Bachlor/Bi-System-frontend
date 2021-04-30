import { act, cleanup, render } from  '@testing-library/react';
import  Login from  '../Pages/Login';


test('Renders Login correctly', async () => {
  await act(async () => {
    const { getByTestId } = render(<Login />);
    expect(getByTestId('cardcontainer')).toBeInTheDocument;
  });
});