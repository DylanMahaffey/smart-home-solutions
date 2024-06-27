const { Client } = require('tplink-smarthome-api');

const client = new Client();

client.startDiscovery().on('device-new', (device) => {
    // device.getSysInfo().then(console.log);
});

const getAllDevices = async () => {
    var devices = []
    await Promise.all(Array.from(client.devices, async ([name, value]) => {
        devices.push({
            type: value.deviceType,
            name: value.alias,
            id: value.deviceId,
            power: await value.getPowerState()
        })
    }))
    return devices
}

const toggleDevice = async (id) => {
    const device = client.devices.get(id)
    device.togglePowerState()
    return await !device.getPowerState();
}

module.exports = {
    client,
    getAllDevices,
    toggleDevice
};