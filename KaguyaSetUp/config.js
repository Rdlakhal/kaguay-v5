export default {
    "prefix": "*", 
    "BOT_NAME": "ⓀⒶⒼⓊⓎⒶ",
    "ADMIN_IDS": ["100054949951477","100054133070771","100089781891448"],
    "botEnabled": true,
    "autogreet": true, // تمت إضافة هذه الخاصية
    "options": {
        "forceLogin": true,
        "listenEvents": true,
        "listenTyping": true,
        "logLevel": "silent",
        "updatePresence": true,
        "selfListen": true,
        "usedDatabase":false
    },
    database: {
        type: "json",
        mongodb: {
            uri: "mongodb://0.0.0.0:27017"
        }
    },
    port: process.env.PORT || 3000,
    mqtt_refresh: 1200000
};
