import { PermissionFlagsBits } from "discord.js";
import i18n from "../../config/index.js";
import { createEmbed } from "../functions/createEmbed.js";
import { createCmdExecuteDecorator } from "./createCmdExecuteDecorator.js";
export var haveQueue = createCmdExecuteDecorator(function(ctx) {
    var _ctx_guild;
    if (!((_ctx_guild = ctx.guild) === null || _ctx_guild === void 0 ? void 0 : _ctx_guild.queue)) {
        void ctx.reply({
            embeds: [
                createEmbed("warn", i18n.__("utils.musicDecorator.noQueue"))
            ]
        });
        return false;
    }
    return true;
});
export var inVC = createCmdExecuteDecorator(function(ctx) {
    var _ctx_member;
    if (!((_ctx_member = ctx.member) === null || _ctx_member === void 0 ? void 0 : _ctx_member.voice.channel)) {
        void ctx.reply({
            embeds: [
                createEmbed("warn", i18n.__("utils.musicDecorator.noInVC"))
            ]
        });
        return false;
    }
    return true;
});
export var validVC = createCmdExecuteDecorator(function(ctx) {
    var _ctx_member, _ctx_guild, _ctx_guild_members_me_voice_channel;
    var voiceChannel = (_ctx_member = ctx.member) === null || _ctx_member === void 0 ? void 0 : _ctx_member.voice.channel;
    if (!((_ctx_guild = ctx.guild) === null || _ctx_guild === void 0 ? void 0 : _ctx_guild.members.me)) return true;
    if ((voiceChannel === null || voiceChannel === void 0 ? void 0 : voiceChannel.id) === ((_ctx_guild_members_me_voice_channel = ctx.guild.members.me.voice.channel) === null || _ctx_guild_members_me_voice_channel === void 0 ? void 0 : _ctx_guild_members_me_voice_channel.id)) return true;
    if ((voiceChannel === null || voiceChannel === void 0 ? void 0 : voiceChannel.joinable) !== true) {
        void ctx.reply({
            embeds: [
                createEmbed("error", i18n.__("utils.musicDecorator.validVCJoinable"), true)
            ]
        });
        return false;
    }
    if (!voiceChannel.permissionsFor(ctx.guild.members.me).has(PermissionFlagsBits.Speak)) {
        void ctx.reply({
            embeds: [
                createEmbed("error", i18n.__("utils.musicDecorator.validVCPermission"), true)
            ]
        });
        return false;
    }
    return true;
});
export var sameVC = createCmdExecuteDecorator(function(ctx) {
    var _ctx_guild_members_me, _ctx_guild, _ctx_guild_queue_connection, _ctx_guild_queue, _ctx_member_voice_channel, _ctx_member;
    if (!((_ctx_guild = ctx.guild) === null || _ctx_guild === void 0 ? void 0 : (_ctx_guild_members_me = _ctx_guild.members.me) === null || _ctx_guild_members_me === void 0 ? void 0 : _ctx_guild_members_me.voice.channel)) return true;
    var _ctx_guild_queue_connection_joinConfig_channelId;
    var botVC = (_ctx_guild_queue_connection_joinConfig_channelId = (_ctx_guild_queue = ctx.guild.queue) === null || _ctx_guild_queue === void 0 ? void 0 : (_ctx_guild_queue_connection = _ctx_guild_queue.connection) === null || _ctx_guild_queue_connection === void 0 ? void 0 : _ctx_guild_queue_connection.joinConfig.channelId) !== null && _ctx_guild_queue_connection_joinConfig_channelId !== void 0 ? _ctx_guild_queue_connection_joinConfig_channelId : ctx.guild.members.me.voice.channel.id;
    if (((_ctx_member = ctx.member) === null || _ctx_member === void 0 ? void 0 : (_ctx_member_voice_channel = _ctx_member.voice.channel) === null || _ctx_member_voice_channel === void 0 ? void 0 : _ctx_member_voice_channel.id) !== botVC) {
        void ctx.reply({
            embeds: [
                createEmbed("warn", i18n.__("utils.musicDecorator.sameVC"))
            ]
        });
        return false;
    }
    return true;
});
