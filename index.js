import express from 'express'
import { validationResult } from 'express-validator'
import birdsValidators from './validators/birdsValidators.js'

const server = express()
server.use(express.json())
server.use((req, res, next) => {
    console.log(`[Req] ${req.method} ${req.path}`)
    next()
})

const birdSightings = []


server.get("/birds", (req, res) => {
    res.send(birdSightings)
})

server.post(
    "/birds",
    birdsValidators,
    (req, res) => {
    console.log(req.body)

    const result = validationResult(req)
    if (!result.isEmpty()) {
        res.status(400)
        res.json({
            errors: result.errors
        })
        return
    }

    birdSightings.push(req.body)

    res.send("New bird sighting added to app memory")
})


server.listen(9004, () => {
    console.log("Listening on http://localhost:9004")
})