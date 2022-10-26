export default function handler(req, res) {
  const { dataId } = req.query;
  res.end(`Post: ${dataId}`);
}
