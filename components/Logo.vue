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
<style>
.logo {
  margin: auto;
  width: 480px;
}

.sm {
  width: 120px !important;
}
.md {
  width: 320px !important;
}
.lg {
  width: 480px !important;
}

@media screen and (min-width: 800px) {
  .sm {
    width: 120px !important;
  }
  .md {
    width: 480px !important;
  }
  .lg {
    width: 570px !important;
  }
}
</style>
