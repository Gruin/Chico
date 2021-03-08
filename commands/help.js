const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setDescription(` Aqui estão meus comandos ${message.author}`)
    .setTimestamp()
    .setFooter(` Sem rodapé por hoje. ${message.author.username} `)
    .addFields(
        {
            name: 'c!avatar @usuário',
            value: `Ver o avatar dos amiguinhos`,
            inline: false
        },
        {
            name: 'c!say "palavra"',
            value: `Me manda dizer alguma coisa`,
            inline: false
        },
    )
    message.channel.send(embed);
}