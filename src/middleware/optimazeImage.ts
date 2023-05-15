import { Request, Response, NextFunction } from 'express';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminJpegtran from 'imagemin-jpegtran';  
import imageminWebp from  'imagemin-webp';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

export default async function optimizeAndSave(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.file) {
      return next();
    }

    const filename = `${uuidv4()}.jpg`;
    const outputDir = 'public/images/uploads';
    const buffer = await imagemin.buffer(req.file.buffer, {
      plugins: [
        imageminPngquant(),
        imageminJpegtran(),
        imageminWebp()
      ]
    });
    await fs.promises.writeFile(`${outputDir}/${filename}`, buffer);
    console.log('Image optimized:', `${outputDir}/${filename}`);
    req.body.imageUrl = `${outputDir}/${filename}`;
    next();
  } catch (error) {
    console.error('Error optimizing image:', error);
    return res.status(500).json({ error: 'Error optimizing image' });
  }
}
