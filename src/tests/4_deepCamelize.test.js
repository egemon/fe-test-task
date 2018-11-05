const responseFromServer = {
  underscored_key: 'value',
  NullKey: null,
  objectKey: {
    underscored_key: 2
  },
  arrayKey: [
    {
      underscored_key: '3',
    }
  ]
};

const deepCamelize = (data) => {
  // ur code here
};

it('camelizes keys in server response', () => {
  expect(deepCamelize(responseFromServer)).toBe({
    underscoredKey: 'value',
    nullKey: null,
    objectKey: {
      underscoredKey: 2
    },
    arrayKey: [
      {
        underscoredKey: '3',
      }
    ]
  })
});
