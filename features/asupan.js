const { getBuffer, sleep } = require('../lib/function')
const { cekKey, limitAdd, isLimit } = require('../database/db');

const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')
const tiktok = require('../lib/asupantiktok')

__path = process.cwd()
     
     async function asupantiktok(req, res) {
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
            let result = await tiktok.asupantiktok(query)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }

     async function asupan(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/data/asupan/asupan.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }
     
     async function bocil(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/data/asupan/bocil.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }
     
     async function geayubi(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/data/asupan/geayubi.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }
     
     async function hijaber(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let image = JSON.parse(fs.readFileSync(__path +'/lib/data/asupan/hijaber.json'))
         let result = image[Math.floor(Math.random() * (image.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/image.jpg', data)
         await res.sendFile(__path +'/tmp/image.jpg')
     }
     
     async function kayes2(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/data/asupan/kayes.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }
     
     async function loliv(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/data/asupan/loli.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }
     
     async function notnot2(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/data/asupan/notnot.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }
     
     async function rikagusriani(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/data/asupan/rikagusriani.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }
     
     async function ukhty(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let video = JSON.parse(fs.readFileSync(__path +'/lib/data/asupan/ukhty.json'))
         let result = video[Math.floor(Math.random() * (video.length))]
         let data = await getBuffer(result)
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         await fs.writeFileSync(__path +'/tmp/video.mp4', data)
         await res.sendFile(__path +'/tmp/video.mp4')
     }

     async function china(req, res) {
        let apikey = req.query.apikey
        if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
        let check = await cekKey(apikey)
        if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
        let video = JSON.parse(fs.readFileSync(__path +'/lib/data/cecan/china.json'))
        let result = video[Math.floor(Math.random() * (video.length))]
        let data = await getBuffer(result)
        let limit = await isLimit(apikey);
        if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
        limitAdd(apikey);
        await fs.writeFileSync(__path +'/tmp/image.jpg', data)
        await res.sendFile(__path +'/tmp/image.jpg')
    }

    async function indonesia(req, res) {
        let apikey = req.query.apikey
        if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
        let check = await cekKey(apikey)
        if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
        let video = JSON.parse(fs.readFileSync(__path +'/lib/data/cecan/Indonesian.json'))
        let result = video[Math.floor(Math.random() * (video.length))]
        let data = await getBuffer(result)
        let limit = await isLimit(apikey);
        if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
        limitAdd(apikey);
        await fs.writeFileSync(__path +'/tmp/image.jpg', data)
        await res.sendFile(__path +'/tmp/image.jpg')
    }
   
    async function korea(req, res) {
        let apikey = req.query.apikey
        if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
        let check = await cekKey(apikey)
        if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
        let video = JSON.parse(fs.readFileSync(__path +'/lib/data/cecan/korea.json'))
        let result = video[Math.floor(Math.random() * (video.length))]
        let data = await getBuffer(result)
        let limit = await isLimit(apikey);
        if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
        limitAdd(apikey);
        await fs.writeFileSync(__path +'/tmp/image.jpg', data)
        await res.sendFile(__path +'/tmp/image.jpg')
    }

    async function japan(req, res) {
        let apikey = req.query.apikey
        if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
        let check = await cekKey(apikey)
        if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
        let video = JSON.parse(fs.readFileSync(__path +'/lib/data/cecan/japan.json'))
        let result = video[Math.floor(Math.random() * (video.length))]
        let data = await getBuffer(result)
        let limit = await isLimit(apikey);
        if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
        limitAdd(apikey);
        await fs.writeFileSync(__path +'/tmp/image.jpg', data)
        await res.sendFile(__path +'/tmp/image.jpg')
    }

    async function thailand(req, res) {
        let apikey = req.query.apikey
        if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
        let check = await cekKey(apikey)
        if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
        let video = JSON.parse(fs.readFileSync(__path +'/lib/data/cecan/thailand.json'))
        let result = video[Math.floor(Math.random() * (video.length))]
        let data = await getBuffer(result)
        let limit = await isLimit(apikey);
        if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
        limitAdd(apikey);
        await fs.writeFileSync(__path +'/tmp/image.jpg', data)
        await res.sendFile(__path +'/tmp/image.jpg')
    }

    async function vietnam(req, res) {
        let apikey = req.query.apikey
        if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
        let check = await cekKey(apikey)
        if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
        let video = JSON.parse(fs.readFileSync(__path +'/lib/data/cecan/vietnam.json'))
        let result = video[Math.floor(Math.random() * (video.length))]
        let data = await getBuffer(result)
        let limit = await isLimit(apikey);
        if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
        limitAdd(apikey);
        await fs.writeFileSync(__path +'/tmp/image.jpg', data)
        await res.sendFile(__path +'/tmp/image.jpg')
    }

    async function jeni(req, res) {
        let apikey = req.query.apikey
        if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
        let check = await cekKey(apikey)
        if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
        let video = JSON.parse(fs.readFileSync(__path +'/lib/data/cecan/jeni.json'))
        let result = video[Math.floor(Math.random() * (video.length))]
        let data = await getBuffer(result)
        let limit = await isLimit(apikey);
        if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
        limitAdd(apikey);
        await fs.writeFileSync(__path +'/tmp/image.jpg', data)
        await res.sendFile(__path +'/tmp/image.jpg')
    }

    async function jiso(req, res) {
        let apikey = req.query.apikey
        if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
        let check = await cekKey(apikey)
        if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
        let video = JSON.parse(fs.readFileSync(__path +'/lib/data/cecan/jiso.json'))
        let result = video[Math.floor(Math.random() * (video.length))]
        let data = await getBuffer(result)
        let limit = await isLimit(apikey);
        if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
        limitAdd(apikey);
        await fs.writeFileSync(__path +'/tmp/image.jpg', data)
        await res.sendFile(__path +'/tmp/image.jpg')
    }

    async function justina(req, res) {
        let apikey = req.query.apikey
        if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
        let check = await cekKey(apikey)
        if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
        let video = JSON.parse(fs.readFileSync(__path +'/lib/data/cecan/justina.json'))
        let result = video[Math.floor(Math.random() * (video.length))]
        let data = await getBuffer(result)
        let limit = await isLimit(apikey);
        if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
        limitAdd(apikey);
        await fs.writeFileSync(__path +'/tmp/image.jpg', data)
        await res.sendFile(__path +'/tmp/image.jpg')
    }

    async function rose(req, res) {
        let apikey = req.query.apikey
        if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
        let check = await cekKey(apikey)
        if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
        let video = JSON.parse(fs.readFileSync(__path +'/lib/data/cecan/rose.json'))
        let result = video[Math.floor(Math.random() * (video.length))]
        let data = await getBuffer(result)
        let limit = await isLimit(apikey);
        if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
        limitAdd(apikey);
        await fs.writeFileSync(__path +'/tmp/image.jpg', data)
        await res.sendFile(__path +'/tmp/image.jpg')
    }

    async function ryujin(req, res) {
        let apikey = req.query.apikey
        if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
        let check = await cekKey(apikey)
        if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
        let video = JSON.parse(fs.readFileSync(__path +'/lib/data/cecan/ryujin.json'))
        let result = video[Math.floor(Math.random() * (video.length))]
        let data = await getBuffer(result)
        let limit = await isLimit(apikey);
        if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
        limitAdd(apikey);
        await fs.writeFileSync(__path +'/tmp/image.jpg', data)
        await res.sendFile(__path +'/tmp/image.jpg')
    }

module.exports = { 
   asupan,
   loliv,
   kayes2,
   hijaber,
   geayubi,
   bocil,
   ukhty,
   rikagusriani,
   notnot2,
   asupantiktok,
   china,
   indonesia,
   japan,
   korea,
   thailand,
   vietnam,
   jeni,
   jiso,
   justina,
   rose,
   ryujin
}
