<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'

.root-page-final
  .header
    font-large-x()
    text-align center
    color colorDarkBgText
    margin-bottom 15px
  .main-text
    border-radius borderRadiusL
    border 2px solid colorDarkBlocksBorders
    text-align center
    padding 18px 40px
    margin-bottom 50px
    font-medium()
    p:not(:last-child)
      margin-bottom 10px
    mark
      background none
      color colorDarkBgText
  .cards-container-final
    list-style none
    display flex
    flex-direction column
    gap 20px
    align-items center
    margin-bottom 20px
  .cards-container-all
    max-width 900px
    centered-margin()
</style>

<template>
  <div class="root-page-final">
    <header class="header">РЕЗУЛЬТАТЫ КОНКУРСА<br>«МИСС ОЧАРОВАНИЕ – 2025»</header>

    <section class="main-text">
      <p><mark>25&nbsp;апреля</mark> в&nbsp;Большом зале Центра креативных индустрий прошел финал конкурса<br><mark>«МиСС Очарование  — 2025».</mark></p>
      <p>В этом году конкурс прошел в&nbsp;двадцать третий раз. На&nbsp;бауманской сцене выступили <mark>10&nbsp;финалисток</mark>, которые раскрыли свой талант и&nbsp;показали свою уникальность.</p>
      <p>Ниже представлены результаты конкурса.</p>
    </section>

    <section class="cards-container-final">
      <MissCardFinal class="card"
                     :group="missList[2].group"
                     :name="missList[2].name"
                     :id="missList[2].id"
                     :image-jpg="missList[2].imageJpg"
                     :image-webp="missList[2].imageWebp"
                     :nominations="missList[2].nominations"
                     title="МИСС ОЧАРОВАНИЕ"
      ></MissCardFinal>
      <MissCardFinal class="card"
                     :group="missList[7].group"
                     :name="missList[7].name"
                     :id="missList[7].id"
                     :image-jpg="missList[7].imageJpg"
                     :image-webp="missList[7].imageWebp"
                     :nominations="missList[7].nominations"
                     title="ВИЦЕ-МИСС"
                     light
      ></MissCardFinal>
    </section>
    <MissCardsContainer class="cards-container-all" :excluded-ids="[3, 8]" show-nominations></MissCardsContainer>
  </div>
</template>


<script>
import MissCardsContainer from "~/components/MissCardsContainer.vue";
import MissCardFinal from "~/components/MissCardFinal.vue";
import {missList} from "~/utils/constantsMiss";

export default {
  components: {MissCardsContainer, MissCardFinal},

  data() {
    return {
      missList,
    }
  },

  async mounted() {
  },

  methods: {
  }
}
</script>
