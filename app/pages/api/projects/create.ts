import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Handle project creation
    const project = req.body
    // Add to database
    res.status(200).json({ message: 'Project created successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error creating project' })
  }
}
