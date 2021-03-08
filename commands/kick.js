var Discord = require('discord.js');
 
exports.run = async(bot, msg, args) => {
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('Não tens permissão pra kickar ninguém, zé ruela');
 
    var user = msg.mentions.users.first();
    if(!user) return msg.reply('Você precisa mencionar algum ser');
 
    var member;
 
    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }
 
    if(!member) return msg.reply('Esse usuário não consta no servidor');
    if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Cê não pode kickar ele não bicho');
 
    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('| Por gentileza, me dê um motivo');
 
    var channel = msg.guild.channels.cache.find(c => c.id === '817365787538620416');
 
    var log = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Usuário Kickado')
    .addField('Usuário:', user, true)
    .addField('Por:', msg.author, true)
    .addField('Motivo:', reason)
    channel.send(log);
 
    var embed = new Discord.MessageEmbed()
    .setTitle('Você foi kick **Motivo**')
    .setDescription(reason);
 
    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }
 
    member.kick(reason);
 
    msg.channel.send(`**${user}** Foi kick por **${msg.author}**!`);
}