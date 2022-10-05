let objs = [
    {
        "nome": "João",
        "idade": 20,
        "sexo": "M"
    },

    {
        "nome": "Maria",
        "idade": 25,
        "sexo": "F"

    }
]

//JSON

console.log(objs)
const jsonData = JSON.stringify(objs)
console.log(jsonData)

//JSON to JS

const objData = JSON.parse(jsonData)

console.log(objData)




