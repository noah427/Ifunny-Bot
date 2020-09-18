const { Command } = require("klasa");
const ifunny = require("../ifunny");
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "feature",
      enabled: true,
      runIn: ["text", "dm", "group"],
      cooldown: 0,
      aliases: [],
      permLevel: 0,
      botPerms: [],
      requiredSettings: [],
      description: "",
      quotedStringSupport: false,
      usage: "",
      usageDelim: undefined,
      extendedHelp: "No extended help available.",
    });
  }

  async run(msg, [...params]) {
    let res = await ifunny.legacy();
    res = res.result.filter((v) => v.type == "jpg");

    msg.channel.send(makeEmbed(res[getRandomInt(0, res.length)]));
  }

  async init() {
    // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
  }
};

function makeEmbed({ type, src, url, tags }) {
  let embed = new MessageEmbed();
  embed.setTitle(tags);

  embed.setURL(url);

  embed.setImage(src);

  embed.setFooter("Written by redacted#4242 (bullied into this by brian)");

  return embed;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
