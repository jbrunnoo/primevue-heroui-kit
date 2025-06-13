export function omit<T extends Record<string, any>, K extends keyof T>(
  object: T,
  keysToOmit: K[]
): Omit<T, K> {
  const result = {} as Omit<T, K>;
  
  for (const key in object) {
    if (!keysToOmit.includes(key as any)) {
      (result as any)[key] = object[key];
    }
  }
  
  return result;
}
