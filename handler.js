'use strict'

const axios = require('axios')

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN
const TELEGRAM_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`

async function sendToUser(chat_id, text) {
    const message = `You said : ${text}`
    return axios.post(TELEGRAM_URL, { chat_id, text: message })
}

module.exports.echo = async (event) => {
    const body = JSON.parse(event.body)
    const { chat: { id: chat_id }, text} = body.message
    await sendToUser(chat_id, text)
    return { statusCode: 200 }
}
