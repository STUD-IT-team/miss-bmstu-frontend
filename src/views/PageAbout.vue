<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/components.styl'
@require '../styles/scrollbars.styl'

.root-page-about
  .header
    font-large-x()
    text-align center
    color colorDarkBgText
    margin-bottom 15px
  .header-colored
    font-large-x()
    text-align center
    background colorEmpBgCards
    color colorText1
    padding 10px
    margin-bottom 15px
    margin-top 20px
    border-radius borderRadiusM

  .section-text
    font-medium()
    border-radius borderRadiusL
    border 2px solid colorDarkBlocksBorders
    padding 18px 30px
    margin-bottom 50px
    @media ({mobile})
      padding-left 10px
      padding-right 10px
    p:not(:last-child)
      margin-bottom 10px
    .listing
      list-style circle
      padding-left 20px
      margin-top -10px
      &:not(:last-child)
        margin-bottom 10px
    a
      text-decoration underline
      hover-effect()
    mark
      background none
      color colorDarkBgText

    .image-full-size
      width 100%
      min-height 500px
      @media ({mobile})
        min-height 300px
      border-radius borderRadiusM
      overflow hidden
      trans(1s)
      &.hidden
        opacity 0
        transform translateX(-10px)
    .horizontal-scroll-container
      display flex
      gap 10px
      overflow-x auto
      padding-bottom 5px
      scrollable()
      .jury-container
        display flex
        flex-direction column
        align-items center
        gap 10px
        min-width 200px
        width 200px
        border 2px solid colorDarkBlocksBorders
        border-radius borderRadiusS
        overflow hidden
        img
          width 100%
          overflow hidden
          background mix(white, transparent, 70%)
        .name
          font-medium()
    .nomination-container
      trans(.6s)
      .nomination-header
        font-large-x()
        text-align center
        padding 3px
        margin-bottom 22px
        border-bottom 2px solid colorLinesBorders
        opacity 1
      &:not(:first-child)
        margin-top 60px
      &.hidden
        opacity 0
        transform translateX(-10px)
</style>

<template>
  <div class="root-page-about">
    <header class="header">О КОНКУРСЕ</header>
    <section class="section-text">
      <p><mark>«МиСС Очарование»</mark> — это&nbsp;мероприятие для&nbsp;студенток, которое позволяет демонстрировать свои способности и&nbsp;таланты!</p>
      <p>В этом году конкурсу <mark>исполняется 23&nbsp;года</mark>, и&nbsp;он по-прежнему актуален и&nbsp;любим студентами. Его&nbsp;цель — реализация потенциала студентов, развитие их&nbsp;талантов, воспитание патриотичной и&nbsp;социально ответственной личности, а&nbsp;также вовлечение студентов в&nbsp;общественную жизнь, популяризация научной деятельности и&nbsp;профессии инженера в&nbsp;Университете.</p>
      <p>Подготовка к&nbsp;конкурсу длится почти <mark>2&nbsp;месяца</mark> и&nbsp;включает репетиции творческих номеров, дефиле и&nbsp;театральной постановки, съёмки, интервью и&nbsp;фотосессии. Такая интенсивная подготовка позволяет каждой участнице <mark>раскрыть себя</mark> на&nbsp;финале, где&nbsp;они продемонстрируют свои таланты перед зрителями на&nbsp;Бауманской сцене.</p>
      <p><mark>Этапы финала конкурса:</mark></p>
      <ul class="listing">
        <li>Видеовизитка</li>
        <li>Общий танец</li>
        <li>Дефиле участниц</li>
        <li>Творческий номер</li>
        <li>Общая театральная постановка</li>
        <li>Конкурс «Лучшая группа поддержки»</li>
      </ul>
      <p>После проведения всех этапов <mark>подводятся итоги</mark> и, конечно же, <mark>проходит награждение</mark> всех финалисток.</p>
    </section>

    <header class="header">ЖЮРИ</header>
    <section class="section-text">
      <p>В состав жюри конкурса входят представители администрации Университета и партнёры мероприятия. Коллегию возглавляет президент МГТУ им. Н.Э. Баумана, доктор технических наук А.А. Александров.</p>
      <p><mark>За годы проведения конкурса в состав жюри входили яркие и известные личности:</mark></p>
      <ul class="listing">
        <li>Олег Германович Артемьев — российский космонавт-испытатель, Герой России</li>
        <li>Олег Николаевич Евтушенко — исполнительный директор Госкорпорации «Ростех»</li>
        <li>Сергей Степанович Сахненко — генеральный директор АО «Объединенная приборостроительная корпорация»</li>
        <li>Сергей Александрович Куликов — председатель Правления АО «Роснано», выпускник МГТУ им. Н.Э. Баумана</li>
        <li>Юлия Михалкова — российская актриса и телеведущая</li>
      </ul>
    </section>

