const color = require("../model/colors-rgb.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(color)
}

module.exports = {
    getAll
}