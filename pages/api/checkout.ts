// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function checkout(req: NextApiRequest, res : NextApiResponse){
  const {cookies} = req
  const  checkoutUrl = cookies[]
  if(checkoutUrl){
    res.redirect(checkoutUrl)
  }else{
    res.redirect("/")
  }
}
