<template>
  <div>
    <div class="athletes bgGrey">
      <div v-for="a in athletes" :key="a.id" class="athlete">
        <div class="left">
          <img :src="require('@/assets/defaults/profile.png')" />
          <img hidden="true" :src="a.profile" @load="onLoad" />
          <span class="name">{{ a.firstname }}</span>
        </div>
        <div class="right">
          <div>
            <div class="progress">
              {{ Math.floor(a.ytd_run_totals / 1000) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    athletes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onLoad(e) {
      e.path[1].children[0].hidden = true
      e.path[0].hidden = false
    },
  },
}
</script>
<style scoped>
@import '@/assets/css/fonts.css';

.athletes {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 15px;
  border-radius: 10px;
}
.bgGrey {
  background-color: rgba(226, 224, 224, 0.767);
}
.athlete {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  margin: 10px;
}
.athlete * {
  margin: 5px;
}
.athlete .left {
  display: flex !important;
  flex-wrap: wrap;
  flex-direction: column !important;
  justify-content: center;
  align-items: center;
}
.athlete .right {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end !important;
}
.athlete img {
  border-radius: 50%;
  width: 80px;
}
.athlete .name {
  font-size: 18px;
}
.athlete .progress {
  -webkit-text-stroke: 0px black; /* width and color */

  font-size: 48px;
  color: #fc4c02;
  font-family: 'Octin Sports Rg' !important;
}
</style>
