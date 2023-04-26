import dotenv from 'dotenv'
import {addAliases} from "module-alias"

addAliases({
    '@controller': `${__dirname}/controller`,
    '@middleware': `${__dirname}/middleware`,
    '@model':      `${__dirname}/model`,
    '@service':    `${__dirname}/service`,
    '@config' :    `${__dirname}/config`
})

dotenv.config()