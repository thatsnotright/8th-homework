import { getSpecialties } from './problem3'

describe(`Given a list of string IDs (possibly with duplicates) and a list of specialties with IDs, return a list of
specialty names, without duplicates, that are represented by the given IDs (after being "cleaned up"
by the process from step one).`, () => {
  it(`For example, given this list of IDs:
  ["7-623", "8235", "8-235"]
  and this list of specialties (the first item being a canonical ID):
  [[1381, "front-end web development"],
  [8235, "data engineering"],
  [3434, "API design"],
  [7623, "security"],
  [9153, "UX"]]
  your code should return:
  ["security", "data engineering"]`, () => {
    const ids = ['7-623', '8235', '8-235']
    const specialties: [number, string][] = [
      [1381, 'front-end web development'],
      [8235, 'data engineering'],
      [3434, 'API design'],
      [7623, 'security'],
      [9153, 'UX'],
    ]
    expect(getSpecialties(ids, specialties)).toEqual(['security', 'data engineering'])
  })
})
