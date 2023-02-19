import TelegramBot from 'node-telegram-bot-api'
import {appConfig} from './appConfig'
import {OpenAI} from './openAI';

export const initTGBot = () => {
    const bot = new TelegramBot(appConfig.telegramApiKey, {polling: true});
    const chatGpt = new OpenAI({organization: appConfig.openAIOrganization, apiKey: appConfig.openAIKey})


    bot.on('message', async (msg) => {
        const {chat: {id}, text, from} = msg

        console.log(`Message from ${from?.first_name || ''} ${from?.username || ''}:`, text)

        if (text === '/start') {
            return bot.sendMessage(id, 'Hello, nice to see you :)')
        }

        if (text) {
            const response = await chatGpt.ask(text)

            console.log(response)

            return bot.sendMessage(id, response)
        }

        bot.sendMessage(id, 'Please, ask your question')
    })
}
