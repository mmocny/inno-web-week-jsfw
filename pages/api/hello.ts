// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import delay from '../../utils/delay';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('API HIT Start');
  await delay(1000);
  console.log('API HIT End');

  res.status(200).json({ name: 'John Doe2' })
}
