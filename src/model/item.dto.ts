import { AuthorBody } from "./author.dto";

export interface ItemBody {
    id: number,
    author: AuthorBody,
    createAt: number,
    description: string,
    thumbnail: string
}