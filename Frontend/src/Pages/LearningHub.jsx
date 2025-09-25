import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LearningImage from '../assets/learning3.jpg';

// Article section hai ye
const ArticleCard = ({ title, description, url, source, image }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer flex flex-col"
    >
      <div className="h-40 w-full overflow-hidden">
        <img
          src={image || "https://via.placeholder.com/400x200?text=No+Image"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
        </div>
        <p className="text-xs mt-3 text-gray-400">Source: {source}</p>
      </div>
    </a>
  );
};

// Video Card Component
const VideoCard = ({ title, url }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
      <iframe
        className="w-full h-56"
        src={url}
        title={title}
        allowFullScreen
      ></iframe>
      <div className="bg-white p-3">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

const LearningHub = () => {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [projectedIncome, setProjectedIncome] = useState(0);
  const [costForm, setCostForm] = useState({ crop: "", yield: "", price: "" });

  // Fetch farmer-specific news from NewsAPI
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=farming OR agriculture OR crops OR "farmer news" OR irrigation OR "crop prices"&language=en&pageSize=6&sortBy=publishedAt&apiKey=a54786939b9a462f97355f7dc7600993`
        );
        const data = await res.json();
        if (data.status === "ok") {
          setNews(data.articles);
        } else {
          toast.error("Failed to fetch news");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error fetching news");
      } finally {
        setLoadingNews(false);
      }
    };
    fetchNews();
  }, []);

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
      toast.error("⚠ Please enter valid numbers for yield and price.");
    }
  };

  return (
    <div className="min-h-screen bg-green-50">

      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url(${LearningImage})` }}
        className="bg-cover bg-center py-20 px-6 text-white text-center"
      >
        <h1 className="text-4xl font-extrabold">🌾 Farmer Learning Hub</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto">
          Empowering farmers with knowledge, tools, and expert guidance to grow better and earn more.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-12">

        {/* News Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📰 Latest Agriculture News</h2>
          {loadingNews ? (
            <p className="text-center text-gray-600">Loading news...</p>
          ) : news.length === 0 ? (
            <p className="text-center text-gray-600">No news found.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {news.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  description={article.description || "No description available"}
                  url={article.url}
                  source={article.source.name}
                  image={article.urlToImage} 
                />
              ))}
            </div>
          )}
        </section>

        {/* Videos Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🎥 Learning Videos</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <VideoCard title="Best Irrigation Practices" url="https://www.youtube.com/embed/Z9HAy9EYKKs" />
            <VideoCard title="Organic Fertilizer Guide" url="https://www.youtube.com/embed/MM1MVa4kLwc" />
            <VideoCard title="Crop Protection Tips" url="https://www.youtube.com/embed/nb2EvdW9Kes" />
          </div>
        </section>

        {/* Crop Income Calculator */}
        <section className="p-6 bg-white rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">🧮 Crop Income Calculator</h2>
          <form onSubmit={calculateIncome} className="flex flex-col md:flex-row gap-4 md:items-end">
            <input type="text" name="crop" placeholder="Crop (e.g., Wheat)" value={costForm.crop} onChange={handleCostChange} className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500"/>
            <input type="number" name="yield" placeholder="Yield (kg/acre)" value={costForm.yield} onChange={handleCostChange} className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500"/>
            <input type="number" name="price" placeholder="Price (₹/kg)" value={costForm.price} onChange={handleCostChange} className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500"/>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg">Calculate</button>
          </form>
          {projectedIncome > 0 && (
            <div className="mt-6 text-center text-xl font-bold text-green-700">
              🌟 Projected Income: ₹{projectedIncome}
            </div>
          )}
        </section>

        {/* Expert Support Section */}
        <section className="p-6 bg-white rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">🤝 Connect with an Expert</h2>
          <form className="flex flex-col gap-4 max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500"/>
            <input type="email" placeholder="Your Email" className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500"/>
            <textarea placeholder="Your Query..." rows="4" className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">Submit Query</button>
          </form>
        </section>

      </div>
    </div>
  );
};

export default LearningHub;
