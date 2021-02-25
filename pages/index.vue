<template>
  <div>
    <div class="site">
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
        <div>
          <AthleteDetail
            v-if="$store.state.athlete.detail.id"
            :on="$store.state.athlete.detail.id > 0 ? true : false"
            :image="$store.state.athlete.detail.profile"
            :name="
              $store.state.athlete.detail.firstname +
              ' ' +
              $store.state.athlete.detail.lastname
            "
            :id="$store.state.athlete.detail.id"
          />
        </div>
      </div>
    </div>
    <div class="bottom">
      <Footer />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Title from '@/components/Title'
import Athletes from '@/components/Athletes'
import AthleteDetail from '@/components/AthleteDetail'
import Footer from '@/components/Footer'

export default {
  components: {
    Logo,
    Title,
    Athletes,
    AthleteDetail,
    Footer,
  },
  data() {
    return {
      athleteProfiles: [],
    }
  },
  async fetch() {
    const Athletes = [176, 202, 208, 210, 209].sort()
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
.site {
  min-height: 100vh;
}
.sections {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.bottom {
  margin-top: 2.5rem;
}
</style>
