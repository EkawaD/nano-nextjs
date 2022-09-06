import type { NextApiRequest, NextApiResponse } from 'next'
import Database from '../../../middleware/mongoose'
import Test from '../../../models/Test'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    try {
      await Database();
      const tests = await Test.find();

      res.status(200).json(tests)
        
    } catch (error) {
        res.status(200).json({ error })
    }
    
}
