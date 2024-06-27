var express = require('express');
var router = express.Router();
var {toggleDevice} = require("../business/devices")


router.get('/:id', async function (req, res) {
    var {id} = req.params;
    
    res.json({success: await toggleDevice(id)})
})

/* GET home page. */
// router.get('/office', function (req, res) {
//     const device = client.devices.get("80066D894D81FAAF8F5B674CACA3AF57222ED2D2");
//     device.togglePowerState()
//     device.getPowerState().then(value => {
//         res.json({bedroom: !value})
//     })
// });
// router.get('/bedroom', function (req, res) {
//     const device = client.devices.get("80065F1D7A442005356A69006A2A51EC222ED7AC")
//     device.togglePowerState()
//     device.getPowerState().then(value => {
//         res.json({bedroom: !value})
//     })
    
// });

module.exports = router;
