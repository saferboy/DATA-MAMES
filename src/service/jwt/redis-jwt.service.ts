import * as redis from 'redis'
import JWTR from 'jwt-redis'

import { Payload } from '@model/payload.dto'
import jwtconfig from '@config/jwt.config'

const { secret, expiresIn } = jwtconfig

const client: redis.RedisClientType = redis.createClient();

const jwtr = new JWTR(client);

client.connect()


export const sign = async (payload: any) => {
    return jwtr.sign(payload, secret, {
        expiresIn: expiresIn
    })
}


export const verify = async (token: string) => {
    return await jwtr.verify(token, secret) as Payload
}