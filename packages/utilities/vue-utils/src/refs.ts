import {ref, type Ref} from "vue";

export function useDOMRef<T extends HTMLElement = HTMLElement>(
  domRef?: Ref<T | null>
): Ref<T | null> {
  if (domRef) {
    return domRef;
  }
  return ref(null) as Ref<T | null>;
}
