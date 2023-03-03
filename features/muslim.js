const ch = require('../lib/scraper')
const { getBuffer, sleep } = require('../lib/function')
const { cekKey, limitAdd, isLimit } = require('../database/db');

const fs = require('fs')
const request = require('request')
const axios = require('axios')
const fetch = require('node-fetch')

__path = process.cwd()

     async function asmaulhusna(req, res) {            
            let apikey = req.query.apikey            
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let muslim = JSON.parse(fs.readFileSync(__path +'/lib/data/muslim/AsmaulHusna.json'))         
            res.status(200).json(muslim)
            }
            
      async function ayatkursi(req, res) {            
            let apikey = req.query.apikey            
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let muslim = JSON.parse(fs.readFileSync(__path +'/lib/data/muslim/ayatkursi.json'))         
            res.status(200).json(muslim)
            }
            
         async function bacaansholat(req, res) {           
            let apikey = req.query.apikey           
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let muslim = JSON.parse(fs.readFileSync(__path +'/lib/data/muslim/bacaanshalat.json'))         
            res.status(200).json(muslim)
            }
            
       async function niatsholat(req, res) {           
            let apikey = req.query.apikey           
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let muslim = JSON.parse(fs.readFileSync(__path +'/lib/data/muslim/niatshalat.json'))         
            res.status(200).json(muslim)
            }
            
         async function tahlil(req, res) {           
            let apikey = req.query.apikey           
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let muslim = JSON.parse(fs.readFileSync(__path +'/lib/data/muslim/tahlil.json'))         
            res.status(200).json(muslim)
            }
            
         async function wirid(req, res) {           
            let apikey = req.query.apikey           
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let muslim = JSON.parse(fs.readFileSync(__path +'/lib/data/muslim/wirid.json'))         
            res.status(200).json(muslim)
            }       
            
         async function randomquran(req, res) {           
            let apikey = req.query.apikey           
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let muslim = JSON.parse(fs.readFileSync(__path +'/lib/data/muslim/quran.json'))         
            let result = muslim[Math.floor(Math.random() * muslim.length)]
            res.status(200).json({ status: 200, result: result })
            }        
    
       async function sholat(req, res) {
         try {
            let kota = req.query.kota
            let apikey = req.query.apikey
            if (!kota) return res.status(400).send({ status: 400, message: 'kota parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.sholat(kota)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function sholat2(req, res) {
         try {
            let no = req.query.no
            let apikey = req.query.apikey
            if (!no) return res.status(400).send({ status: 400, message: 'no parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.sholatt(no)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function listsurah(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await ch.listsurah()
         res.status(200).json({ status: 200, result: result.listsurah })
     }          

     async function surah(req, res) {
         try {
            let surah = req.query.surah
            let apikey = req.query.apikey
            if (!surah) return res.status(400).send({ status: 400, message: 'surah parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.surah(surah)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function surah2(req, res) {
            try {
            let no = req.query.no
            let apikey = req.query.apikey
            if (!no) return res.status(400).send({ status: 400, message: 'no parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.surahh(no)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function tafsirsurah(req, res) {
         try {
            let query = req.query.query
            let apikey = req.query.apikey
            if (!query) return res.status(400).send({ status: 400, message: 'query parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.tafsirsurah(query)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function kisahnabi(req, res) {
         try {
            let nabi = req.query.nabi
            let apikey = req.query.apikey
            if (!nabi) return res.status(400).send({ status: 400, message: 'nabi parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.Searchnabi(nabi)
              res.status(200).json({ status: 200, result: result })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function alquran(req, res) {
         try {
            let surah = req.query.surah
            let ayat = req.query.ayat
            let apikey = req.query.apikey
            if (!surah) return res.status(400).send({ status: 400, message: 'surah parameter cannot be empty', result: 'error' })
            if (!ayat) return res.status(400).send({ status: 400, message: 'ayat parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
           .then(response => response.json())
           .then(result => {
              res.status(200).json({ status: 200, result: result.data })
            })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function hadist(req, res) {
         try {
            let kitab = req.query.kitab
            let nomor = req.query.nomor
            let apikey = req.query.apikey
            if (!kitab) return res.status(400).send({ status: 400, message: 'kitab parameter cannot be empty', result: 'error' })
            if (!nomor) return res.status(400).send({ status: 400, message: 'nomor parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
           .then(response => response.json())
           .then(result => {
              res.status(200).json({ status: 200, result: result.data })
            })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function alquranaudio(req, res) {            
         let ayat = req.query.ayat
         let apikey = req.query.apikey
         if (!ayat) return res.status(400).send({ status: 400, message: 'ayat parameter cannot be empty', result: 'error' })            
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })         
         let data = await getBuffer(`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayat}.mp3`)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/audio.mp3', data)
         await res.sendFile(__path +'/tmp/audio.mp3')
     }

module.exports = { 
   tahlil,
   wirid,
   niatsholat,
   randomquran,
   listsurah,
   sholat,
   tafsirsurah,
   hadist,
   alquran,
   surah, 
   kisahnabi,
   bacaansholat,
   surah2,
   sholat2,
   ayatkursi,
   asmaulhusna,
   alquranaudio
}