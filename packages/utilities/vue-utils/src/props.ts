export function filterDOMProps(
  props: Record<string, any>,
  opts: {enabled?: boolean} = {}
): Record<string, any> {
  const {enabled = true} = opts;
  
  if (!enabled) {
    return props;
  }

  const domProps: Record<string, any> = {};
  const allowedProps = new Set([
    'id', 'class', 'style', 'role', 'tabindex',
    'aria-label', 'aria-labelledby', 'aria-describedby',
    'data-testid'
  ]);

  for (const [key, value] of Object.entries(props)) {
    if (allowedProps.has(key) || key.startsWith('aria-') || key.startsWith('data-')) {
      domProps[key] = value;
    }
  }

  return domProps;
}
