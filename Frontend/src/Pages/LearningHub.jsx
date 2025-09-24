import { useState } from "react";
import { toast } from "react-toastify";

// New component for an article card
const ArticleCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 transition hover:shadow-lg cursor-pointer">
      <h3 className="text-xl font-semibold text-green-700">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
};

const LearningHub = () => {
  const [projectedIncome, setProjectedIncome] = useState(0);
  const [costForm, setCostForm] = useState({
    crop: "",
    yield: "",
    price: "",
  });

  const handleCostChange = (e) => {
    const { name, value } = e.target;
    setCostForm((prev) => ({ ...prev, [name]: value }));
  };

  const calculateIncome = (e) => {
    e.preventDefault();
    const { yield: cropYield, price } = costForm;
    const income = parseFloat(cropYield) * parseFloat(price);
    if (!isNaN(income) && income > 0) {
      setProjectedIncome(income.toFixed(2));
    } else {
      setProjectedIncome(0);
      toast.error("Please enter valid numbers for yield and price.");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        🌾 Learning Hub
      </h1>

      {/* Educational Content Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          📚 Essential Guides for Modern Farming
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArticleCard 
            title="Understanding Your Soil pH"
            description="Learn how to measure and adjust your soil's pH for optimal crop growth."
          />
          <ArticleCard 
            title="Introduction to Sustainable Farming"
            description="Discover eco-friendly methods that boost yield and protect the environment."
          />
          <ArticleCard 
            title="Using AI for Crop Selection"
            description="A simple guide on how to use our Crop Prediction Tool effectively."
          />
        </div>
      </div>

      {/* Interactive Tools Section */}
      <div className="mb-8 p-6 bg-white rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          🧮 Cost-Benefit Calculator
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Estimate your potential income for a crop.
        </p>
        <form onSubmit={calculateIncome} className="flex flex-col gap-4">
          <input
            type="text"
            name="crop"
            placeholder="Crop Name (e.g., Coffee, Chickpeas)"
            value={costForm.crop}
            onChange={handleCostChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="number"
            name="yield"
            placeholder="Projected Yield (kg/acre)"
            value={costForm.yield}
            onChange={handleCostChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="number"
            name="price"
            placeholder="Average Selling Price (₹/kg)"
            value={costForm.price}
            onChange={handleCostChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition"
          >
            Calculate Projected Income
          </button>
        </form>
        {projectedIncome > 0 && (
          <div className="mt-6 text-center text-2xl font-bold text-green-700">
            Projected Income: ₹{projectedIncome}
          </div>
        )}
      </div>

      {/* Community/Support Section */}
      <div className="p-6 bg-white rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          🤝 Connect with an Expert
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Get personalized advice from our agricultural specialists.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Describe your query..."
            rows="4"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition"
          >
            Submit Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default LearningHub;