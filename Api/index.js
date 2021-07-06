const express = require('express')
const cors = require('cors')
const app = express()
const axios = require("axios").default

app.use(cors())
app.use(express.json())

//types
const types =(type)=>{
  return{
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/' + type,
  headers: {
    'x-rapidapi-key': 'cc12e2264dmsh32a6bc29b6b302ep1794c8jsn38a8f10c63af',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }}
};

app.get('/types/:type', function(req, res){
  const {type}= req.params
  axios.request(types(type)).then(function (response) {
      res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    })
})


//qualities
const qualities =(qualitie) =>{
  return {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/'+ qualitie,
  headers: {
    'x-rapidapi-key': 'cc12e2264dmsh32a6bc29b6b302ep1794c8jsn38a8f10c63af',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
}}
};

app.get('/qualities/:qualitie', function(req, res){
  const {qualitie}= req.params
  axios.request(qualities(qualitie)).then(function (response) {
      res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    })
})


//facção
const factions = (faction) => {
  return {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/'+ faction,
  headers: {
    'x-rapidapi-key': 'cc12e2264dmsh32a6bc29b6b302ep1794c8jsn38a8f10c63af',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
}};

app.get('/factions/:faction', function(req, res){
  const {faction}= req.params
  axios.request(factions(faction)).then(function (response) {
    res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    })
})


//classes
const classes = (clas) =>{
  return {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/'+ clas,
  headers: {
    'x-rapidapi-key': 'cc12e2264dmsh32a6bc29b6b302ep1794c8jsn38a8f10c63af',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
}};

app.get('/classes/:clas', function(req, res){
  const {clas}= req.params
  axios.request(classes(clas)).then(function (response) {
    res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    })
})





app.listen(3000)
  