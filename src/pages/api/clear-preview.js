/**
 * Clear Preview Mode
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default function clearPreview(req, res) {
  res.clearPreviewData();
}
