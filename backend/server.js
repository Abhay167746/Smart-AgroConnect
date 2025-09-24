const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const produceRoutes = require("./routes/produceRoutes");
const iotRoutes = require("./routes/iotRoutes");
const predictRoutes = require("./routes/predictRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Smart AgroConnect API is running!" });
});

app.use("/api/produce", produceRoutes);
app.use("/api/iot", iotRoutes);
app.use("/api/predict", predictRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// mongodb+srv://ecosapiens:87654312@cluster0.jkvfs4d.mongodb.net/?