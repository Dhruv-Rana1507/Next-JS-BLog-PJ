
//Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// this is the valid path to get the data
// http://localhost:3000/api/getblogs?slug=how-to-learn-flask


import * as fs from 'fs';
export default function handler(req, res) {
  // console.log(req,res)
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
    
    if (err) {
            console.error(err);
             res.status(500).json({ error: 'Internal Server Error' });
          }
    console.log(req.query.slug);
          res.status(200).json(JSON.parse(data));
  })
}
