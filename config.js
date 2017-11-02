const config = require('yargs')
    .env('HUE2MQTT')
    .usage('Usage: $0 [options]')
    .describe('v', 'possible values: "error", "warn", "info", "debug"')
    .describe('n', 'instance name. used as mqtt client id and as topic prefix')
    .describe('u', 'mqtt broker url. See https://github.com/mqttjs/MQTT.js#connect-using-a-url')
    .describe('b', 'hue bridge address. if ommited bridge will be searched via http://meethue.com/api/nupnp')
    .describe('p', 'light status polling interval in seconds')
    .describe('d', 'publish distinct light states')
    .describe('h', 'show help')
    .describe('disable-names', 'use light ID instead of name when publishing changes')
    .describe('mqtt-retain', 'enable/disable retain flag for mqtt messages')
    .describe('publish-only-on-change', 'set to false to publish current state every "polling-interval"-seconds')
    .alias({
        b: 'bridge',
        h: 'help',
        n: 'name',
        u: 'url',
        v: 'verbosity',
        p: 'polling-interval',
        d: 'publish-distinct'
    })
    .boolean('disable-names')
    .boolean('mqtt-retain')
    .boolean('publish-only-on-change')
    .default({
        u: 'mqtt://127.0.0.1',
        n: 'hue',
        v: 'info',
        p: 10,
        'mqtt-retain': true,
        'publish-only-on-change': true
    })
    .version()
    .help('help')
    .argv;

module.exports = config;
