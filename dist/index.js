import nodePath from "node:path";
import process from "node:process";
import { start } from "node:repl";
import { ShardingManager } from "discord.js";
import { enableRepl, isProd, shardingMode, shardsCount } from "./config/index.js";
import { importURLToString } from "./utils/functions/importURLToString.js";
import { RawonLogger } from "./utils/structures/RawonLogger.js";
var log = new RawonLogger({
    prod: isProd
});
var manager = new ShardingManager(nodePath.resolve(importURLToString(import.meta.url), "bot.js"), {
    totalShards: shardsCount,
    respawn: true,
    token: process.env.DISCORD_TOKEN,
    mode: shardingMode
});
if (enableRepl) {
    var repl = start({
        prompt: "> "
    });
    repl.context.shardManager = manager;
    process.stdin.on("data", function() {
        return repl.displayPrompt(true);
    });
    repl.on("exit", function() {
        return process.exit();
    });
}
await manager.on("shardCreate", function(shard) {
    log.info("[ShardManager] Shard #".concat(shard.id, " has spawned."));
    shard.on("disconnect", function() {
        return log.warn("SHARD_DISCONNECTED: ", {
            stack: "[ShardManager] Shard #".concat(shard.id, " has disconnected.")
        });
    }).on("reconnecting", function() {
        return log.info("[ShardManager] Shard #".concat(shard.id, " has reconnected."));
    });
    if (manager.shards.size === manager.totalShards) log.info("[ShardManager] All shards are spawned successfully.");
}).spawn().catch(function(error) {
    return log.error("SHARD_SPAWN_ERR: ", error);
});
