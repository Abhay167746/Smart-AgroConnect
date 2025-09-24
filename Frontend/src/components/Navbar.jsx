
import { Link } from 'react-router-dom';
import { FaLeaf, FaStore, FaBookOpen } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-50">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-green-600">SmartAgroConnect</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Empowering farmers with AI-driven insights, direct market access, and essential knowledge for a prosperous future.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/crop-prediction"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                  Predict Your Crop Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Our Features</h2>
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col items-center text-center">
              <FaLeaf className="h-12 w-12 text-green-500" />
              <dt className="mt-4 text-lg leading-6 font-medium text-gray-900">
                AI Crop Prediction
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Leverage powerful AI to determine the most suitable crops for your land based on soil and climate data.
              </dd>
            </div>

            <div className="flex flex-col items-center text-center">
              <FaStore className="h-12 w-12 text-green-500" />
              <dt className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Direct Marketplace
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Connect directly with buyers to sell your produce without intermediaries, ensuring you get the best price.
              </dd>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <FaBookOpen className="h-12 w-12 text-green-500" />
              <dt className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Knowledge Hub
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Access a rich library of articles, guides, and tools to enhance your farming techniques and profitability.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
