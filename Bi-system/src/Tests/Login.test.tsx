import  React  from  'react';
import { act, cleanup, render } from  '@testing-library/react';
import AuthenticationService from '../Services/AuthenticationService'
import  Login from  '../Pages/Login';


test('Renders Login correctly', async () => {
  await act(async () => {
    const { getByTestId } = render(<Login />);
    expect(getByTestId('cardcontainer')).toBeInTheDocument;
  });
});