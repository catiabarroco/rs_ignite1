import express from "express"

const app = express()

//www.minhaapi.com/ads
//localhost:333/ads

app.get('/ads', (request, response) => {
    return response.json([
      { id: 1, name: "Anuncio 1" },
      { id: 2, name: "Anuncio 2" },
      { id: 3, name: "Anuncio 3" },
      { id: 4, name: "Anuncio 4" },
      { id: 5, name: "Anuncio 5" },
    ]);
})

app.listen(3333)