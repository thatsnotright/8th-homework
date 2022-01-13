function unique(itemList: string[]): string[] {
  const foundMap: Record<string, number> = {}
  return itemList.reduce<string[]>((acc, value) => {
    if (foundMap[value]) return acc
    foundMap[value] = 1
    if (value) acc.push(value)
    return acc
  }, [])
}

export { unique }
