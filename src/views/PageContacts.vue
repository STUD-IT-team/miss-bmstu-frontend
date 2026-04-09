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
      <a class="contact" href="https://yandex.ru/maps/-/CHF-Z-mO" target="_blank">Конгресс-центр, ауд. 425к (Бауманская улица, 57)</a>
      
      <label>Председатель Студенческого совета МГТУ им. Н.Э. Баумана (Георгий)</label>
      <a class="contact" href="tel:+79854365891" target="_blank">+7 (985) 436-58-91</a>
      
      <label>Главный организатор мероприятия (Екатерина)</label>
      <a class="contact" href="tel:+78005553535" target="_blank">+7 (800) 555-35-35</a>
      
      <label>Глава отдела по работе с партнёрами в Студенческом совете МГТУ им. Н.Э. Баумана (Динар)</label>
      <a class="contact" href="tel:+78005553535" target="_blank">+7 (800) 555-35-35</a>
      
      <label>Канал в мессенджере MAX</label>
      <a class="contact" href="https://max.ru/id7701002520_gos47" target="_blank">MAX: id7701002520_gos47</a>
      
      <label>Группа ВКонтакте</label>
      <a class="contact" href="https://vk.com/miss_bmstu" target="_blank">vk.com/miss_bmstu</a>
      
      <label>Telegram-канал</label>
      <a class="contact" href="https://t.me/miss_bmstu" target="_blank">t.me/miss_bmstu</a>
    </section>
  </div>
</template>

<script>
</script>
