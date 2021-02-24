<template>
  <div>
    <img class="logo" :class="size" :src="logoPath" />
  </div>
</template>
<script>
export default {
  props: {
    logoPath: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'md',
    },
  },
}
</script>
<style scoped>
.logo {
  padding: 1rem;
}
.sm {
  width: 120px !important;
}
.md {
  height: 87px !important;
}
.lg {
  width: 480px !important;
}

@media screen and (min-width: 800px) {
  .sm {
    width: 120px !important;
  }
  .md {
    height: 87px !important;
  }
  .lg {
    width: 480px !important;
  }
}
</style>
