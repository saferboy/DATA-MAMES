import joi from 'joi'


export const userBody = joi.object({
    name:       joi.string().min(1).required(),
    surname:    joi.string().min(1).required(),
    nickname:   joi.string().min(1).required(),
    password:   joi.string().min(1).required(),
})


export const loginBody = joi.object({
    nickname:   joi.string().min(1).required(),
    password:   joi.string().min(1).required()
})


export const CategoryBody = joi.object({
    title:  joi.string().min(1).required(),
    emoji:  joi.string().min(1).required
})

export const CategoryParam = joi.object({
    id: joi.number().min(0).required()
})



export const memeBody = joi.object({
    image: joi.string().min(0),
    description: joi.string().min(1).required()
})


export const CommentBody = joi.object({
    comment: joi.string().min(1).required()
})