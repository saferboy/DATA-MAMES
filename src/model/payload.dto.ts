import { Permission } from "@prisma/client"

export type Payload = {
    userId:     number,
    name:       string,
    surname:    string,
    nickname:   string,
    permissions: Permission[]
}