

test('Renders Login correctly', async () => {
  await act(async () => {
    const { getByTestId } = render(<Login />);
    expect(getByTestId('cardcontainer')).toBeInTheDocument;
  });
});