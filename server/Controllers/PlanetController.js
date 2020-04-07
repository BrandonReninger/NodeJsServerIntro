import express from "express"

let FAKEDB = [{
        id: 1,
        name: "Mercury",
        type: "terrestrial",
        distance: 41000000
    },
    {
        id: 2,
        name: "Venus",
        type: "terrestrial",
        distance: 66000000
    },
    {
        id: 3,
        name: "Neptune",
        type: "gas-giant",
        distance: 2780000000
    }
]

export default class PlanetController {
    constructor() {
        this.router = express.Router()
            .get('', this.getAll)
            .get('/:planetId', this.getOne)

    }

    defaultError(req, res, next) {
        res.status(404).send("Route not found in planet controller")
    }

    getOne(arg0, getOne) {

    }



    getAll(req, res, next) {
        res.send(FAKEDB)
    }


}