<template>
  <div>
    <div :style="{ display: on ? 'block' : 'none' }">
      <div class="detail">
        <img :src="require('@/assets/defaults/profile.png')" />
        <img hidden="true" :src="image" @load="onLoad" />
        <span>{{ name }}</span>
        <button class="btnProfile">
          <a :href="'https://www.run4me.de/profile/' + id">zum Profil</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    on: {
      type: Boolean,
      require: true,
      default: false,
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
.detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
}
.detail * {
  margin: 5px;
}
.detail img {
  border-radius: 50%;
  width: 86px;
}
.content {
  background-color: lightgrey;
  border-radius: 15px;
}
.btnProfile {
  padding: 6px 12px;
  background-color: #fc4c02;
  color: white;
  border: 0px;
  border-radius: 0.25rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.btnProfile a {
  text-decoration: none;
  color: white;
  font-weight: 400;
  font-size: 1rem;
}
</style>
