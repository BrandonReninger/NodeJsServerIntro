import express from "express";
import bp from "body-parser";
let server = express();
const port = 3000;


server.use(bp.urlencoded({
    extended: true
}))
server.use(bp.json())

server.listen(port, () => {
    console.log("server is running on port 3000!", port)
})


import PlanetController from "./controllers/PlanetController.js"
let planetController = new PlanetController()