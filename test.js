const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

function getCharacter(id) {
  const CHARACTER_URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  fetch(`${CHARACTER_URL}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResponse) {
      console.log(`Hola, yo soy ${jsonResponse.name}`);
    })

}
function obtenerPersonaje(id){
  
  return new Promise((resolve,reject) => {

      const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`

      fetch(`${url}`)
        .then(response => resolve(response.json()))
        .catch(() => reject(id))
 
       })

  }

function getCharacterWithCallback(id, callback) {
  const CHARACTER_URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  fetch(`${CHARACTER_URL}`)
    .then(function (response) {

      return response.json();
    })
    .then(function (jsonResponse) {
      if (callback) {
        callback()
      }
      console.log(`Hola, yo soy ${jsonResponse.name}`);
    })
    .catch((error) => {
      console.log('ha ocurrido un error')
    })

}

/*
console.log(getCharacter(2))
console.log(getCharacter(5))
console.log(getCharacter(12))
console.log(getCharacter(1))
*/

/*
getCharacterWithCallback(1,function(){
  getCharacterWithCallback(2, function(){
    getCharacterWithCallback(3, function(){
      getCharacterWithCallback(4, function(){
        getCharacterWithCallback(5, function(){
          getCharacterWithCallback(6)
        })
      })
    })
  })
})
*/


function getCharacterWithPromises(id) {
  console.log(id)
  return new Promise((resolve, reject) => {
    const CHARACTER_URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    fetch(`${CHARACTER_URL}`)
      .then(function (response) {
        resolve(response.json())
      })
      .catch(() => reject(id))

  })
}

function obtenerPersonaje(id){
  
  return new Promise((resolve,reject) => {

      const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`

      fetch(`${url}`)
        .then(response => resolve(response.json()))
        .catch(() => reject(id))
 
       })

}

async function obtenerPersonajes() {
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id=> obtenerPersonaje(id))
    //cuando todas las promesas se resuelvan
    try{
      var personajes = await Promise.all(promesas) 
      console.log(personajes)
    }catch(id){
      console.log('error')
    }
   
}


obtenerPersonajes()
