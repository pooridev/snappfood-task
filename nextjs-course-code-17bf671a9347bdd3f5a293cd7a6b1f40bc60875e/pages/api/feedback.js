export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json({
      status: 200,
      message: 'Feedback received'
    });
  }
}
