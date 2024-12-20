
import z from 'zod'

export async function POST ( request ) {
    const body = await request.json()

    z.object({
        email: z.string().email(),
        password: z.string().min(8),
    })
}