import gravatar from '../../utils/gravatar';

describe('Gravatar util tests', () => {
  test('Should return a string', () => {
    expect(gravatar('any@mail.com')).toMatch(/\w/);
  });
});
