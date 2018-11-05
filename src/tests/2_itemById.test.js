const userIds = [1];

const usersById = {
  1:   {
    id: 1,
    firstName: 'il',
    lastName: 'Luk',
  },
};

const getUsersByIds = (ids) => {
  // ur code here
};

it('get items by their ids', () => {
  expect(getUsersByIds(userIds)[0]).toBe([{
    id: 1,
    firstName: 'il',
    lastName: 'Luk',
  }])
});
