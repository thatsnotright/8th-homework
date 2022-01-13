/**
 * This function will remove all invalid digits from a string
 *
 * @param input Any string which must be sanitizes
 */
function cleanup(input: string): string {
  return (input ?? '').replace(/[^0-9]{1}/g, '')
}

export { cleanup }
