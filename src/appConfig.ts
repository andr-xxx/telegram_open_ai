import {config} from 'dotenv'

export const appConfig = {
    openAIOrganization: config().parsed?.OPEN_AI_ORGANIZATION || '',
    openAIKey: config().parsed?.OPEN_AI_API_KEY || '',
    telegramApiKey: config().parsed?.TELEGRAM_API_KEY || '',
}