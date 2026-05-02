/** Deterministic rotation derived from cert id — no Math.random() */
export function getRotation(id: string, min: number, max: number): number {
  const seed = id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return min + (seed % (max - min))
}
