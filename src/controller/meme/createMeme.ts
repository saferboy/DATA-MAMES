import { Request, Response, NextFunction } from "express";
import { createMeme } from "@service/meme.service";
import { MemeBody } from "@model/memeDto";
import optimazeImage from '@middleware/optimazeImage'

export interface File {

}

export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { categoryId, userId, description, createdAt } = req.body

        if (!req.file) {
            return res.status(400).json({
                message: "File image not provided"
            })
        }
        const thumbnailFile = (req.files as { [fieldname: string]: File[] })['thumbnail'][0];
        const imageFile = (req.files as { [fieldname: string]: File[] })['image'][0];

        const thumbnailPath = await optimazeImage(thumbnailFile);
        const imagePath = await optimazeImage(imageFile);

        const option = await createMeme(categoryId, userId,description, thumbnailFile, imageFile)

        return res.status(201).json({
            id: option.id,
            image: option.image,
        })

    } catch (err) {
        next(err)
    }
}




// app.post('/upload', upload.single('thumbnail'), async (req, res) => {
//     try {
//         const { title, memeId } = req.body;
//         const thumbnailPath = await optimizeImages(thumbnailFile, true);
//         await db.collection('memes').insertOne({ title, memeId, thumbnail: thumbnailPath });
//         console.log('Meme added to database!');
//         res.sendStatus(200);
//     } catch (error) {
//         console.error('Error uploading meme:', error);
//         res.sendStatus(500);
//     }
// });