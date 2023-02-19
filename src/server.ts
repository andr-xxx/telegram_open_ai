import express from 'express'
import {initTGBot} from './tgBot';
import {logger} from './logger';

export const startServer = () => {
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.listen(3000, () => {
        logger.info('server started')
        initTGBot()
    })
}

