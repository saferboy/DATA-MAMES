import multer from "multer";
import { v4 as uuid } from "uuid"



const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    }, 
    filename: (req, file, callback) => {
        callback(null, uuid() + '.png')
    }
})

export const upload = multer({ storage })
