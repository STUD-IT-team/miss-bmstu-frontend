<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'

.root-page-vote
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
    margin-bottom 30px
    font-medium()
    p:not(:last-child)
      margin-bottom 10px
    a
      text-decoration underline
      hover-effect()
    mark
      background none
      color colorDarkBgText
</style>

<template>
  <div class="root-page-vote">
    <header class="header">ФИНАЛИСТКИ 2025</header>
    <section class="main-text">
      <p>
        Чтобы поддержать участницу, <mark>отправь SMS</mark> на номер {{ phoneNumberToVoting }} в&nbsp;формате: «СТУД [номер участницы]».
      </p>
      <p>
        Пример, если голосуешь за&nbsp;конкурсантку №1, нужно отправить SMS на&nbsp;номер <mark>{{ phoneNumberToVoting }}</mark><br>
        с&nbsp;кодом: <mark>СТУД 1</mark> (пробел обязателен, регистр букв значения не&nbsp;имеет).
      </p>
      <p>Голосование доступно для абонентов: Билайн, Мегафон, Tele2, Тинькофф, Мотив.</p>
      <p>
        Стоимость  <mark>SMS</mark> - 11&nbsp;рублей. Подтверждающее сообщение оператору — бесплатно.
      </p>
      <p>Организатор голосования: <a href="https://mvote.ru" target="_blank">Mvote.ru</a></p>
    </section>
    <MissCardsContainer show-votes></MissCardsContainer>
  </div>
</template>

<script>
import {phoneNumberToVoting} from "~/utils/constantsMiss";
import MissCardsContainer from "~/components/MissCardsContainer.vue";

export default {
  components: {MissCardsContainer},
  data() {
    return {
      phoneNumberToVoting,
    }
  },

  mounted() {
  },

  methods: {
  }
}
</script>
