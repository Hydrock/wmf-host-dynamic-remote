# wmf-host

Приложение - Host - Для динамической загрузки (runtime) модулей WMF

## Guide

**I)** Клонируйте два приложения (Host и Remote) в вашу рабочую директорию:

```bash

git clone https://github.com/Hydrock/wmf-host-dynamic-remote.git

git clone https://github.com/Hydrock/wmf-remote-dynamic-remote.git

```

**II)** Установите зависимости в каждом приложении:

```bash
yarn install
```

**III)** Запустите оба приложения 

```bash
yarn start
```

**Host** приложение будет запущено на порту **8081**.

**Remote** приложение будет запущено на порту **8082**.
