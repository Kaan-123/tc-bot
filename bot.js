const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot Aktif!! ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Selamun Aleyküm') {
    msg.reply('Aleyküm Selam!');
  }
  if (msg.content === '!polis') {
    msg.reply('Polis olmak için en önemlisi Polis adayı olmakdır Polis olmak istiyorsan disiplinli ve itaatkar olmalısın!');
  }
  if (msg.content === '!jandarma') {
    msg.reply('Jandarma genel komutanlığına aday olmak için yapman gerekenler alımda yazıcakdır Genel Kurmay başkanı jandarma komutanıdır');
  }
  if (msg.content === '!asker') {
    msg.reply('Asker olmak istiyorsan iyi bir aim gücüne disipline ve alıma ihtayacın vardır komutanı Of-10 Mareşaldir');
  }
});

client.login('ODM2MjQ0NjExMDAxMDkwMDY4.YIbLew.UO9A3UKOZxhmpn-n9BvwjGjwpsE');

client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('!kick')) {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick()
            .then(() => {
            const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
             log.send(`${user.tag} kişisi kicklenmiştir`);
            })
            .catch(err => {
              message.reply('Bunu yapamam.');
              console.error(err);
            });
        } else {
          message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
        }
      } else {
        message.reply("Atılacak kişiyi yazmadın");
      }
    }
  });

  

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('tc!kick')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
           log.send(`${user.tag} kişisi kicklenmiştir`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Atılacak kişiyi yazmadın");
    }
  }
});



client.on('message', message => {
  if (!message.guild) return;
if (message.content.startsWith('tc!ban')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
           log.send(`${user.tag} kişisi banlanmıştır.`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Yasaklanacak kişiyi yazmadın.");
    }
  }
});


