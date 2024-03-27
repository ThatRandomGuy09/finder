import { getServerSession } from "next-auth";



export const authConfig = {}

export function getSession() {
    return getServerSession()
}
