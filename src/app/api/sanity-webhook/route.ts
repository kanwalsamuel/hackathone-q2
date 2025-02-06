import { NextApiRequest, NextApiResponse } from 'next'
import { buffer } from 'micro'
import { createHmac } from 'crypto'

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, so we can access the raw body
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const secret = process.env.SANITY_WEBHOOK_SECRET // The secret key you added in your Vercel environment variables

  // Get the raw body of the request
  const reqBuffer = await buffer(req)

  // Get the signature from the webhook headers
  const sig = req.headers['x-sanity-signature'] as string

  // Create HMAC with the secret key to verify the webhook
  const hmac = createHmac('sha256', secret)
  hmac.update(reqBuffer) // Hash the request body
  const computedSignature = hmac.digest('hex') // Get the computed signature

  // Check if the computed signature matches the signature in the header
  if (sig !== computedSignature) {
    return res.status(400).send('Invalid signature')
  }

  // Proceed to handle the webhook data
  const event = JSON.parse(reqBuffer.toString())

  // Log the event (or process it as needed)
  console.log(event)

  // Respond with a success message
  res.status(200).json({ received: true })
}

export default handler
