<template>
  <component
    :is="Component"
    ref="domRef"
    v-bind="getButtonProps"
  >
    <slot name="start-content">
      <component :is="startContent" v-if="startContent" />
    </slot>
    
    <component 
      :is="spinner" 
      v-if="isLoading && spinnerPlacement === 'start'" 
      :size="spinnerSize"
    />
    
    <slot v-if="!isLoading || !isIconOnly" />
    
    <component 
      :is="spinner" 
      v-if="isLoading && spinnerPlacement === 'end'" 
      :size="spinnerSize"
    />
    
    <slot name="end-content">
      <component :is="endContent" v-if="endContent" />
    </slot>
  </component>
</template>

<script setup lang="ts">
 import {useButton, type UseButtonProps} from "@primeui/use-button";
 
 export interface ButtonProps {
   as?: string;
   class?: string;
   size?: "sm" | "md" | "lg";
   color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
   variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
   radius?: "none" | "sm" | "md" | "lg" | "full";
   fullWidth?: boolean;
   isDisabled?: boolean;
   isLoading?: boolean;
   disableAnimation?: boolean;
   isIconOnly?: boolean;
   disableRipple?: boolean;
   spinnerPlacement?: "start" | "end";
   startContent?: any;
   endContent?: any;
 }

const props = withDefaults(defineProps<ButtonProps>(), {
  as: "button",
  size: "md",
  color: "default",
  variant: "solid",
  fullWidth: false,
  isDisabled: false,
  isLoading: false,
  disableAnimation: false,
  isIconOnly: false,
  disableRipple: false,
  spinnerPlacement: "start",
});

const {
  Component,
  domRef,
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
} = useButton(props);
</script>
