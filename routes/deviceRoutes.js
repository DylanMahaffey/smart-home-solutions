var express = require('express');
var router = express.Router();
const {
    client,
    getAllDevices
} = require('../business/devices')

router.get('/get-all-devices', async function (req, res) {
    const devices = await getAllDevices()
    res.json({devices: devices})
})

module.exports = router