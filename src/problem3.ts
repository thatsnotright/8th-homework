import { cleanup } from './problem1'
import { unique } from './problem2'

/**
 *
 * @param unsafeIds a list of unsanitizes strings representing the ids
 * @param listOfSpecialties An array of (id, "specialty") tuples
 * @returns a list of unique specialites by name
 */
function getSpecialties(unsafeIds: string[], listOfSpecialties: [number, string][]): string[] {
  const cleaned = unsafeIds.map(cleanup)
  const skillMap: Record<number, string> = listOfSpecialties.reduce<Record<number, string>>((acc, [id, specialty]) => {
    acc[id] = specialty
    return acc
  }, {})
  const allSkills = cleaned.map((id) => skillMap[parseInt(id, 10)])
  return unique(allSkills)
}

export { getSpecialties }
