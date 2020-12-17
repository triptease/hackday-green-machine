const generateNudge = () =>  ({
    "campaigns": [
        {
            "id": `${Date.now()}`,
            "type": "price-check",
            "client": "THEPAVILIONS",
            "variants": [
                {
                    "variantId": "A",
                    "messagePosition": {},
                    "content": {
                        "type": "price-check",
                        "copy": {
                            "header": "You’ve found the best price!",
                            "directPrice": "Direct Price",
                            "directBookingBenefits": [
                                "Only when you book here",
                                "Free glass of Rioja",
                                "Free Late Checkout"
                            ],
                            "banner": null,
                            "searchCriteriaAdult": "adult",
                            "searchCriteriaAdults": "adults",
                            "searchCriteriaChild": "child",
                            "searchCriteriaChildren": "children",
                            "verifiedBy": "Verified by",
                            "checkingPrices": "Checking prices on the web",
                            "noAvailability": "No rooms",
                            "viewAll": "View all",
                            "viewLess": "View less"
                        },
                        "iconBackgroundColor": "#886f5a",
                        "ctaBackgroundColor": "#5e43c2",
                        "ctaCorners": "square",
                        "corners": "square",
                        "backgroundColor": "#ffffff",
                        "icon": null,
                        "image": null,
                        "font": "Lato",
                        "useBranding": false
                    }
                }
            ],
            "criteria": {}
        },
        {
            "id": `${Date.now()}`,
            "display": {
                "after": 0
            },
            "type": "nudge",
            "client": "THEPAVILIONS",
            "variants": [
                {
                    "variantId": "A",
                    "content": {
                        "type": "text",
                        "copy": {
                            "header": "<p><strong>Book on our website and we'll plant A MILLION trees</strong></p>",
                            "body": "<p>We're working with our local partner <a href=\"#\">Trees4earth</a> who will plant 10 trees to offset the carbon cost of your trip.</p>",
                            "ctaLabel": "Read more",
                            "ctaHref": "https://www.pavilionshotels.com/covid19-updates/",
                            "ctaHrefTarget": "_blank"
                        },
                        "iconBackgroundColor": "#df7d4f",
                        "ctaBackgroundColor": "#df7d4f",
                        "ctaCorners": "rounded",
                        "corners": "rounded",
                        "backgroundColor": "#eaebef",
                        "icon": "people",
                        "image": "https://static.triptease.io/hackday-green-machine/planting-tree.jpg",
                        "font": "Poppins",
                        "useBranding": true
                    }
                }
            ],
            "criteria": {
                "urlExclusions": [
                    {
                        "value": "we-always-want-this-to-fire-so-exclude-nothing",
                        "matcherType": "contains"
                    }
                ]
            }
        }
    ],
    "notifications": {}
});

const app = require('fastify')({logger: {prettyPrint: true}});

app.get('/:anything', async (req, res) => {
    return res
        .status(200)
        .header('Access-Control-Allow-Origin', '*')
        .header('access-control-expose-headers', 'X-Country-Code, X-Region-Code')
        .header('age', '0')
        .header('cache-control', 'max-age=600')
        .header('content-length', '2657')
        .header("content-type", "application/json; charset=utf-8")
        .header("date", "Thu, 17 Dec 2020 14:48:51 GMT")
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
