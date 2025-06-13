export function dataAttr(condition: boolean | undefined): string | undefined {
  return condition ? "true" : undefined;
}

export function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}
