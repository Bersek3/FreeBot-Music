import { createEmbed } from "../functions/createEmbed.js";
import { createCmdExecuteDecorator } from "./createCmdExecuteDecorator.js";
export function memberReqPerms(perms, fallbackMsg) {
    return createCmdExecuteDecorator(function(ctx) {
        var _ctx_member;
        if (((_ctx_member = ctx.member) === null || _ctx_member === void 0 ? void 0 : _ctx_member.permissions.has(perms)) !== true) {
            void ctx.reply({
                embeds: [
                    createEmbed("error", fallbackMsg, true)
                ]
            });
            return false;
        }
        return true;
    });
}
export function botReqPerms(perms, fallbackMsg) {
    return createCmdExecuteDecorator(function(ctx) {
        var _ctx_guild_members_me, _ctx_guild;
        if (((_ctx_guild = ctx.guild) === null || _ctx_guild === void 0 ? void 0 : (_ctx_guild_members_me = _ctx_guild.members.me) === null || _ctx_guild_members_me === void 0 ? void 0 : _ctx_guild_members_me.permissions.has(perms)) !== true) {
            void ctx.reply({
                embeds: [
                    createEmbed("error", fallbackMsg, true)
                ]
            });
            return false;
        }
        return true;
    });
}
