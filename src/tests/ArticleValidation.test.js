import getErrorMessages from '../utils/ArticleValidation';

test('title error', () => {
  expect(getErrorMessages('bb', '', '', '')).toBe('Title :bb');
});
test('body error', () => {
  expect(getErrorMessages('', 'bb', '', '')).toBe('body :bb');
});
test('description error', () => {
  expect(getErrorMessages('', '', 'bb', '')).toBe('description :bb');
});
test('description error', () => {
  expect(getErrorMessages('', '', '', 'bb')).toBe('bb');
});
