const app = require('fastify')({logger: {prettyPrint: true}});
const generateNudge = require('./nudge');

app.get('/:anything', async (req, res) => {
    return res
        .status(200)
        .header('Access-Control-Allow-Origin', '*')
        .header('access-control-expose-headers', 'X-Country-Code, X-Region-Code')
        .header('age', '0')
        .header("content-type", "application/json; charset=utf-8")
        .header("date", `${new Date().toDateString()}`)
        .header("server", "Google Frontend")
        .header("tt_host", "messages.guest-experience.triptease.io")
        .header("tt_keys", "campaigns-50179cd348d1527feff4dbd4fd562528c2e6557c campaigns-client-THEPAVILIONS")
        .header("vary", "Origin")
        .header("via", "1.1 varnish")
        .header("x-cache", "MISS")
        .header("x-cache-hits", "0")
        .header("x-city", "woking")
        .header("x-cloud-trace-context", "6806ab5680386f34480cc6e2575bc589")
        .header("x-country-code", "GB")
        .header("x-region-code", "SRY")
        .header("x-served-by", "cache-lhr7370-LHR")
        .send(generateNudge());
});

app.listen({host: '127.0.0.1', port: 8000});
