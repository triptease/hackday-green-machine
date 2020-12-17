module.exports = () =>  ({
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
                "after": 5
            },
            "type": "nudge",
            "client": "THEPAVILIONS",
            "variants": [
                {
                    "variantId": "A",
                    "content": {
                        "type": "text",
                        "copy": {
                            "header": "<p><strong>Stay with us, save the reef</strong></p>",
                            "body": "<p>We'll plant 55 trees to offset the impact of your trip through our partnership with<a href=\"#\">Trees4earth</a>.</p>",
                            "ctaLabel": "Book now",
                            "ctaHref": "https://www.pavilionshotels.com/covid19-updates/",
                            "ctaHrefTarget": "_blank"
                        },
                        "iconBackgroundColor": "#df7d4f",
                        "ctaBackgroundColor": "#3F5273",
                        "ctaCorners": "rounded",
                        "corners": "rounded",
                        "backgroundColor": "#eaebef",
                        "icon": null,
                        "image": "https://static.triptease.io/hackday-green-machine/planting-tree.jpg",
                        "font": "Poppins",
                        "useBranding": true
                    }
                }
            ],
            "criteria": {
            }
        }
    ],
    "notifications": {}
});
