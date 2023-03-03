const { shorts } = require('../lib/function')
const { cekKey, limitAdd, isLimit } = require('../database/db');
const ch = require('../lib/scraper')

const fs = require('fs')
const scraper = require('@bochilteam/scraper')

__path = process.cwd()

     async function tebakgambar(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await ch.tebakgambar()
         let img = await shorts(result.img)
         let jawab = result.jawaban
         res.status(200).json({ status: 200, result: { pertanyaan: img, jawaban: jawab }})
     }
      
     async function asahotak(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/asahotak.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result })
     }
     
     async function susunkata(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/susunkata.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result })
     }
     
     async function siapakahaku(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/siapakahaku.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result })
     }
     
     async function tebakkata(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/tebakkata.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result })
     }
     
     async function tebakkalimat(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/tebakkalimat.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result })
     }
     
     async function tebaktebakan(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/tebaktebakan.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result })
     }
     
     async function tekateki(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/tekateki.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result })
     }
     
     async function tebakbendera(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/tebakbendera.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result.result })
     }
     
     async function tebakkimia(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/tebakkimia.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result.result })
     }
     
     async function caklontong(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/caklontong.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result.result })
     }
     
     async function tebaklirik(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/tebaklirik.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result.result })
     }
     
     async function tebaklagu(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/tebaklagu.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result })
     }
     
     async function tebakjenaka(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/tebakjenaka.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json({ status: 200, result: result.result })
     }
     
     async function tebakanime(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/tebakanime.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json(result)
     }
     
     async function tebakwaifu(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/tebakwaifu.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json(result)
     }
     
     async function tebakaplikasi(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let game = JSON.parse(fs.readFileSync(__path +'/lib/data/game/tebakaplikasi.json'))
         let result = game[Math.floor(Math.random() * game.length)]
         res.status(200).json(result)
     }
     
     async function family100(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await scraper.family100()
         res.status(200).json({ status: 200, result: result })
     }
     
     async function tebakkabupaten(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await scraper.tebakkabupaten()
         let pertanyaan = await shorts(result.url)
         let jawab = result.title
         res.status(200).json({ status: 200, result: { pertanyaan: pertanyaan, jawaban: jawab }})
     }
     
     async function truthdare(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let truth = await scraper.truth()
         let dare = await scraper.dare()
         res.status(200).json({ status: 200, result: { truth: truth, dare: dare }})
     }
  
module.exports = { 
   tebakgambar, 
   asahotak, 
   susunkata,
   siapakahaku, 
   tebakkata, 
   tebakkalimat, 
   tebaktebakan,
   tekateki,
   tebakbendera,
   tebakkimia,
   caklontong,
   tebakaplikasi,
   tebakwaifu,
   tebakanime,
   tebakjenaka,
   tebaklagu,
   tebaklirik,
   family100,
   tebakkabupaten,
   truthdare
}
