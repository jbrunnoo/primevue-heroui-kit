import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {colorVariants, dataFocusVisibleClasses} from "../utils";

const button = tv({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-none",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    "data-[pressed=true]:scale-[0.97]",
    ...dataFocusVisibleClasses,
  ],
  variants: {
    variant: {
      solid: "",
      bordered: "border-medium bg-transparent",
      light: "bg-transparent",
      flat: "",
      faded: "border-medium",
      shadow: "",
      ghost: "border-medium bg-transparent",
    },
    size: {
      sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
      lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large",
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-small",
      md: "rounded-medium", 
      lg: "rounded-large",
      full: "rounded-full",
    },
    fullWidth: {
      true: "w-full",
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none",
    },
    isIconOnly: {
      true: "px-0 !gap-0",
      false: "[&>svg]:max-w-[theme(spacing.8)]",
    },
    disableAnimation: {
      true: "!transition-none data-[pressed=true]:scale-100",
      false: "transition-transform-colors-opacity motion-reduce:transition-none",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "default",
    fullWidth: false,
    isDisabled: false,
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "default",
      class: colorVariants.solid.default,
    },
    {
      variant: "solid",
      color: "primary",
      class: colorVariants.solid.primary,
    },
    {
      variant: "solid",
      color: "secondary",
      class: colorVariants.solid.secondary,
    },
    {
      variant: "solid",
      color: "success",
      class: colorVariants.solid.success,
    },
    {
      variant: "solid",
      color: "warning",
      class: colorVariants.solid.warning,
    },
    {
      variant: "solid",
      color: "danger",
      class: colorVariants.solid.danger,
    },
    {
      variant: "bordered",
      color: "default",
      class: colorVariants.bordered.default,
    },
    {
      variant: "bordered",
      color: "primary",
      class: colorVariants.bordered.primary,
    },
    {
      variant: "light",
      color: "default",
      class: [colorVariants.light.default, "hover:bg-default/40"],
    },
    {
      variant: "light",
      color: "primary",
      class: [colorVariants.light.primary, "hover:bg-primary/20"],
    },
    {
      variant: "flat",
      color: "default",
      class: colorVariants.flat.default,
    },
    {
      variant: "flat",
      color: "primary",
      class: colorVariants.flat.primary,
    },
    {
      variant: "ghost",
      color: "default",
      class: [colorVariants.ghost.default],
    },
    {
      variant: "ghost",
      color: "primary",
      class: [colorVariants.ghost.primary],
    },
    {
      isIconOnly: true,
      size: "sm",
      class: "min-w-8 w-8 h-8",
    },
    {
      isIconOnly: true,
      size: "md",
      class: "min-w-10 w-10 h-10",
    },
    {
      isIconOnly: true,
      size: "lg",
      class: "min-w-12 w-12 h-12",
    },
    {
      variant: ["solid", "faded", "flat", "bordered", "shadow"],
      class: "hover:opacity-hover",
    },
  ],
});

export type ButtonVariantProps = VariantProps<typeof button>;

export {button};
