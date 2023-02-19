import express from 'express'
import {initTGBot} from './tgBot';

export const startServer = () => {
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    app.listen(3000, () => {
        console.log('server started')
        initTGBot()
    })
}

