// Simple healthcheck endpoint to verify Vercel API routing

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({
    ok: true,
    route: '/api/healthcheck',
    method: req.method,
    now: new Date().toISOString()
  });
};


