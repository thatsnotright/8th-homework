import { cleanup } from './problem1'

describe('Given an input string, return a new "cleaned-up" string with any non-numeric characters removed.', () => {
  it('should convert "7-623" to "7623"', () => {
    expect(cleanup('7-623')).toBe('7623')
  })
  it('should convert "..2965a" to "2965"', () => {
    expect(cleanup('..2965a')).toBe('2965')
  })
  it('should sanitize UTF-8 as well', () => {
    expect(cleanup('🍕-67🍕🍙3')).toBe('673')
  })
})
