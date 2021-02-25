<template>
  <div>
    <div class="athletes bgGrey">
      <div v-for="(a, i) in athletes" :key="a.id" class="athlete">
        <img :src="require('@/assets/defaults/profile.png')" />
        <img
          hidden="true"
          :src="a.profile"
          @click="updateStoreAthlete(i)"
          @load="onLoad"
        />
        <span class="name">{{ a.firstname }}</span>
        <div class="progress">
          {{ Math.floor(a.ytd_run_totals / 1000) }}
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
  data() {
    return {
      detail: {
        on: false,
        athlete: {},
      },
    }
  },
  methods: {
    onLoad(e) {
      e.path[1].children[0].hidden = true
      e.path[0].hidden = false
    },
    updateStoreAthlete(index) {
      this.$store.commit('athlete/update', this.athletes[index])
    },
  },
}
</script>
<style scoped>
@import '@/assets/css/fonts.css';

.athletes {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 5px;
  border-radius: 10px;
}
.bgGrey {
  background-color: rgba(226, 224, 224, 0.767);
}
.athlete {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin: 5px;
}
.athlete * {
  padding: 5px;
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
  width: 64px;
}
.athlete img:hover {
  padding: 0;
  cursor: pointer;
  border: 1px solid #fc4c02;
}
.athlete span a {
  text-decoration: none;
  color: black;
}
.athlete .name {
  font-size: 16px;
}
.athlete .progress {
  -webkit-text-stroke: 0px black; /* width and color */

  font-size: 18px;
  color: #fc4c02;
  font-family: 'Octin Sports Rg' !important;
}
@media screen and (min-width: 800px) {
  .athlete img {
    width: 74px;
  }
  .athlete .name {
    font-size: 18px;
  }
  .athlete .progress {
    font-size: 24px;
  }
  .athlete {
    margin: 10px;
  }
}
</style>
