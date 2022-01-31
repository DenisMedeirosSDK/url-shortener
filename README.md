# Url Shortener

Um projeto simples para encurtar URl.

## 🔧 Tech

- [NodeJs](https://nodejs.org)
- [Typescrypt](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

## Iniciando

```bash
$ git clone https://github.com/DenisMedeirosSDK/url-shortener.git

$ cd url-shortener

$ npm install
```

```bash
# Redis
$ docker run --rm -d  -p 6379:6379/tcp redis:latest

# MongoDB
$ docker run --rm -d  -p 27017:27017/tcp mongo:latest
```

Copie as credencias do arquivo `.env.example` para `.env` e atualize com as suas.

Execute a apliacção com: `npm run start:dev`
