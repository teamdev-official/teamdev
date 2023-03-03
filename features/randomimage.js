const { getBuffer, sleep } = require('../lib/function')
const { cekKey, limitAdd, isLimit } = require('../database/db');

const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')

__path = process.cwd()
     
     async function aesthetic(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/aesthetic.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function blackpink(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/blackpink.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function bonekachucky(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/boneka.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function wallpapercyberspace(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/CyberSpace.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function wallpaperhacker(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/hekel.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function wallpaperislamic(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/Islamic.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function wallpapermountain(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/Mountain.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function wallpaperprogramming(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/Programming.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function wallpaperpubg(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/pubg.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function wallpapertechnology(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/Technology.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function darkjoke(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/darkjoke.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function darkmeme(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/darkmeme.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function meme(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/meme.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function memesuki(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/suki.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }

     async function doraemon(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/doraemon.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function kpop(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/kpop.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function kucing(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/kucing.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function mobil(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/mobil.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function motor(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/motor.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function pentol(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/pentol.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function pokemon(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/pokemon.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function quotesimage(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/quotesimage.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function quotesyt(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/quotesyt.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function renungan(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/renungan.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function satanic(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/satanic.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function tatasurya(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/tatasurya.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function yulibocil(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/yulibocil.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function anjing(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/image/anjing.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.png', data)
         await res.sendFile(__path +'/tmp/image.png')
     }
     
     async function ppcouple(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let couple = JSON.parse(fs.readFileSync(__path +'/lib/data/image/couple.json'))
         let result = couple[Math.floor(Math.random() * couple.length)]
         res.json({ status: 200, result: result })
     }
     
module.exports = { 
   aesthetic,
   blackpink,
   bonekachucky,
   wallpapercyberspace,
   wallpaperhacker,
   wallpapertechnology,
   wallpaperpubg,
   wallpaperprogramming,
   wallpapermountain,
   wallpaperislamic,
   darkjoke,
   darkmeme,
   meme,
   memesuki,
   doraemon,
   pentol,
   motor,
   mobil,
   kucing,
   kpop,
   satanic,
   renungan,
   pokemon,
   quotesimage,
   quotesyt,
   ppcouple,
   anjing,
   yulibocil,
   tatasurya 
}
