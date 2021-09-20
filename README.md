# VentureClass

## Demo
- Você pode ver o website [aqui](https://venturesclass-vercel.vercel.app/)
- Você pode ver a API [aqui](https://tranquil-dawn-90299.herokuapp.com/)

## Teste-o localmente

1. Clone este repositório;
2. Execute `npm i` nas pastas **back-end** e **front-end** para instalar as dependências;
3. No diretório **back-end**, crie um arquivo `.env` com as variáveis `MONGODB_URI` (com a URI do seu MongoDB) e `ORIGIN` com a URL do seu domínio, para permissão do CORS;
4. No arquivo `next.config.js` em **front-end**, altere a URL base de requisição da API. Por padrão está como **http://localhost:8000**;
5. Execute `npm run dev` no **back-end** (`npm start` para rodar sem o nodemon) e depois no **front-end**;
6. Pronto!

## Endpoints da API

- /videos GET
- /videos POST
- /video/:id GET
- /video/:id PUT
- /video/:id DELETE

### **/videos POST**

Para cadastrar um novo vídeo na API, envie um JSON via **POST** com a seguinte estrutura:
```
{
	"titulo": "Indrodução",
	"descricao": "Vídeo de introdução",
	"link": "https://www.youtube.com/embed/ORGYmVvUmEY",
	"thumbnail": "http://i3.ytimg.com/vi/ORGYmVvUmEY/maxresdefault.jpg",
	"duracao": "25:08"
}
```
- O link deve estar no formato **embed** (como no exemplo acima), que pode ser obtido clicando em *Compartilhar* em qualquer vídeo do YouTube. Ou substitua o ID após *embed/* pelo ID que pode ser obtino em um link padrão do YouTube: https://www.youtube.com/watch?v= **ORGYmVvUmEY** -> https://www.youtube.com/embed/ **ORGYmVvUmEY**;
- A thumbnail pode ser obtida [aqui](http://www.get-youtube-thumbnail.com/), com o link do vídeo. Ou apenas substitua o ID no link da thumbnail com o link do vídeo em questão: http://i3.ytimg.com/vi/ **ORGYmVvUmEY** /maxresdefault.jpg.

### **/videos GET**

Os vídeos são obtidos na rota **/videos** com a seguinte estrutura:
```
[
    {
        "_id": "61464b604ec02181dc00a8ee"
        "titulo": "Indrodução",
        "descricao": "Vídeo de introdução",
        "link": "https://www.youtube.com/embed/ORGYmVvUmEY",
        "thumbnail": "http://i3.ytimg.com/vi/ORGYmVvUmEY/maxresdefault.jpg",
        "duracao": "25:08",
        "createdAt": "2021-09-18T20:26:08.245Z",
        "updatedAt": "2021-09-18T20:26:08.245Z"
    },
    ...
]
```

### **/video/:id GET**

Um único vídeo pode ser obtino pela rota **/video/:id**. Por exemplo, em `http://localhost:8000/video/61464b604ec02181dc00a8ee` retornaria:
```
{
    "_id": "61464b604ec02181dc00a8ee"
    "titulo": "Indrodução",
    "descricao": "Vídeo de introdução",
    "link": "https://www.youtube.com/embed/ORGYmVvUmEY",
    "thumbnail": "http://i3.ytimg.com/vi/ORGYmVvUmEY/maxresdefault.jpg",
    "duracao": "25:08",
    "createdAt": "2021-09-18T20:26:08.245Z",
    "updatedAt": "2021-09-18T20:26:08.245Z"
}
```

### **/video/:id PUT**

Para atualizar os atributos de um vídeo já cadastrado, envie um JSON via **PUT** pela rota **/video/:id** com a seguinte estrutura:
```
{
	"titulo": "Nova introdução",
	"descricao": "Nova descrição",
	"link": "https://www.youtube.com/embed/ORGYmVvUmEY",
	"thumbnail": "http://i3.ytimg.com/vi/ORGYmVvUmEY/maxresdefault.jpg",
	"duracao": "10:00"
}
```
- Os campos que não forem de interesse na modificação podem ser omitidos da requisição.

### **/video/:id DELETE**

Para excluir um vídeo da lista, basta enviar uma requisição para a rota **/video/:id** via **DELETE**.
