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

    <header class="header">КОНТАКТЫ</header>
    <section class="section-text">
      <p><mark>Адрес:</mark> Конгресс-центр, ауд. 425к (Бауманская улица, 57)</p>
      <p><mark>Председатель Студенческого совета МГТУ им. Н.Э. Баумана (Георгий):</mark> +7 (985) 436-58-91</p>
      <p><mark>Главный организатор мероприятия (Екатерина):</mark> +7 (800) 555-35-35</p>
      <p><mark>Глава отдела по работе с партнёрами в Студенческом совете МГТУ им. Н.Э. Баумана (Динар):</mark> +7 (800) 555-35-35</p>
      <p><mark>Канал в мессенджере MAX:</mark> <a href="https://max.ru/id7701002520_gos47" target="_blank">https://max.ru/id7701002520_gos47</a></p>
      <p><mark>Группа ВКонтакте:</mark> <a href="https://vk.com/miss_bmstu" target="_blank">https://vk.com/miss_bmstu</a></p>
      <p><mark>Telegram-канал:</mark> <a href="https://t.me/miss_bmstu" target="_blank">https://t.me/miss_bmstu</a></p>
    </section>

    <header class="header">ФИНАЛИСТКИ 2026</header>
    <section class="section-text">
      <p><mark>Как проголосовать за свою фаворитку?</mark></p>
      <p>Чтобы поддержать участницу, отправь SMS на номер 5533 в формате: «СТУД [номер участницы]».</p>
      <p>Пример: если голосуешь за финалистку №1, отправь: СТУД 1 (пробел обязателен, регистр букв не имеет значения).</p>
      <p>Голосование доступно для абонентов: Билайн, МТС, Мегафон, Tele2, Тинькофф, Мотив.</p>
      <p>Стоимость SMS — 11 рублей. Подтверждающее сообщение оператору — бесплатно.</p>
      <p>Организатор голосования: Mvote.ru.</p>
    </section>

    <header class="header">СТРАНИЦЫ ФИНАЛИСТОК</header>
    <section class="section-text">
      <ViewPortWatcher on-ref="finalist-1" v-model="nominationsVisible[7]" :bottom-offset="100" :top-offset="-200">
        <div ref="finalist-1" class="nomination-container" :class="{'hidden': !nominationsVisible[7]}">
          <header class="nomination-header">1. Густова Анастасия</header>
          <p><mark>Группа:</mark> ИБМ2-41Б</p>
          <p>Воздух — это вечное движение, это жажда простора и невозможность стоять на месте. Моя суть — это стремление. Стремление наполнить каждый свой вдох чем-то ярким, незабываемым, таким, от чего захватывает дух. Я не жду у моря погоды — я сама создаю ветер перемен. Для меня чувствовать себя живой — значит быть в ритме. В ритме города, танца, новых открытий. Я словно разгоняюсь до той самой скорости, где прошлое остается красивым кадром в зеркале заднего вида, а будущее манит своей бесконечностью.</p>
          <p><mark>«Очарование — искренность и принятие себя до безумства, даже самая глупая шутка притягательна и вызывает улыбку. Очаровательные люди не только про красоту, а про внутреннее ощущение этой жизни, про умение радоваться мелочам»</mark></p>
          <p>Густова Анастасия</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="finalist-2" v-model="nominationsVisible[8]" :bottom-offset="100" :top-offset="-200">
        <div ref="finalist-2" class="nomination-container" :class="{'hidden': !nominationsVisible[8]}">
          <header class="nomination-header">2. Мухамедшина Виолетта</header>
          <p><mark>Группа:</mark> СГН2-61Б</p>
          <p>Моя стихия — вода. Мне нравится ее глубина, сила и таинственность. Мы можем видеть спокойную синюю гладь, но не знаем, сколько подводных течений таится под ней. А возможно, легкие волны — это лишь затишье перед бурей, и скоро эта стихия накроет с головой.</p>
          <p><mark>«Очарование — это сочетание природной харизмы, нежности и внутренней красоты, способность дарить радость всем людям вокруг»</mark></p>
          <p>Мухамедшина Виолетта</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="finalist-3" v-model="nominationsVisible[9]" :bottom-offset="100" :top-offset="-200">
        <div ref="finalist-3" class="nomination-container" :class="{'hidden': !nominationsVisible[9]}">
          <header class="nomination-header">3. Глухих Полина</header>
          <p><mark>Группа:</mark> МТ9-41Б</p>
          <p>Моя стихия — вода. Она может быть и спокойной, и бушевать в шторме, но при этом остается плавной и масштабной, что успокаивает душу, и одновременно завораживает.</p>
          <p><mark>«Очарование — состояние души, когда человек умеет любить жизнь, людей и самого себя. Это искренность и способность видеть красоту в мире и делиться этой красотой!»</mark></p>
          <p>Глухих Полина</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="finalist-4" v-model="nominationsVisible[10]" :bottom-offset="100" :top-offset="-200">
        <div ref="finalist-4" class="nomination-container" :class="{'hidden': !nominationsVisible[10]}">
          <header class="nomination-header">4. Васина Софья</header>
          <p><mark>Группа:</mark> ЮР-41</p>
          <p>Моя стихия — земля. Незыблемый фундамент и монолитная опора, на которой строится порядок среди хаоса. Она проявляется в моей гранитной стойкости перед любыми задачами и в глубоких пластах знаний, дающих вам твердую почву под ногами. Я — та самая благодатная твердь, где ваши идеи пускают крепкие корни и превращаются в великие свершения.</p>
          <p><mark>«Очарование — это сочетание внутренней уверенности, доброты и харизмы. Это способность притягивать людей к себе и оставлять о себе положительное впечатление»</mark></p>
          <p>Васина Софья</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="finalist-5" v-model="nominationsVisible[11]" :bottom-offset="100" :top-offset="-200">
        <div ref="finalist-5" class="nomination-container" :class="{'hidden': !nominationsVisible[11]}">
          <header class="nomination-header">5. Усова Анастасия</header>
          <p><mark>Группа:</mark> РЛ1-49</p>
          <p>Огонь даёт энергию для всего: гореть на сцене, выкладываться до последнего и не бояться быть яркой. Я Овен — первый и загорающийся идеями с пол-оборота. Здесь огонь — не разрушительный, а тёплый и зажигательный, который согревает близких и помогает зажигать других.</p>
          <p><mark>«Когда человек не пытается понравиться, но от него невозможно оторвать взгляд. Это про внутреннее состояние человека.»</mark></p>
          <p>Усова Анастасия</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="finalist-6" v-model="nominationsVisible[12]" :bottom-offset="100" :top-offset="-200">
        <div ref="finalist-6" class="nomination-container" :class="{'hidden': !nominationsVisible[12]}">
          <header class="nomination-header">6. Кирей Полина</header>
          <p><mark>Группа:</mark> СМ10-41</p>
          <p>Моя стихия — воздух. Воздушные люди очень общительны и коммуникабельны, это всё про меня. Я люблю нестандартные решения и мне нравится узнавать что-то новое. Я думаю, что смогу раскрыть себя в таком ключе, о котором сама и не догадывалась.</p>
          <p><mark>«Очарование — это когда от человека исходит какой-то особенный, тёплый свет. Когда его внутренняя гармония и неповторимость отражается во взгляде, в улыбке, в каждом жесте. Когда человек не притворяется, он настоящий, и эта уникальность завораживает и притягивает, как магия»</mark></p>
          <p>Кирей Полина</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="finalist-7" v-model="nominationsVisible[13]" :bottom-offset="100" :top-offset="-200">
        <div ref="finalist-7" class="nomination-container" :class="{'hidden': !nominationsVisible[13]}">
          <header class="nomination-header">7. Данилова Анастасия</header>
          <p><mark>Группа:</mark> АК1-101</p>
          <p>Почему воздух? Потому что это про меня. Воздух легкий, прозрачный, он не напрягается, чтобы быть везде. Он просто есть. И я такая же: не люблю усложнять, пытаюсь все в этой жизни упростить и просто жить, наслаждаясь. Мне легко с людьми, мне легко в новой компании, мне легко браться за новое дело. Воздух не застрянет в одной точке — ему нужно движение. И мне тоже. Если я перестаю двигаться, пробовать новое, я задыхаюсь. Воздух всегда ищет новое пространство, так же и я. Мне говорят: «Выбери что-то одно: музыка, спорт, шитье», а я не могу. Потому что я как воздух. Я хочу быть везде, пробовать всё, касаться всего.</p>
          <p><mark>«Очарование — это когда ты можешь зарядить людей своей улыбкой, поднять им настроение одним взглядом.»</mark></p>
          <p>Данилова Анастасия</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="finalist-8" v-model="nominationsVisible[14]" :bottom-offset="100" :top-offset="-200">
        <div ref="finalist-8" class="nomination-container" :class="{'hidden': !nominationsVisible[14]}">
          <header class="nomination-header">8. Козлова Полина</header>
          <p><mark>Группа:</mark> ФН11-22Б</p>
          <p>Моя стихия — земля. На мой взгляд, это самая разносторонняя стихия: земля может быть и в виде плодородного чернозема, и в виде песка в пустыне, и в виде многолетней мерзлоты. Она может быть разной, но остается стабильной, умеет как получать ресурсы, так и отдавать их безвозмездно, и думаю, именно в этом она отражается во мне.</p>
          <p><mark>«Очарование — это совокупность множества положительных качеств: доброты, отзывчивости, искренности, женственности, стойкости, открытости, уверенности и целеустремленности. Это способность быть одновременно и вдохновленной, и вдохновляющей.»</mark></p>
          <p>Козлова Полина</p>
        </div>
      </ViewPortWatcher>

      <ViewPortWatcher on-ref="finalist-9" v-model="nominationsVisible[15]" :bottom-offset="100" :top-offset="-200">
        <div ref="finalist-9" class="nomination-container" :class="{'hidden': !nominationsVisible[15]}">
          <header class="nomination-header">9. Денисова Ольга</header>
          <p><mark>Группа:</mark> ИУ10-26</p>
          <p>Моя стихия — вода. Ее уникальность в том, что она существует в трёх агрегатных состояниях. Я могу быть плавной и гибкой, как жидкая вода. Могу быть твёрдой и уверенной, как лёд. А могу стать лёгкой и мечтательной, как пар. Для меня быть как вода — значит не бояться проявлять себя с разных сторон.</p>
          <p><mark>«Очарование — это не про идеальную внешность, а про возможность притягивать людей своей энергетикой»</mark></p>
          <p>Денисова Ольга</p>
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
