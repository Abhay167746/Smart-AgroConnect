import { useLocation, Link, Navigate } from 'react-router-dom';

const PredictionResults = () => {
  const location = useLocation();
  const prediction = location.state?.prediction; // Safely get the prediction from the state

  // If the user lands on this page directly without a prediction, redirect them.
  if (!prediction) {
    return <Navigate to="/crop-prediction" />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Our AI Recommends
        </h2>
        <div className="bg-green-100 p-6 rounded-lg border-2 border-dashed border-green-400">
          <p className="text-5xl font-extrabold text-green-600 tracking-wider">
            🌱 {prediction.toUpperCase()}
          </p>
        </div>
        <p className="text-gray-600 mt-6">
          This crop is best suited for the soil and climate conditions you provided.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/crop-prediction"
            className="w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Make Another Prediction
          </Link>
          <Link
            to="/dashboard"
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PredictionResults;