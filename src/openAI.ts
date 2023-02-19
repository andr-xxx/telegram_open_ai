import {Configuration, OpenAIApi, Model} from 'openai'


interface IOpenAIOptions {
    organization: string
    apiKey: string
}

export class OpenAI {
    private openAi: OpenAIApi
    private modelsList: Model[] = []
    private DEFAULT_MODEL = 'text-davinci-003'
    private TOKEN_LENGTH = 4000

    constructor({organization, apiKey}: IOpenAIOptions) {
        const configuration = new Configuration({
            organization,
            apiKey,
        })

        this.openAi = new OpenAIApi(configuration)
    }

    getModels = async () => {
        try {
            const {data} = await this.openAi.listModels()
            this.modelsList = data.data
        } catch (e) {
            console.log(e)
        }
    }

    ask = async (prompt: string): Promise<string> => {
        try {
            const {data} = await this.openAi?.createCompletion({
                model: this.DEFAULT_MODEL,
                prompt,
                max_tokens: this.TOKEN_LENGTH,
                top_p: 0.1,
            })

            if (data.choices && data.choices.length) {
                return data.choices[0].text as string
            }

            return 'Cant find answer to your question'
        } catch (e) {
            return 'Something went wrong. Please try again'
        }
    }
}
