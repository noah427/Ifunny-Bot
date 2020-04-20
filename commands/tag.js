const { Command } = require("klasa");
const ifunny = require("../ifunny");
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "tag",
      enabled: true,
      runIn: ["text", "dm", "group"],
      cooldown: 0,
      aliases: ["#"],
      permLevel: 0,
      botPerms: [],
      requiredSettings: [],
      description: "",
      quotedStringSupport: false,
      usage: "<tag:string>",
      usageDelim: undefined,
      extendedHelp: "No extended help available.",
    });
  }

  async run(msg, [tag]) {
    let res = await ifunny.tags(tag);
    if (res === -1) {
      msg.channel.send("invalid tag");
      return;
    }

    msg.channel.send(makeEmbed(res[getRandomInt(0, res.length)]));
  }

  async init() {
    // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
  }
};

function makeEmbed({ src, alt }) {
  console.log(src);
  let embed = new MessageEmbed();
  embed.setTitle(alt);

  embed.setImage(src);

  embed.setFooter("Written by redacted#1115 (he didn't want to)");

  return embed;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
