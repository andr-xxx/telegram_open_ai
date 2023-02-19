export class Storage {
    private storage: Record<number, string> = {}
    private DELIMITER = '\n'
    private AI_DESCRIPTION = ''

    buildMessage = (id: number, prompt: string, prefix?: string) => {
        const newMessage = prefix ? `${this.DELIMITER}${prefix}${prompt}` : prompt
        const history = this.storage[id]

        this.storage[id] = history ? `${history}${newMessage}` : `${this.AI_DESCRIPTION}${this.DELIMITER}${newMessage}`
        return this.storage[id]
    }
}