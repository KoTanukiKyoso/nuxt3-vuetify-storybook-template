<script setup lang="ts">
export interface Props {
  active?: boolean
  activeColor?: string
  appendIcon?: string
  baseColor?: string
  block?: boolean
  border?: string | number | boolean
  color?: string
  density?: 'default' | 'comfortable' | 'compact'
  disabled?: boolean
  elevation?: string | number
  exact?: boolean
  flat?: boolean
  height?: string | number
  href?: string
  icon?: boolean | string
  loading?: string | boolean
  location?: 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end' | 'center' | 'center center' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
  maxHeight?: string | number
  maxWidth?: string | number
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
  prependIcon?: string
  readonly?: boolean
  replace?: boolean
  ripple?: boolean
  rounded?: string | number | boolean
  selectedClass?: string
  size?: string | number
  slim?: boolean
  stacked?: boolean
  symbol?: any
  tag?: string
  text?: string
  theme?: string
  tile?: boolean
  to?: string
  value?: any
  variant?: 'flat' | 'elevated' | 'plain' | 'outlined' | 'tonal' | 'text'
  width?: string | number
}

// const props = defineProps({
//   active: {
//     type: Boolean,
//     default: undefined
//   },
//   activeColor: {
//     type: String,
//     default: undefined
//   },
//   appendIcon: {
//     type: String,
//     default: undefined
//   },
//   baseColor: {
//     type: String,
//     default: undefined
//   },
//   block: {
//     type: Boolean,
//     default: false,
//   },
//   border: {
//     type: [String, Number, Boolean],
//     default: false,
//   },
//   color: {
//     type: String,
//     default: undefined
//   },
//   density: {
//     type: String,// ['default', 'comfortable', 'compact']
//     default: 'default',
//   },
//   disabled: {
//     type: Boolean,
//     default: false,
//   },
//   elevation: {
//     type: [String, Number],
//     default: undefined
//   },
//   exact: {
//     type: Boolean,
//     default: false,
//   },
//   flat: {
//     type: Boolean,
//     default: false,
//   },
//   height: {
//     type: [String, Number],
//     default: undefined
//   },
//   href: {
//     type: String,
//     default: undefined
//   },
//   icon: {
//     type: [Boolean, String],
//     default: false,
//   },
//   loading: {
//     type: [String, Boolean],
//     default: false,
//   },
//   location: {
//     type: String,// ['top', 'right', 'bottom', 'left', 'start', 'end', 'center', 'center center', 'top left', 'top right', 'bottom left', 'bottom right']
//     default: undefined
//   },
//   maxHeight: {
//     type: [String, Number],
//     default: undefined
//   },
//   maxWidth: {
//     type: [String, Number],
//     default: undefined
//   },
//   minHeight: {
//     type: [String, Number],
//     default: undefined
//   },
//   minWidth: {
//     type: [String, Number],
//     default: undefined
//   },
//   position: {
//     type: String,// ['absolute', 'fixed', 'relative', 'static', 'sticky']
//     default: undefined
//   },
//   prependIcon: {
//     type: String,
//     default: undefined
//   },
//   readonly: {
//     type: Boolean,
//     default: false,
//   },
//   replace: {
//     type: Boolean,
//     default: false,
//   },
//   ripple: {
//     type: Boolean,
//     default: true,
//   },
//   rounded: {
//     type: [String, Number, Boolean],
//     default: undefined
//   },
//   selectedClass: {
//     type: String,
//     default: undefined
//   },
//   size: {
//     type: [String, Number],
//     default: 'default',
//   },
//   slim: {
//     type: Boolean,
//     default: false,
//   },
//   stacked: {
//     type: Boolean,
//     default: false,
//   },
//   symbol: {
//     type: [String, Number, Boolean],
//     default: undefined
//   },
//   tag: {
//     type: String,
//     default: 'button',
//   },
//   text: {
//     type: String,
//     default: undefined
//   },
//   theme: {
//     type: String,
//     default: undefined
//   },
//   tile: {
//     type: Boolean,
//     default: false,
//   },
//   to: {
//     type: String,
//     default: undefined
//   },
//   value: {
//     type: [String, Number, Boolean],
//     default: undefined
//   },
//   variant: {
//     type: String,// ['flat', 'elevated', 'plain', 'outlined', 'tonal', 'text']
//     default: 'elevated',
//   },
//   width: {
//     type: [String, Number],
//     default: undefined
//   }
// });

const Props = withDefaults(defineProps<Props>(), {
  active: undefined,
  activeColor: undefined,
  appendIcon: undefined,
  baseColor: undefined,
  block: false,
  border: false,
  color: undefined,
  density: 'default',
  disabled: false,
  elevation: undefined,
  exact: false,
  flat: false,
  height: undefined,
  href: undefined,
  icon: false,
  loading: false,
  location: undefined,
  maxHeight: undefined,
  maxWidth: undefined,
  position: undefined,
  prependIcon: undefined,
  readonly: false,
  replace: false,
  ripple: true,
  rounded: undefined,
  size: "default",
  slim: false,
  stacked: false,
  tag: "button",
  text: "Button",
  theme: undefined,
  tile: false,
  to: undefined,
  value: undefined,
  variant: "elevated",
  width: undefined
});

const emits = defineEmits<{
  click: [label: string];
}>()
</script>

<template>
  <div>
<!--    {{ rounded }},{{ loading }},{{density}}-->
    <v-btn
      :active="active"
      :activeColor="activeColor"
      :appendIcon="appendIcon"
      :baseColor="baseColor"
      :block="block"
      :border="border"
      :color="color"
      :density="density"
      :disabled="disabled"
      :elevation="elevation"
      :exact="exact"
      :flat="flat"
      :height="height"
      :href="href"
      :icon="icon"
      :loading="loading"
      :location="location"
      :maxHeight="maxHeight"
      :maxWidth="maxWidth"
      :position="position"
      :prependIcon="prependIcon"
      :readonly="readonly"
      :replace="replace"
      :ripple="ripple"
      :rounded="rounded"
      :selectedClass="selectedClass"
      :size="size"
      :slim="slim"
      :stacked="stacked"
      :symbol="symbol"
      :tag="tag"
      :text="text"
      :theme="theme"
      :tile="tile"
      :to="to"
      :value="value"
      :variant="variant"
      :width="width"
      @click="() => emits('click', 'Event')"
    />
  </div>
</template>
