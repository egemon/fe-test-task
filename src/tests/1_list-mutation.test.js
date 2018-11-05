const users = [
  {
    firstName: 'il',
    lastName: 'Luk',
  },
];

const addFullnameToList = () => {
  // ur code here
};

it('adds fullName prop to each list item', () => {
  addFullnameToList(users)
  expect(users[0].fullName).toBe(users[0].firstName + users[0].lastName)
});
