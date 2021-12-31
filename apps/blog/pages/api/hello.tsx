// no getStaticProps or getStaticPaths in api
// all ssg put inside function
import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const email = req.body.email
    // Then save email to your database, etc...
    
    res.status(200).json({ text: 'Hello' })
}

export default handler