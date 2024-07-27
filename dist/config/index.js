import path from "node:path";
import process from "node:process";
import { IntentsBitField, Options, Sweepers } from "discord.js";
import i18n from "i18n";
import { lang } from "./env.js";
export var clientOptions = {
    allowedMentions: {
        parse: [
            "users"
        ],
        repliedUser: true
    },
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildEmojisAndStickers,
        IntentsBitField.Flags.GuildVoiceStates,
        IntentsBitField.Flags.GuildBans
    ],
    makeCache: Options.cacheWithLimits({
        MessageManager: {
            maxSize: Infinity
        },
        ThreadManager: {
            maxSize: Infinity
        }
    }),
    sweepers: {
        messages: {
            interval: 300,
            filter: Sweepers.filterByLifetime({
                lifetime: 10800
            })
        },
        threads: {
            interval: 300,
            filter: Sweepers.filterByLifetime({
                lifetime: 10800,
                getComparisonTimestamp: function(el) {
                    var _el_archiveTimestamp;
                    return (_el_archiveTimestamp = el.archiveTimestamp) !== null && _el_archiveTimestamp !== void 0 ? _el_archiveTimestamp : 0;
                },
                excludeFromSweep: function(el) {
                    return el.archived !== true;
                }
            })
        }
    }
};
i18n.configure({
    defaultLocale: "en",
    directory: path.join(process.cwd(), "lang"),
    locales: [
        "en",
        "es",
        "id",
        "fr",
        "zh-CN",
        "zh-TW",
        "uk",
        "vi",
        "pt-BR",
        "ru",
        "ja",
        "tr"
    ],
    objectNotation: true
});
i18n.setLocale(lang);
export var shardsCount = "auto";
export var shardingMode = "worker";
export * from "./env.js";
export { default } from "i18n";
