/**
 * Preview Mode
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default function Preview(req, res) {
  const id = '2'; // preview
  res.setPreviewData({ id });
  res.redirect(`/item/${id}`);
}
