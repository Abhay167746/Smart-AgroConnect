
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import tomatoes from "../assets/tomato.jpg";
// import potatoes from "../assets/potato.jpg";
// import carrots from "../assets/carrot.jpg";
// import spinach from "../assets/spinach.jpg";
// import cabbage from "../assets/cabbage.jpg";
// import onions from "../assets/onion.jpg";


// const ProduceCard = ({ item }) => {
//   return (
//     <div className="border rounded-md p-4 shadow-md bg-white hover:scale-105 transition transform">
//       <img
//         src={item.image}
//         alt={item.name}
//         className="h-40 w-full object-cover rounded-md"
//       />
//       <h2 className="mt-2 font-bold text-lg text-green-800">{item.name}</h2>
//       <p className="text-green-700 font-semibold">₹{item.price}</p>
//     </div>
//   );
// };

// // Mock data hai ye 
// const getProduceList = async () => {
//   return [
//     { id: 1, name: "Tomatoes", price: 40, image: tomatoes },
//     { id: 2, name: "Potatoes", price: 25, image: potatoes },
//     { id: 3, name: "Carrots", price: 30, image: carrots },
//     { id: 4, name: "Spinach", price: 20, image: spinach },
//     { id: 5, name: "Cabbage", price: 35, image: cabbage },
//     { id: 6, name: "Onions", price: 45, image: onions },
//   ];
// };

// const Marketplace = () => {
//   const [produceList, setProduceList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getProduceList();
//         setProduceList(data);
//       } catch (err) {
//         console.error("Error fetching produce", err);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-green-50 p-6 pt-28">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-green-700">Marketplace</h1>
//         <Link
//           to="/marketplace/list"
//           className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//         >
//           + List Your Produce
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {produceList.length === 0 ? (
//           <p className="text-gray-500">No produce listed yet.</p>
//         ) : (
//           produceList.map((item) => <ProduceCard key={item.id} item={item} />)
//         )}
//       </div>
//     </div>
//   );
// };

// export default Marketplace;



import { useState } from "react";
import { Star } from "lucide-react"; // install lucide-react for icons
import spinach from "../assets/spinach.jpg";
import tomato from "../assets/tomato.jpg";
import potato from "../assets/potato.jpg";
import onion from "../assets/onion.jpg";
import cabbage from "../assets/cabbage.jpg";
import carrot from "../assets/carrot.jpg";

// Dummy data
const products = [
  {
    id: 1,
    name: "Spinach",
    price: 20,
    quantity: "50 kg",
    rating: 4,
    image: spinach,
    verified: true,
    featured: false,
  },
  {
    id: 2,
    name: "Tomatoes",
    price: 40,
    quantity: "100 kg",
    rating: 5,
    image: tomato,
    verified: true,
    featured: true,
  },
  {
    id: 3,
    name: "Potatoes",
    price: 25,
    quantity: "200 kg",
    rating: 3,
    image: potato,
    verified: false,
    featured: false,
  },
  {
    id: 4,
    name: "Onions",
    price: 35,
    quantity: "80 kg",
    rating: 4,
    image: onion,
    verified: true,
    featured: false,
  },
  {
    id: 5,
    name: "Cabbage",
    price: 15,
    quantity: "60 kg",
    rating: 5,
    image: cabbage,
    verified: true,
    featured: true,
  },
  {
    id: 6,
    name: "Carrots",
    price: 30,
    quantity: "40 kg",
    rating: 4,
    image: carrot,
    verified: false,
    featured: false,
  },
];

// Star Rating Component
const Rating = ({ value }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < value ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Marketplace = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "verified" && product.verified) ||
      (filter === "featured" && product.featured);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
        🌾 Farmer Marketplace
      </h1>

      {/* Header with Search and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="🔍 Search produce..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border rounded-lg w-full md:w-1/3 focus:ring-2 focus:ring-green-400"
        />

        <div className="flex gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              filter === "all" ? "bg-green-600 text-white" : "bg-white border"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("verified")}
            className={`px-4 py-2 rounded-lg ${
              filter === "verified"
                ? "bg-green-600 text-white"
                : "bg-white border"
            }`}
          >
            Verified
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-4 py-2 rounded-lg ${
              filter === "featured"
                ? "bg-green-600 text-white"
                : "bg-white border"
            }`}
          >
            Featured
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">Quantity: {product.quantity}</p>
              <p className="text-green-700 font-bold">
                Best Price: ₹{product.price}/kg
              </p>
              <Rating value={product.rating} />

              {/* Action Buttons */}
              <div className="flex gap-3 mt-3">
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg">
                  View
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-10">No products found.</p>
      )}
    </div>
  );
};

export default Marketplace;
