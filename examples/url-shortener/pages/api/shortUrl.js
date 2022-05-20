import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const method = req.method
  const { url } = req.body

  if (method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    })
  }

  try {
    const longUrl = await prisma.links.findUnique({
      where: { url }
    })

    if (longUrl) {
      return res.status(200).json(longUrl)
    }

    const shortUrl = Math.random().toString(36).substring(2, 7);
    const data = await prisma.links.create({
      data: {
        url,
        shortUrl,
      }
    })

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
