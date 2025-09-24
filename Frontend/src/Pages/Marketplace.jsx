
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import tomatoes from "../assets/tomato.jpg";
import potatoes from "../assets/potato.jpg";
import carrots from "../assets/carrot.jpg";
import spinach from "../assets/spinach.jpg";
import cabbage from "../assets/cabbage.jpg";
import onions from "../assets/onion.jpg";


const ProduceCard = ({ item }) => {
  return (
    <div className="border rounded-md p-4 shadow-md bg-white hover:scale-105 transition transform">
      <img
        src={item.image}
        alt={item.name}
        className="h-40 w-full object-cover rounded-md"
      />
      <h2 className="mt-2 font-bold text-lg text-green-800">{item.name}</h2>
      <p className="text-green-700 font-semibold">₹{item.price}</p>
    </div>
  );
};

// Mock data hai ye 
const getProduceList = async () => {
  return [
    { id: 1, name: "Tomatoes", price: 40, image: tomatoes },
    { id: 2, name: "Potatoes", price: 25, image: potatoes },
    { id: 3, name: "Carrots", price: 30, image: carrots },
    { id: 4, name: "Spinach", price: 20, image: spinach },
    { id: 5, name: "Cabbage", price: 35, image: cabbage },
    { id: 6, name: "Onions", price: 45, image: onions },
  ];
};

const Marketplace = () => {
  const [produceList, setProduceList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduceList();
        setProduceList(data);
      } catch (err) {
        console.error("Error fetching produce", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-green-50 p-6 pt-28">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">Marketplace</h1>
        <Link
          to="/marketplace/list"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          + List Your Produce
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produceList.length === 0 ? (
          <p className="text-gray-500">No produce listed yet.</p>
        ) : (
          produceList.map((item) => <ProduceCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default Marketplace;
