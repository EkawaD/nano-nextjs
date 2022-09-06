import type { NextApiRequest, NextApiResponse } from 'next'
import Database from '../../../middleware/mongoose'
import Test from '../../../models/Test'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    try {
        await Database();
        const test = await Test.create(req.body)

        res.status(200).json(test)
        
    } catch (error) {
        res.status(200).json({ error })
    }
    
}
