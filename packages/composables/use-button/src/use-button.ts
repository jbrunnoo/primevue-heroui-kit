import {computed, type Ref} from "vue";
import {button, type ButtonVariantProps} from "@primeui/theme";
import {dataAttr} from "@primeui/shared-utils";
import {useDOMRef, filterDOMProps} from "@primeui/vue-utils";

export interface UseButtonProps extends ButtonVariantProps {
  as?: string;
  class?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  disableRipple?: boolean;
  spinnerPlacement?: "start" | "end";
  startContent?: any;
  endContent?: any;
  spinner?: any;
}

export function useButton(props: UseButtonProps, domRef?: Ref<HTMLElement | null>) {
  const {
    as = "button",
    class: className,
    size = "md",
    color = "default", 
    variant = "solid",
    radius,
    fullWidth = false,
    isDisabled = false,
    isLoading = false,
    disableAnimation = false,
    isIconOnly = false,
    disableRipple = false,
    spinnerPlacement = "start",
    startContent,
    endContent,
    spinner,
    ...otherProps
  } = props;

  const Component = as;
  const shouldFilterDOMProps = typeof Component === "string";
  const buttonRef = useDOMRef(domRef);

  const styles = computed(() =>
    button({
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled: isDisabled || isLoading,
      disableAnimation,
      isIconOnly,
      class: className,
    })
  );

  const getButtonProps = computed(() => ({
    "data-disabled": dataAttr(isDisabled),
    "data-loading": dataAttr(isLoading),
    "data-pressed": dataAttr(false),
    "data-hover": dataAttr(false),
    "data-focus": dataAttr(false),
    "data-focus-visible": dataAttr(false),
    disabled: isDisabled || isLoading,
    class: styles.value,
    ...filterDOMProps(otherProps, {
      enabled: shouldFilterDOMProps,
    }),
  }));

  const spinnerSize = computed(() => {
    const buttonSpinnerSizeMap: Record<string, string> = {
      sm: "sm",
      md: "sm", 
      lg: "md",
    };
    return buttonSpinnerSizeMap[size];
  });

  return {
    Component,
    domRef: buttonRef,
    styles,
    isLoading,
    spinnerPlacement,
    spinnerSize,
    startContent,
    endContent,
    spinner,
    disableRipple,
    isIconOnly,
    getButtonProps,
  };
}

export type UseButtonReturn = ReturnType<typeof useButton>;
