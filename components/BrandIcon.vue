<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    role="img"
    :aria-label="icon.title"
    class="brand-icon"
  >
    <path :d="icon.path" :fill="color || icon.hex" />
  </svg>
</template>

<script>
import icons from './brandIcons.js'

export default {
  name: 'BrandIcon',
  props: {
    name: { type: String, required: true },
    size: { type: [Number, String], default: 24 },
    // Defaults to the brand colour; pass e.g. "currentColor" to override
    color: { type: String, default: null },
  },
  computed: {
    icon() {
      return icons[this.name]
    },
  },
}
</script>

<style>
.brand-icon {
  display: inline-block;
  flex-shrink: 0;
  vertical-align: middle;
}
</style>
