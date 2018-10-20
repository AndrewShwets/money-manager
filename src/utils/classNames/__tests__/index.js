import classNames from '../index';
const result = 'test test1 test3';

test('classNames method concat strings', () => {
    expect(classNames('  ', 'test', 'test1   ', '  test3', '  ')).toBe(result)
});

test('classNames method falsy values', () => {
    expect(classNames(null, '  ', 'test', 'test1   ', null, '  test3', '  ', [], {}, new Function())).toBe(result);
});

test('classNames method non arguments call', () => {
    expect(classNames()).toBe('');
});