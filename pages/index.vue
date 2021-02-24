<template>
  <div>
    <div class="sections">
      <div class="s1">
        <Logo size="md" :logoPath="require('@/assets/logos/aware7.jpg')" />
        <Logo size="md" :logoPath="require('@/assets/logos/run4me.png')" />
      </div>
      <div>
        <Title title="2k Challenge" />
      </div>
      <div>
        <div style="margin-top: 25px"></div>
      </div>
      <div class="athletesContainer">
        <Athletes :athletes="athleteProfiles" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Title from '@/components/Title'
import Athletes from '@/components/Athletes'

export default {
  components: {
    Logo,
    Title,
    Athletes,
  },
  data() {
    return {
      athleteProfiles: [],
    }
  },
  async fetch() {
    const Athletes = [176, 202, 1, 3, 2, 7, 13].sort()
    for (const a of Athletes) {
      const res = await fetch(
        `https://api.run4me.de/athletes/${a}/profile`
      ).then((res) => res.json())
      this.athleteProfiles.push(res)
    }
  },
  fetchOnServer: true,
}
</script>
<style scoped>
.sections {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
}
.s1 {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.athletesContainer {
  padding: 2.5rem;
}
</style>
