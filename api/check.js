export default function handler(req, res) {
  const allowedRaw = process.env.ALLOWED_CODES || "";
  const allowedCodes = allowedRaw.split(",").map(code => code.trim());

  const { code } = req.query;

  if (allowedCodes.includes(code)) {
    res.status(200).json({ allowed: true });
  } else {
    res.status(403).json({ allowed: false });
  }
}
