<template>
  <div>
    <div class="sections">
      <section class="s1">
        <Logo size="sm" :logoPath="require('@/assets/logos/run4me.png')" />
      </section>
      <section class="s2">
        <Logo size="md" :logoPath="require('@/assets/logos/aware7.svg')" />
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
  async mounted() {
    await this.fetch()
    console.log(this.athleteProfiles)
  },
  methods: {
    async fetch() {
      const Athletes = [176, 202]
      for (const a of Athletes) {
        this.athleteProfiles.push(
          await fetch(
            `https://api.run4me.de/athletes/${a}/profile`
          ).then((res) => res.json())
        )
      }
    },
  },

  // call fetch only on client-side
  fetchOnServer: false,
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
</style>
<style>
.flex-left {
  justify-content: flex-start !important;
}
.flex-row {
  flex-direction: row;
}
.flex-center {
  justify-content: center;
}
</style>
