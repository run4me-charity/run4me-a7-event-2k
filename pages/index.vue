<template>
  <div>
    <div class="sections">
      <section class="s1">
        <Logo size="sm" :logoPath="require('@/assets/logos/run4me.png')" />
      </section>
      <section class="s2">
        <Logo size="md" :logoPath="require('@/assets/logos/aware7.jpg')" />
      </section>
      <section>
        <Title title="2k Challange" />
      </section>
      <section>
        <div style="margin-top: 40px"></div>
      </section>
      <section>
        <Athletes :athletes="athleteProfiles" />
      </section>
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
    const Athletes = [176, 202]
    for (const a of Athletes) {
      const res = await fetch(
        `https://api.run4me.de/athletes/${a}/profile`
      ).then((res) => res.json())
      this.athleteProfiles.push(res)
    }
  },
  mounted() {
    console.log(this.athleteProfiles)
    for (const a of this.athleteProfiles) {
      console.log('AAAAAAA')
      console.log(a.imageBlob)
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

  margin-top: 2.5rem;
}
.sections * {
  margin: 5px;
}
</style>
