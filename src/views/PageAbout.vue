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
      <p><mark>«МиСС Очарование»</mark> — это не просто конкурс, а пространство, где студентки раскрывают свои таланты, проявляют индивидуальность и уверенно заявляют о себе.</p>
      <p>В этом году проекту <mark>исполняется 24 года</mark> — и он по-прежнему остаётся ярким, актуальным и любимым среди студентов. Его миссия — помогать участницам раскрывать свой потенциал, развивать таланты, формировать социально ответственную и патриотичную личность, а также вовлекать студентов в активную общественную жизнь. Особое внимание уделяется популяризации науки и профессии инженера в Университете.</p>
      <p>Подготовка к конкурсу длится почти <mark>два месяца</mark> и становится настоящим творческим марафоном: репетиции номеров, дефиле, театральные постановки, съемки, интервью и фотосессии. Такой насыщенный процесс помогает каждой участнице <mark>раскрыться</mark> и в финале быть уверенной, яркой и готовой покорять зрителей на Бауманской сцене.</p>
      <p><mark>Этапы финала конкурса:</mark></p>
      <ul class="listing">
        <li>Видеовизитка</li>
        <li>Общий танец</li>
        <li>Дефиле участниц</li>
        <li>Творческий номер</li>
        <li>Общая театральная постановка</li>
        <li>Конкурс «Лучшая группа поддержки»</li>
      </ul>
      <p>По итогам всех этапов определяются победительницы и <mark>проходит награждение</mark> финалисток!</p>
    </section>



    <header class="header">ЖЮРИ</header>
    <section class="section-text">
      <p>В состав жюри конкурса входят представители администрации Университета и партнёры мероприятия. Коллегию возглавляет президент МГТУ им. Н.Э. Баумана, доктор технических наук А.А. Александров.</p>
    </section>

<!--    <header class="header">ЖЮРИ</header>-->
<!--    <section class="section-text">-->
<!--      <p>В состав членов жюри конкурса входит администрация Университета и партнеры нашего мероприятия. Возглавляет коллегию президент МГТУ&nbsp;им.&nbsp;Н.Э.&nbsp;Баумана, доктор технических наук, А.А. Александров.</p>-->
<!--      <p>В разные годы проведения конкурса в состав жюри входили следующие известные личности:</p>-->
<!--      <ul class="listing">-->
<!--        <li>Российский космонавт-испытатель, герой России — Олег Германович Артемьев;</li>-->
<!--        <li>Исполнительный директор Госкорпорации «Ростех» — Олег Николаевич Евтушенко</li>-->
<!--        <li>Генеральный директор АО «Объединённая приборостроительная корпорация» — Сергей Степанович Сахненко;</li>-->
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
      <ViewPortWatcher on-ref="nomination-1" v-model="nominationsVisible[1]" :bottom-offset="100" :top-offset="-200" :no-hide="true">
        <div ref="nomination-1" class="nomination-container">
          <header class="nomination-header">МИСС ОЧАРОВАНИЕ</header>
          <p>Главная номинация присуждается <mark>победительнице конкурса</mark> — участнице, набравшей наибольшее количество баллов по итогам всех пяти туров финала.</p>
          <p>Каждый член жюри <mark>индивидуально</mark> оценивает участниц, выставляя баллы в специальный бланк. После каждого этапа результаты выводятся на большой экран сцены. Жюри не обсуждает оценки между собой и не влияет на решения друг друга — голосование проходит независимо.</p>
          <p>По итогам финала все баллы суммируются. Участница с наибольшим количеством баллов становится победительницей конкурса, а занявшая второе место получает титул <mark>«Вице-мисс»</mark>.</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="nomination-2" v-model="nominationsVisible[2]" :bottom-offset="100" :top-offset="-200" :no-hide="true">
        <div ref="nomination-2" class="nomination-container">
          <header class="nomination-header">МИСС ОВАЦИЯ</header>
          <p>В этой номинации <mark>решающую роль играют зрители</mark> финала. Каждый гость конкурса может отдать свой голос за участницу, которая, по его мнению, достойна победы.</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="nomination-3" v-model="nominationsVisible[3]" :bottom-offset="100" :top-offset="-200" :no-hide="true">
        <div ref="nomination-3" class="nomination-container">
          <header class="nomination-header">МИСС ОНЛАЙН</header>
          <p>Победительница определяется по итогам <mark>SMS-голосования</mark>, которое проходит во время подготовки к конкурсу и завершается непосредственно в финале. Результаты в режиме реального времени отображаются на сайте. Самый активный участник голосования — тот, кто отправит наибольшее количество SMS — получает возможность выйти на сцену и лично вручить приз победительнице.</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="nomination-4" v-model="nominationsVisible[4]" :bottom-offset="100" :top-offset="-200" :no-hide="true">
        <div ref="nomination-4" class="nomination-container">
          <header class="nomination-header">МИСС ДРУЖБА</header>
          <p>Единственная номинация, в которой <mark>выбор делают сами участницы</mark>. Тайное голосование проходит за день до финала: каждая отдаёт голос той, кто стала душой коллектива и поддержкой для остальных в период подготовки.</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="nomination-5" v-model="nominationsVisible[5]" :bottom-offset="100" :top-offset="-200" :no-hide="true">
        <div ref="nomination-5" class="nomination-container">
          <header class="nomination-header">МИСС ЦЕЛЕУСТРЕМЛЕННОСТЬ</header>
          <p>Победительницу в этой номинации <mark>определяет оргкомитет</mark> конкурса. В процессе подготовки с финалистками работают хореографы, постановщики дефиле, режиссеры, стилисты и фотографы. Оргкомитет оценивает уровень организованности, вовлеченности и мотивации участниц, после чего посредством тайного голосования выбирает ту, кто проявила максимальную целеустремленность на пути к финалу.</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="nomination-6" v-model="nominationsVisible[6]" :bottom-offset="100" :top-offset="-200">
        <div ref="nomination-6" class="nomination-container" :class="{'hidden': !nominationsVisible[6]}">
          <header class="nomination-header">НОМИНАЦИИ ОТ ПАРТНЁРОВ КОНКУРСА</header>
          <p>Партнёры мероприятия по согласованию с оргкомитетом могут учредить собственные специальные номинации и отметить участниц, которые им особенно запомнились.</p>
        </div>
      </ViewPortWatcher>
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
