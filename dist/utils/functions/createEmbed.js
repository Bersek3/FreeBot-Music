import { EmbedBuilder } from "discord.js";
import { embedColor, noEmoji, yesEmoji } from "../../config/index.js";
var hexColors = {
    error: "Red",
    info: embedColor,
    success: "Green",
    warn: "Yellow"
};
export function createEmbed(type, message) {
    var emoji = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var embed = new EmbedBuilder().setColor(hexColors[type]);
    var _message_length;
    if (((_message_length = message === null || message === void 0 ? void 0 : message.length) !== null && _message_length !== void 0 ? _message_length : 0) > 0) embed.setDescription(message !== null && message !== void 0 ? message : null);
    if (type === "error" && emoji) embed.setDescription("".concat(noEmoji, " **|** ").concat(message));
    if (type === "success" && emoji) embed.setDescription("".concat(yesEmoji, " **|** ").concat(message));
    return embed;
}
