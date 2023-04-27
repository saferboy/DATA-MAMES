import joi from 'joi'


export const userBody = joi.object({
    name:       joi.string().min(1).required(),
    surname:    joi.string().min(1).required(),
    nickname:   joi.string().min(1).required(),
    password:   joi.string().min(1).required()
})


export const loginBody = joi.object({
    nickname:   joi.string().min(1).required(),
    password:   joi.string().min(1).required()
})

