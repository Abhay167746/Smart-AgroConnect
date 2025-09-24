
exports.predictCrop = (req, res) => {
  const data = req.body;

  if (!data) return res.status(400).json({ error: "No data provided" });

 // abhi itna hi krte hai
  if (data.temperature > 30 && data.humidity > 70) {
    return res.json({ prediction: "Rice" });
  } else if (data.rainfall < 50) {
    return res.json({ prediction: "Wheat" });
  } else {
    return res.json({ prediction: "Maize" });
  }
};
