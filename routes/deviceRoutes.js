var express = require('express');
var router = express.Router();
const {
    getAllDevices
} = require('../business/devices')

router.get('/get-all-devices', async function (req, res) {
    try {
        const devices = await getAllDevices()
        res.json({devices: devices})
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

module.exports = router