# Фронтенд сайта "Мисс Очарование МГТУ 2024"
Разворачивается в _Docker_ с раздачей через _Nginx_ и авто-получением сертификатов _Letsencript_

# Предыдущие версии и дизайны см. [в тэгах](https://github.com/STUD-IT-team/miss-bmstu-frontend/tags)

## Развертка для разработки
```SHELL
npm run dev
```
_У вас должна быть установлена `node`. [Установка Node.js](https://nodejs.org/en/download)_

# Развертка в деплой
Развертка выполняется через команды в `Makefile`

## 1. Клонируем репозиторий:
```SHELL
git clone git@github.com:SergTyapkin/vue-frontend-template.git
```

## 2. Настраиваем вообще всё.
В самом начале нужно будет настроить `.env` файл, прописать правильный `DOMAIN_URL`
```SHELL
cd vue-frontend-template
make all # not just "make"!
````
Всё. Наслаждаемся тем, что за нас всё сделали, установили докер, сайт раздаётся, сертификаты обновляются.
Теперь `Github CI` сам будет проверять, собирается ли контейнер при **Pull Request**'ах, а при **Push**'ах в ветку `master` будет автоматически выполняться `make update` на сервере и обновлять деплой!

_После выполнения не забываем прописать переменные, значения которых команда выдала в консоль, в настройки окружения репозитория на Github, как это написано в пункте 3._

### Полный список действий скриптов
1. Устанавливает `docker`, если его ещё нет
2. Добавляет текущего пользователя в группу `Docker`, чтобы запускать его без `sudo`
3. Предлагает настроить `.env` файл
4. Получает сертификаты Letsencrypt
5. Устанавливает и настраивает `cron` на ежемесячное обновление сертификатов
6. Создаёт пару SSH ключей, публичный добавляет в `~/.ssh/authorized_keys`, приватный выводит в консоль, его нужно добавить как секретную переменную среды `SSH_DEPLOY_KEY` в настройках Github.
7. Собирает приложение из последнего коммита в ветку `master`, запускает финальный docker-контейнер с ним

## 3. Установка переменных
1. Заходим в `Settings` -> `Environments`, создаём новое окружение под названием `deploy` (важно).
   ![](/README_res/1.png)
2. Создаём внутри окружения все необходимые переменные. Их выведет `make all` после завершения выполнения, или можно прописать самому.
   ![](/README_res/2.png)
