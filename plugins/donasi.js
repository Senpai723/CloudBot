let handler =  m => m.reply(`
╭─「 Donasi 」
│ • ${global.donasi}
│ • ['6282314858723']
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
