var express = require('express');
var router = express.Router();
var {toggleDevice} = require("../business/devices")


router.get('/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const success = await toggleDevice(id)
        res.json({ success })
    } catch (error) {
        console.error("Error: " + error)
        res.status(500).send(error.message)
    }
})

module.exports = router;
