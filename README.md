# knights

Este repositório contém um projeto que usa Docker Compose para orquestrar três serviços: `vue`, `nestjs` e `mongo`.

## Pré-requisitos

- Docker instalado
- Docker Compose instalado

## Como usar

1. **Clone o repositório**

    Primeiro, você precisa clonar o repositório que contém o arquivo `docker-compose.yml`.

2. **Navegue até o diretório**

    Navegue até o diretório que contém o arquivo `docker-compose.yml`.

3. **Construa e inicie os contêineres**

    Use o seguinte comando para construir e iniciar os contêineres:

    ```bash
    docker-compose up --build

    Serviços
**Vue**
    Este serviço é responsável por executar uma aplicação Vue.js. Ele é construído usando o Dockerfile Dockerfile.vue no diretório ./knights-challenge. O serviço mapeia a porta 8080 do contêiner para a porta 8080 do host.

**NestJS**
    Este serviço é responsável por executar uma aplicação NestJS. Ele é construído usando o Dockerfile Dockerfile.nestjs no diretório ./knights-challenge-api. O serviço mapeia a porta 3000 do contêiner para a porta 3000 do host.

**Mongo**
    Este serviço é responsável por executar um banco de dados MongoDB. Ele usa a imagem oficial do MongoDB do Docker Hub. O serviço mapeia a porta 27017 do contêiner para a porta 27017 do host.

**Volumes**
    Os volumes são usados para persistir dados entre os contêineres e o host. Neste caso, os volumes são usados para persistir os dados do MongoDB e os módulos do node para as aplicações Vue.js e NestJS.

**Variáveis de Ambiente**
    A variável de ambiente CHOKIDAR_USEPOLLING é usada no serviço Vue para habilitar o polling, que é uma maneira de verificar as mudanças nos arquivos. Isso é útil em ambientes de desenvolvimento onde o sistema de arquivos não suporta eventos de mudança de arquivo.

