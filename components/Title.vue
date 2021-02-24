<template>
  <div class="bg">
    <span>{{ title }}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
@import '@/assets/css/fonts.css';

.bg {
  background-color: black;
  padding: 10px;
}
span {
  color: white;
  font-family: 'Octin Sports Rg' !important;
  color: #fc4c02;
  font-size: 10vw;
  font-family: monospace;
}
@media screen and (min-width: 800px) {
  span {
    font-size: 50px;
  }
}
@media screen and (max-width: 500px) {
  span {
    font-size: 50px;
  }
}
</style>
