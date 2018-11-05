const user = {
  firstName: 'Illia',
};

it('context 1', () => {
    expect(user.getFirstName()).toBe('Illia')
});
