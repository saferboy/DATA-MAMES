// import * as redisJwt from './jwt/redis-jwt.service'
import * as localJwt from './jwt/local-jwt.service'

import { serverConfig } from "../config/index"

const service = localJwt

const { sign, verify } = service

export {
    sign,
    verify
}