import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(process.env.API_URL)
    const data = await response.data;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching data'
    })
  }

}