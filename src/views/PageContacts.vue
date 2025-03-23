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
  .contacts
    border-radius borderRadiusL
    border 2px solid colorDarkBlocksBorders
    padding 18px 20px
    margin-bottom 60px
    font-large()
    label
      display block
      color colorDarkBgText
      font-medium()
    .contact:not(:last-child)
      display block
      margin-bottom 15px
    .contact
      hover-effect()

  .organizers-container
    display flex
    flex-wrap wrap
    gap 20px
    justify-content center
    margin-bottom 100px
    .organizer-card
      width 270px
</style>

<template>
  <div class="root-page-vote">
    <header class="header">КОНТАКТЫ</header>
    <section class="contacts">
      <label>Адрес</label>
      <a class="contact" href="https://yandex.ru/maps/-/CHF-Z-mO" target="_blank">Конгресс-центр, ауд. 425к (г. Москва, Бауманская улица, 57)</a>
      <label>Телефон</label>
      <a class="contact" href="tel:+79022741631" target="_blank">+7 (902) 274-16-31</a>
      <label>Группа VK</label>
      <a class="contact" href="https://vk.com/miss_bmstu" target="_blank">vk.com/miss_bmstu</a>
      <label>Канал TG</label>
      <a class="contact" href="https://t.me/miss_bmstu" target="_blank">t.me/miss_bmstu</a>
      <label>E-mail</label>
      <a class="contact" href="mailto:miss.bmstu@yandex.ru" target="_blank">miss.bmstu@yandex.ru</a>
    </section>

    <section class="organizers-container">
      <OrganizerCard class="organizer-card"
                     :image-webp="Webp2"
                     :image-jpg="Jpg2"
                     name="Тимофей Суслов"
                     phone="+7 (916) 574-36-99"
                     mail="suslov@bmstu.ru"
                     telegram="tvsuslov"
                     title="Председатель Студенческого Совета"
      ></OrganizerCard>
      <OrganizerCard class="organizer-card"
                     :image-webp="Webp3"
                     :image-jpg="Jpg3"
                     name="Мария Ильиных"
                     phone="+7 (902) 274-160-31 "
                     mail="mariailinyh612@gmail.com "
                     telegram="maria_ilinyh"
                     title="Главный организатор конкурса"
      ></OrganizerCard>
      <OrganizerCard class="organizer-card"
                     :image-webp="Webp1"
                     :image-jpg="Jpg1"
                     name="Александра Манжина"
                     phone="+7 (916) 244-81-87"
                     mail="sashamanzhina@mail.ru"
                     telegram="alexsandramanzhina"
                     title="Ответственный за работу с партнерами"
      ></OrganizerCard>
    </section>
  </div>
</template>

<script>
import OrganizerCard from "~/components/OrganizerCard.vue";
import Webp200_1 from '#~/images/miss-organizers/webp-200/1.webp';
import Webp200_2 from '#~/images/miss-organizers/webp-200/2.webp';
import Webp200_3 from '#~/images/miss-organizers/webp-200/3.webp';
import Jpg200_1 from '#~/images/miss-organizers/jpg-200/1.jpg';
import Jpg200_2 from '#~/images/miss-organizers/jpg-200/2.jpg';
import Jpg200_3 from '#~/images/miss-organizers/jpg-200/3.jpg';
import Webp400_1 from '#~/images/miss-organizers/webp-400/1.webp';
import Webp400_2 from '#~/images/miss-organizers/webp-400/2.webp';
import Webp400_3 from '#~/images/miss-organizers/webp-400/3.webp';
import Jpg400_1 from '#~/images/miss-organizers/jpg-400/1.jpg';
import Jpg400_2 from '#~/images/miss-organizers/jpg-400/2.jpg';
import Jpg400_3 from '#~/images/miss-organizers/jpg-400/3.jpg';

export default {
  components: {OrganizerCard},

  data() {
    return {
      Webp1: `${Webp200_1} 200w, ${Webp400_1} 400w`,
      Webp2: `${Webp200_2} 200w, ${Webp400_2} 400w`,
      Webp3: `${Webp200_3} 200w, ${Webp400_3} 400w`,
      Jpg1: `${Jpg200_1} 200w, ${Jpg400_1} 400w`,
      Jpg2: `${Jpg200_2} 200w, ${Jpg400_2} 400w`,
      Jpg3: `${Jpg200_3} 200w, ${Jpg400_3} 400w`,
    }
  }
}
</script>
