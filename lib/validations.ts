import { z } from "zod"

export const shoplistSchema = z.object({
    title: z.string().min(2).max(130),
    description: z.string().max(300),
})