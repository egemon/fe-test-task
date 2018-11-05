const users = [];
const getUser = id => fetch('https://google.com', id).then(() => {
  users.push(id);
  return `data-${id}`;
});

const getUserWithCache = (id) => {
  // ur code here
};

it('0 value', () => {
  Promise.all([
    getUserWithCache(1),
    getUserWithCache(1),
  ]).then(([
    data1,
    data2,
  ]) => {
    expect(data1).toBe('data-1')
    expect(data2).toBe('data-1')
    expect(users.length).toBe(1)
  })
});
