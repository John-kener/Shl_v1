let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Arya274/Arya-Bot')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `




🇸 🇱  🇨 🇾 🇧 🇪 🇷 
🇼 🇦 🇷 🇷 🇮 🇴 🇷 🇸 

*❮ 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗕𝗢𝗧 ❯* 
[*]
┋
●
╭══•› *「 INTRO」*
│
│OWNERS: John kener 
│                & Dave smith
│
│@ CYBER WARRIORS™
│
╰═════════════⦂⦁
Hi, ${name} 👋
Exp: ${exp}
📟 Time: ${time}
📆 Date: ${week}, ${date}
${more.repeat(1000)}
How to Add XP:
+1 Exp/regular message
+10 Exp/command
⚙
╠═✪〘 *MENU* 〙✪═
║
╠═〘 Commands 〙 ═
╠➥ ${_p}menu
╠➥ ${_p}help
╠➥ ${_p}info
╠➥ ${_p}?
║
╠═〘 👉🖤👈 〙 ═
║
╠➥${_p}usawha
║(පිටරට නම්බර් වලින්
║  whatsapp හදමු )
║
╠➥${_p}ss
 || (𝓗𝓪𝓳𝓪𝓳𝓪)
╠➥${_p}kali
║(කාලි ලිනක්ස්
║ ෆෝන් එකටම )
║
╠➥${_p}termux-basic
║(ටර්මක්ස් මූලික දැනුම)
║
╠➥${_p}frontcam
║(කැමරාව හැක් කරමු)
║
╠➥${_p}bombmsg
║(බෝම්බ් මැසේජ් ගහමු)
║
╠➥${_p}spamtool
║(වට්සැප් ස්පෑම් )
║
╠➥${_p}virus1
║(වයිරස් ඇප් හදමු 1 )
║
╠➥${_p}virus2
║(වයිරස් ඇප් හදමු 2)
║
╠➥${_p}evil-ban
║(EVIL-EYE බැනර් එක දාගමු)
║
╠➥${_p}ban-theme
║(ටර්මක්ස් THEME දාගමු)
║
╠➥${_p}anim-ban
║($ මාර්ක් මාරු කරමු &
║animation බැනර් එකක් දාගමු)
║
╠➥${_p}f-email
║(හොර email හදමු)
║
╠➥${_p}con-spam
║(CONTACT ස්පෑම් හදමු )
║
╠➥${_p}y-intro
║(YT INTRO හදාගමු)
║
╠➥${_p}hide
║(ෆොටෝ ඇතුලේ
║  ෆයිල් හන්ගමු)
║
╠➥${_p}phishing
║(what´s phishing &
║ link masking )
║
╠═⦁❮ *OUR GITHUB PAGES* ❭⦁
║
╠═➣${_p}john (JOHN-KENER)
║
╠═➣${_p}dave (DAVE SMITH)
╿
⛨
║
╠➥ ${_p}stiker (caption)
║( ෆොටෝ ➜ ස්ටිකර්ස් )
║
╠➥ ${_p}toimg (reply)
║(ස්ටිකර් ➜ ෆොටෝ )
║
╠➥ ${_p}ssweb <url>
║(website preview  
║  screenshots )
║
╠➥ ${_p}modApk
║(මොඩ් ඇප් සෙට් එක )
║
╠➥ ${_p}bucin
╠➥ ${_p}sswebf <url>
╠➥ ${_p}google <pencarian>
╠➥ ${_p}googlef <pencarian>
╠➥ ${_p}readmore <teks>|<sembunyi>
╠➥ ${_p}quran
╠➥ ${_p}gtts
●
╠═ *〘 Group 〙* ═
╠➥ ${_p}add[62xxxxxxxxx]
╠➥ ${_p}promote [@tagmember]
╠➥ ${_p}demote [@tagadmin]
╠➥ ${_p}linkgrup
╠➥ ${_p}pengumuman [text]
╠➥ ${_p}hidetag [text]
╠➥ ${_p}kick @Member
║
║
╠═〘  *OWNER* 〙 ═
╠➥ ${_p}bcgc <teks>
╠➥ ${_p}setmenu <teks>
╠➥ ${_p}deletechat (chat grup)
╠➥ ${_p}deletechat group
╠➥ ${_p}mutechat (chat grup)
╠➥ ${_p}mutechat group
║
╠═〘 *JOIN WITH US* 〙 ═
║
╠➥ YouTube : 
║         https://bit.ly/3a3R4Vr
║
╠➥ Facebook group : 
║         https://bit.ly/2YYBMeq
╠➥ Facebook page :
║         https://bit.ly/2NakzfB
╠➥ Telegram :
║         https://t.me/by_sstp
║
╠═〘 Info Bot 〙 ═
╠➥ ${_p}info
╠➥ @CYBER_WARRIORS™
║
╠═════
║ Advanced:
║  > return m
║
●
*⦁𝗦𝗟 𝗖𝗬𝗕𝗘𝗥 𝗪𝗔𝗥𝗥𝗜𝗢𝗥𝗦 𝗕𝗢𝗧⦁*

(මේ පෝස්ට් එක වෙනුවට ඔයාගේ පෝස්ට් එක දාගන්න )



`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(main|help|\?|මීට අමතරව ඕනේ නම් දාගන්න)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