<!--    <header class="header">ЖЮРИ</header>-->
<!--    <section class="section-text">-->
<!--      <p>В состав членов жюри конкурса входит администрация Университета и партнеры нашего мероприятия. Возглавляет коллегию президент МГТУ&nbsp;им.&nbsp;Н.Э.&nbsp;Баумана, доктор технических наук, А.А. Александров.</p>-->
<!--      <p>В разные годы проведения конкурса в состав жюри входили следующие известные личности:</p>-->
<!--      <ul class="listing">-->
<!--        <li>Российский космонавт-испытатель, герой России — Олег Германович Артемьев;</li>-->
<!--        <li>Исполнительный директор Госкорпорации «Ростех» — Олег Николаевич Евтушенко</li>-->
<!--        <li>Генеральный директор АО «Объединенная приборостроительная корпорация» — Сергей Степанович Сахненко;</li>-->
<!--        <li>Председатель Правления акционерного общества «Роснано», выпускник МГТУ&nbsp;им.&nbsp;Н.Э.&nbsp;Баумана — Сергей Александрович Куликов;</li>-->
<!--        <li>Российская актриса и телеведущая — Юлия Михалкова.</li>-->
<!--      </ul>-->
<!--      <ul class="horizontal-scroll-container" ref="juryScrollerContainer">-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--        <li class="jury-container"><img class="image-jury-photo" src="/res/images/miss/imageMisska0.png" alt=""><span class="name">Антон Успенский</span></li>-->
<!--      </ul>-->
<!--    </section>-->

    <header class="header">НОМИНАЦИИ</header>
    <section class="section-text">
      <ViewPortWatcher on-ref="nomination-1" v-model="nominationsVisible[1]" :bottom-offset="100" :top-offset="-200"><div ref="nomination-1" class="nomination-container" :class="{'hidden': !nominationsVisible[1]}">
        <header class="nomination-header">МИСС ОЧАРОВАНИЕ</header>
        <p>Главная номинация присуждается победительнице конкурса. Она определяется суммарным голосованием жюри по&nbsp;всем пяти этапам финала конкурса.</p>
        <p>Каждый член жюри индивидуально ставит участнице оценку за&nbsp;каждый этап в&nbsp;бланк. Таблица результатов выводится на&nbsp;большой экран сцены после каждого этапа. Члены жюри не&nbsp;имеют права договариваться о&nbsp;совместном лоббировании тех или&nbsp;иных кандидаток.</p>
        <p>Результат вычисляется простым суммированием оценок, выставленных всеми членами жюри за&nbsp;все туры.</p>

        <p>Участница, набравшая наибольший суммарный балл, становится победительницей конкурса.</p>
        <p>Участница, занявшая второе место по&nbsp;результатам голосования жюри, получает титул «Вице-мисс».</p>
      </div></ViewPortWatcher>

      <ViewPortWatcher on-ref="nomination" v-model="nominationsVisible[2]" :bottom-offset="100" :top-offset="-200"><div ref="nomination" class="nomination-container" :class="{'hidden': !nominationsVisible[2]}">
        <header class="nomination-header">МИСС ОВАЦИЯ</header>
        <p>Победительница в данной номинации определяется очным голосованием зрительного зала. Каждый человек, который присутствует на финальном шоу, может отдать голос за понравившуюся ему участницу.</p>
      </div></ViewPortWatcher>

      <ViewPortWatcher on-ref="nomination-3" v-model="nominationsVisible[3]" :bottom-offset="100" :top-offset="-200"><div ref="nomination-3" class="nomination-container" :class="{'hidden': !nominationsVisible[3]}">
        <header class="nomination-header">МИСС ОНЛАЙН</header>
        <p>Данная номинация определяется sms-голосованием, которое проходит во&nbsp;время подготовки к&nbsp;конкурсу. Результат автоматически появляется на&nbsp;сайте, а&nbsp;самый активный участник (обладатель номера, с&nbsp;которого отправили наибольшее количество sms-сообщений) сможет выйти на&nbsp;сцену во&nbsp;время награждения и&nbsp;вручить приз победительнице в&nbsp;этой номинации.</p>
      </div></ViewPortWatcher>

      <ViewPortWatcher on-ref="nomination-4" v-model="nominationsVisible[4]" :bottom-offset="100" :top-offset="-200"><div ref="nomination-4" class="nomination-container" :class="{'hidden': !nominationsVisible[4]}">
        <header class="nomination-header">МИСС ДРУЖБА</header>
        <p>Мисс Дружба — единственная номинация, победительницу в&nbsp;которой выбирают сами участницы конкурса путём тайного голосования, проходящего за&nbsp;день до&nbsp;финального мероприятия. На&nbsp;протяжении всей подготовки к&nbsp;финалу девушки становятся настоящими подругами, а&nbsp;титул «Мисс Дружба» получает та&nbsp;девушка, которая стала душой прекрасного коллектива.</p>
      </div></ViewPortWatcher>

      <ViewPortWatcher on-ref="nomination-5" v-model="nominationsVisible[5]" :bottom-offset="100" :top-offset="-200"><div ref="nomination-5" class="nomination-container" :class="{'hidden': !nominationsVisible[5]}">
        <header class="nomination-header">МИСС ЦЕЛЕУСТРЕМЛЁННОСТЬ</header>
        <p>Мисс Целеустремлённость — номинация, присуждаемая оргкомитетом конкурса. Во&nbsp;время подготовки с&nbsp;финалистками работают профессионалы разных профилей: хореограф, преподаватель дефиле, режиссёры-постановщики, стилисты, фотографы и&nbsp;операторы. Для определения данной номинации организационный комитет оценивает самоорганизацию участниц и&nbsp;независимо друг от&nbsp;друга путём тайного голосования выбирает конкурсантку, которая больше всех сделала для желаемой победы.</p>
      </div></ViewPortWatcher>

      <ViewPortWatcher on-ref="nomination-6" v-model="nominationsVisible[6]" :bottom-offset="100" :top-offset="-200"><div ref="nomination-6" class="nomination-container" :class="{'hidden': !nominationsVisible[6]}">
        <header class="nomination-header">НОМИНАЦИИ ОТ&nbsp;ПАРТНЁРОВ КОНКУРСА</header>
        <p>Партнёрам мероприятия по&nbsp;согласованию с&nbsp;оргкомитетом предоставляется право учредить собственную номинацию и&nbsp;наградить любую понравившуюся участницу.</p>
      </div></ViewPortWatcher>
    </section>
  </div>
</template>

<script>
import ViewPortWatcher from "~/components/ViewPortWatcher.vue";

export default {
  components: {ViewPortWatcher},
  data() {
    return {
      juryScrollingTimer: undefined,

      nominationsVisible: {},
    }
  },


  mounted() {
    // this.juryScrollingTimer = setInterval(() => {
    //   this.$refs.juryScrollerContainer.scrollBy({left: 1});
    // }, 50);
    // window.addEventListener('message', this.listenWindowMessages);
  },
  unmounted() {
    // clearInterval(this.juryScrollingTimer);
    // window.removeEventListener('message', this.listenWindowMessages);
  },

  methods: {
    // listenWindowMessages(event) {
    //   const message = JSON.parse(event.data);
    //   console.log(message.type); // some type
    //   switch (message.type) {
    //     case 'player:changeState':
    //       console.log("PLAYER STATE CHANGED:", message.data.state); // текущее состояние плеера
    //       break;
    //     case 'player:ready':
    //       this.playVideo();
    //       break;
    //   }
    // },
    // playVideo() {
    //   this.$refs.rutubeIframePlayer.contentWindow.postMessage(JSON.stringify({
    //     type: 'player:play',
    //     data: {}
    //   }), '*');
    // }
  }
}
</script>
