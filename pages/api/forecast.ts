// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'

let apiKey;
if(process.env.OPEN_WEATHER_API_KEY !== undefined || process.env.OPEN_WEATHER_API_KEY !== "undefined"){
  apiKey = process.env.OPEN_WEATHER_API_KEY;
}else{
  new Error("OpenWeather API Key not found!")
}

type Data = {
  response: string
}

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
console.log('API Url: ' + apiUrl)
let response = fetch(apiUrl);
console.log('Resp: ' + response);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(response)
}
