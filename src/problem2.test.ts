import { unique } from './problem2'

describe(`Given a list of elements (where all elements are of the same type), return a new list with the same
elements in the same order, but removing duplicates. Preserve the original input - do not mutate it,
return a new list instead.`, () => {
  it('should convert ["a", "b", "c", "a", "b", "d"] into ["a", "b", "c", "d"]', () => {
    expect(unique(['a', 'b', 'c', 'a', 'b', 'd'])).toEqual(['a', 'b', 'c', 'd'])
  })
  it('should convert aba to ab', () => {
    const a = ['a', 'b', 'a']
    expect(unique(a)).toEqual(['a', 'b'])
  })
  it('should convert xyzzy to xyz', () => {
    const a = ['x', 'y', 'z', 'z', 'y']
    expect(unique(a)).toEqual(['x', 'y', 'z'])
  })
  it('should convert for numbers too', () => {
    expect(unique(['1', '3', '2', '3', '1'])).toEqual(['1', '3', '2'])
  })
  it('should also make pizza and sushi rolls unique', () => {
    expect(unique(['🍕', '🍙', '🍕', '🍕🍕z🍙', '🍕'])).toEqual(['🍕', '🍙', '🍕🍕z🍙'])
  })
})
