<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'

.root-page-start
  .header
    font-large-x()
    font-normal()
    text-align center
    color colorPalette1
    margin-bottom 15px
</style>

<template>
  <div class="root-page-start">
    <header class="header">ФИНАЛИСТКИ 2025</header>
    <MissCardsContainer></MissCardsContainer>
  </div>
</template>

<script>
import MissCardsContainer from "~/components/MissCardsContainer.vue";

export default {
  components: {MissCardsContainer},

  data() {
    return {
    }
  },

  async mounted() {
  },

  methods: {
  }
}
</script>
