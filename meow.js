require('http').createServer((req, res) => res.end()).listen(4000)
require('dotenv').config()
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js')

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] })

client.once('ready', () => {
   const states = ['✦ From Ryo.o With ❤️‍🔥', '✦ Musou Isshin ⚡', '✦ Mlem Dango 🍡', '✦ Booba Saga 🌻', '✦ Hypnotized 🫧', '✦ Eternity 🪐']

   setInterval(() => {
      client.user.setPresence({
         status: Math.random() < 0.4 ? 'online' : 'idle',
         activities: [{ type: 4, name: states[Math.floor(Math.random() * states.length)] }],
      })
   }, 60000)
})
client.on('guildMemberAdd', (member) => {
   const channel = member.guild.channels.cache.get('758711711577538560')

   if (channel) {
      const embed = new EmbedBuilder()
         .setColor('2B2D31')
         .setAuthor({ name: '•  ─────  •  ⬪  𝗪 𝗔 𝗦 𝗦 𝗨 𝗣 🪐 ⬪  •  ─────  •', iconURL: member.guild.iconURL() })
         .setThumbnail(member.user.displayAvatarURL())
         .setImage('https://raw.githubusercontent.com/ryokr/Share/main/Assets/robin2.jpg?quality=lossless')
         .setDescription(`✦ Ghé qua <id:home> để tìm hiểu server nè. \n✦ Bấm vào <id:customize> để chọn role nhé.`)

      channel.send(`${member} just slid intoo **${member.guild.name}** :3`)
      channel.send({ embeds: [embed] })
   }
})

client.login(process.env.token)