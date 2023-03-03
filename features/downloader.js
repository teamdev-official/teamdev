const { getBuffer, shorts } = require('../lib/function')
const { musicaldown } = require('../lib/musical')
const { cekKey, limitAdd, isLimit } = require('../database/db');
const { getInfo, fbdl } = require('../lib/downloader.js')
const { ytv, yta } = require('../lib/ytdl')
const ch = require('../lib/scraper')
const scraper = require('@bochilteam/scraper')

const fs = require('fs')
const axios = require('axios')
const request = require('request')
const fetch = require('node-fetch')

__path = process.cwd()
     
     async function tiktok(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await scraper.tiktokdl(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function tiktok2(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.ttdownloader(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function tiktokmusically(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await musicaldown(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function tiktokmate(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await scraper.tiktokdlv2(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         }
     }

     async function tiktoknowm(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let hasil = await musicaldown(url)
            let data = await getBuffer(hasil.nowm)
             await fs.writeFileSync(__path +'/tmp/tiktok.mp4', data)
             await res.sendFile(__path +'/tmp/tiktok.mp4')
         } catch(err) {
             console.log(err)
             res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function tiktokwm(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let hasil = await musicaldown(url)
            let data = await getBuffer(hasil.nowm)
             await fs.writeFileSync(__path +'/tmp/tiktok.mp4', data)
             await res.sendFile(__path +'/tmp/tiktok.mp4')
         } catch(err) {
             console.log(err)
             res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function tiktokaudio(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let hasil = await musicaldown(url)
            let data = await getBuffer(hasil.audio_original)
             await fs.writeFileSync(__path +'/tmp/tiktok.mp3', data)
             await res.sendFile(__path +'/tmp/tiktok.mp3')
         } catch(err) {
             console.log(err)
             res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function savefrom(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await scraper.savefrom(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function goredl(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.goredl(url)
              res.status(200).json({ status: 200, result: result.data })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }

     async function youtube(req, res) {
        try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let yt1 = await yta(url)
            let yt2 = await ytv(url)
            let audioUrl = await shorts('https://my-app.xfar.repl.co/api/toFile?url='+yt1.dl_link)
            let videoUrl = await shorts('https://my-app.xfar.repl.co/api/toFile?url='+yt2.dl_link)
              res.json({ status: 200, result: { title: yt1.title, thumb: yt1.thumb, size_audio: yt1.filesizeF, size_video: yt2.filesizeF, audio_url: yt1.dl_link, video_url: yt2.dl_link }})
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function youtube2(req, res) {
          try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await scraper.youtubedlv2(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     } 
    
    async function ytplaymp3(req, res) {
         try {
            let query = req.query.query
            let apikey = req.query.apikey
            if (!query) return res.status(400).send({ status: 400, message: 'query parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.json({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.ytPlayMp3(query)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function ytplaymp4(req, res) {
         try {
            let query = req.query.query
            let apikey = req.query.apikey
            if (!query) return res.status(400).send({ status: 400, message: 'query parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.json({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.ytPlayMp4(query)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }

       async function ytmp3(req, res) {
          try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.ytDonlodMp3(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     } 
     
     async function ytmp4(req, res) {
          try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.ytDonlodMp4(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }      

     async function twitter(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await getInfo(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function twitter2(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.twitterdl(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
          	console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
      }
      
      async function twitter3(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.twitter2(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
          	console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
      }
      
      async function zippyshare(req, res) {
          try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.zippyshare(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function xnxxdl(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.xnxxDl(url)
            let urlnya = await shorts(result.files.high)
              res.status(200).json({ status: 200, result: { title: result.title, url: urlnya }})
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function xnxxsearch(req, res) {
         try {
            let query = req.query.query
            let apikey = req.query.apikey
            if (!query) return res.status(400).send({ status: 400, message: 'query parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.json({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let hasil = await ch.xnxxSearch(query)
              res.status(200).json(hasil)
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function pindl(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.pinterestdl(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function pindl2(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.pinterestdl2(url)
              res.status(200).json({ status: 200, result: result.result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function mediafire(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.mediafireDl(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function soundcloud(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.scdl(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function soundcloud2(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.soundcloud(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function instagram(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.igDownload(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function instagram2(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await scraper.instagramdl(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }

     async function instastory(req, res) {
         try {
            let username = req.query.username
            let apikey = req.query.apikey
            if (!username) return res.status(400).send({ status: 400, message: 'username parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.igStory(username)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function instastory2(req, res) {
         try {
            let username = req.query.username
            let apikey = req.query.apikey
            if (!username) return res.status(400).send({ status: 400, message: 'username parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await scraper.instagramStory(username)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function sfiledl(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.sfiledl(url)
              res.status(200).json({ status: 200, result: result.data })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function solidfiles(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.solidfiles(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function stickerDl(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.stickerDl(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function telesticker(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.telesticker(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function linestickerdownload(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.linestickerdown(url)
              res.status(200).json({ status: 200, result: result.result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function facebook(req, res) {       
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.facebook2(url)
              res.status(200).json({ status: 200, result: result.hasil })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function facebook2(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let hasil = await ch.facebook(url)
            let title = await (hasil.title)
            let sd = await (hasil.sd)
            let hd = await (hasil.hd)
              res.status(200).json({ status: 200, result: { title: title, SD: sd, HD: hd  }})
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }     

     async function aiovideodl(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await scraper.aiovideodl(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function pixiv(req, res) {
         try {
            let id = req.query.id
            let ext = req.query.ext
            let apikey = req.query.apikey
            if (!id) return res.status(400).send({ status: 400, message: 'id parameter cannot be empty', result: 'error' })
            if (!ext) return res.status(400).send({ status: 400, message: 'ext parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let hasil = await ch.pixivDl(id, ext)
            let data = await getBuffer(hasil)
              await fs.writeFileSync(__path +'/tmp/image.jpg', data)
              await res.sendFile(__path +'/tmp/image.jpg')
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function cocofun(req, res) {       
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.cocofun(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function likeedl(req, res) {       
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.likedl(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function imdbdl(req, res) {       
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.imbd(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function imgurdl(req, res) {       
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.imgur(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
          }
     }
     
     async function umma(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.umma(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function anonfiledl(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.anonfiledl(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6289503657396', result: 'error' })
          }
     }
      
      async function snapinsta(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await scraper.instagramdl(url)
              res.status(200).json({ status: 200, result: result.result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6289503657396', result: 'error' })
          }
     }
     
     async function dddtik(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.dddtik(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6289503657396', result: 'error' })
          }
     }
     
     async function tiktokder(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.tiktokder(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6289503657396', result: 'error' })
          }
     }
     
     async function snaptik(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await scraper.tiktokdl(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6289503657396', result: 'error' })
          }
     }
     
     async function keeptiktok(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await zrapi.keeptiktok(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6289503657396', result: 'error' })
          }
     }
     
     async function googledrive(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.GDriveDl(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6289503657396', result: 'error' })
          }
     }    
     
     async function snapsave(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await scraper.snapsave(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6289503657396', result: 'error' })
          }
     }    
     
     async function ssstik(req, res) {
         try {
            let url = req.query.url
            let apikey = req.query.apikey
            if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await scraper.tiktokdlv3(url)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6289503657396', result: 'error' })
          }
     }    

module.exports = { 
   tiktok, 
   tiktoknowm, 
   tiktokwm,
   youtube, 
   ytplaymp4,
   ytplaymp3,
   ytmp3,
   ytmp4,
   twitter, 
   tiktokmate,
   twitter2, 
   solidfiles,
   zippyshare,
   xnxxdl,
   xnxxsearch,
   goredl,
   tiktokaudio,
   savefrom,
   tiktokmusically,
   pindl, 
   mediafire,
   soundcloud,
   instagram,
   instastory,
   sfiledl,
   stickerDl,
   telesticker,
   facebook,
   facebook2,
   instagram2,
   aiovideodl,
   pixiv,
   pindl2,
   linestickerdownload,
   soundcloud2,
   twitter3,
   imgurdl,
   imdbdl,
   likeedl,
   cocofun,
   umma,
   instastory2,
   youtube2,
   anonfiledl,
   tiktokder,
   dddtik,
   snapinsta,
   keeptiktok,
   snaptik,
   googledrive,
   snapsave,
   ssstik,
   tiktok2
}
