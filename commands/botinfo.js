const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`Olá ${message.author}, Logo abaixo eu falarei sobre mim:`)
    .setTimestamp()
    .setFooter(`Comando feito por: ${message.author.username}`)
    .addFields(
        {
            name: 'Meu vulgo e minha #',
            value: `${client.user.tag}`,
            inline: true
        },
        {
            name: '<:sapinhoak45:805762598372376597> Servidores:',
            value: `Eu tou em **${client.guilds.cache.size}** servidores.`,
            inline: true
        },
        {
            name: '<:uiui:805762602873520128> Canais:',
            value: `Eu tenho acesso à **${client.channels.cache.size}** canais de texto.`,
            inline: true
        },
        {
            name: '<:users:805762597193515018> Usuários:',
            value: `Eu monitoro **${client.users.cache.size}** usuários.`,
            inline: true
        },
        {
            name: '<:MegaThonk:805762596547330059> Meu ping está:',
            value: `**${Math.round(client.ws.ping)}** ms`,
            inline: true
        },
        {
            name: '<:blazeputasso:805762602318692363> Meus criador é o',
            value: 'Brunão#5288',
            inline: true
        },
        {
            name: '<:alarm:805762591111643198> Meu servidor:',
            value: 'https://discord.gg/xyRV2n7P',
            inline: true
        },
    )
    message.channel.send(embed);
}