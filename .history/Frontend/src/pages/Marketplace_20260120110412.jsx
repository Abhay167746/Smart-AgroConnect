
// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";

// // import tomatoes from "../assets/tomato.jpg";
// // import potatoes from "../assets/potato.jpg";
// // import carrots from "../assets/carrot.jpg";
// // import spinach from "../assets/spinach.jpg";
// // import cabbage from "../assets/cabbage.jpg";
// // import onions from "../assets/onion.jpg";


// // const ProduceCard = ({ item }) => {
// //   return (
// //     <div className="border rounded-md p-4 shadow-md bg-white hover:scale-105 transition transform">
// //       <img
// //         src={item.image}
// //         alt={item.name}
// //         className="h-40 w-full object-cover rounded-md"
// //       />
// //       <h2 className="mt-2 font-bold text-lg text-green-800">{item.name}</h2>
// //       <p className="text-green-700 font-semibold">₹{item.price}</p>
// //     </div>
// //   );
// // };

// // // Mock data hai ye 
// // const getProduceList = async () => {
// //   return [
// //     { id: 1, name: "Tomatoes", price: 40, image: tomatoes },
// //     { id: 2, name: "Potatoes", price: 25, image: potatoes },
// //     { id: 3, name: "Carrots", price: 30, image: carrots },
// //     { id: 4, name: "Spinach", price: 20, image: spinach },
// //     { id: 5, name: "Cabbage", price: 35, image: cabbage },
// //     { id: 6, name: "Onions", price: 45, image: onions },
// //   ];
// // };

// // const Marketplace = () => {
// //   const [produceList, setProduceList] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const data = await getProduceList();
// //         setProduceList(data);
// //       } catch (err) {
// //         console.error("Error fetching produce", err);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-green-50 p-6 pt-28">
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-3xl font-bold text-green-700">Marketplace</h1>
// //         <Link
// //           to="/marketplace/list"
// //           className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
// //         >
// //           + List Your Produce
// //         </Link>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {produceList.length === 0 ? (
// //           <p className="text-gray-500">No produce listed yet.</p>
// //         ) : (
// //           produceList.map((item) => <ProduceCard key={item.id} item={item} />)
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Marketplace;



// import { useState } from "react";
// import { Star } from "lucide-react"; // install lucide-react for icons
// import spinach from "../assets/spinach.jpg";
// import tomato from "../assets/tomato.jpg";
// import potato from "../assets/potato.jpg";
// import onion from "../assets/onion.jpg";
// import cabbage from "../assets/cabbage.jpg";
// import carrot from "../assets/carrot.jpg";

// // Dummy data
// const products = [
//   {
//     id: 1,
//     name: "Spinach",
//     price: 20,
//     quantity: "50 kg",
//     rating: 4,
//     image: spinach,
//     verified: true,
//     featured: false,
//   },
//   {
//     id: 2,
//     name: "Tomatoes",
//     price: 40,
//     quantity: "100 kg",
//     rating: 5,
//     image: tomato,
//     verified: true,
//     featured: true,
//   },
//   {
//     id: 3,
//     name: "Potatoes",
//     price: 25,
//     quantity: "200 kg",
//     rating: 3,
//     image: potato,
//     verified: false,
//     featured: false,
//   },
//   {
//     id: 4,
//     name: "Onions",
//     price: 35,
//     quantity: "80 kg",
//     rating: 4,
//     image: onion,
//     verified: true,
//     featured: false,
//   },
//   {
//     id: 5,
//     name: "Cabbage",
//     price: 15,
//     quantity: "60 kg",
//     rating: 5,
//     image: cabbage,
//     verified: true,
//     featured: true,
//   },
//   {
//     id: 6,
//     name: "Carrots",
//     price: 30,
//     quantity: "40 kg",
//     rating: 4,
//     image: carrot,
//     verified: false,
//     featured: false,
//   },
// ];

// // Star Rating Component
// const Rating = ({ value }) => {
//   return (
//     <div className="flex">
//       {[...Array(5)].map((_, i) => (
//         <Star
//           key={i}
//           size={16}
//           className={`${
//             i < value ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// const Marketplace = () => {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.name
//       .toLowerCase()
//       .includes(search.toLowerCase());
//     const matchesFilter =
//       filter === "all" ||
//       (filter === "verified" && product.verified) ||
//       (filter === "featured" && product.featured);
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="min-h-screen bg-green-50 p-6">
//       <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
//         🌾 Farmer Marketplace
//       </h1>

//       {/* Header with Search and Filters */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
//         <input
//           type="text"
//           placeholder="🔍 Search produce..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="p-3 border rounded-lg w-full md:w-1/3 focus:ring-2 focus:ring-green-400"
//         />

//         <div className="flex gap-3">
//           <button
//             onClick={() => setFilter("all")}
//             className={`px-4 py-2 rounded-lg ${
//               filter === "all" ? "bg-green-600 text-white" : "bg-white border"
//             }`}
//           >
//             All
//           </button>
//           <button
//             onClick={() => setFilter("verified")}
//             className={`px-4 py-2 rounded-lg ${
//               filter === "verified"
//                 ? "bg-green-600 text-white"
//                 : "bg-white border"
//             }`}
//           >
//             Verified
//           </button>
//           <button
//             onClick={() => setFilter("featured")}
//             className={`px-4 py-2 rounded-lg ${
//               filter === "featured"
//                 ? "bg-green-600 text-white"
//                 : "bg-white border"
//             }`}
//           >
//             Featured
//           </button>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4 space-y-2">
//               <h3 className="text-lg font-bold text-gray-800">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600">Quantity: {product.quantity}</p>
//               <p className="text-green-700 font-bold">
//                 Best Price: ₹{product.price}/kg
//               </p>
//               <Rating value={product.rating} />

//               {/* Action Buttons */}
//               <div className="flex gap-3 mt-3">
//                 <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg">
//                   View
//                 </button>
//                 <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
//                   Buy
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {filteredProducts.length === 0 && (
//         <p className="text-center text-gray-600 mt-10">No products found.</p>
//       )}
//     </div>
//   );
// };

// export default Marketplace;


import { useEffect, useMemo, useState } from "react";
import ProduceCard from "../components/ProduceCard";
import demoProducts from "../data/demoProducts";
import { getProduceList } from "../services/ProduceService";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Make sure you have CartContext

const statusOptions = ["All", "Verified", "Pending", "Failed"];
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest", value: "newest" },
  { label: "Rating", value: "rating" },
];

function useDebounced(value, delay = 300) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}

function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="h-44 w-full animate-pulse bg-gray-200" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-gray-200" />
        <div className="grid grid-cols-2 gap-3">
          <div className="h-10 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-10 animate-pulse rounded-lg bg-gray-200" />
        </div>
        <div className="mt-2 flex justify-end gap-2">
          <div className="h-9 w-20 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-9 w-20 animate-pulse rounded-lg bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default function Marketplace() {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Get addToCart from context

  const [loading, setLoading] = useState(true);
  const [produceList, setProduceList] = useState([]);
  const [error, setError] = useState("");

  const [q, setQ] = useState("");
  const [cropFilter, setCropFilter] = useState("All");
  const [status, setStatus] = useState("Verified");
  const [refreshing, setRefreshing] = useState(false);
  const [location, setLocation] = useState("All");
  const [priceMax, setPriceMax] = useState(100);
  const [sortBy, setSortBy] = useState("featured");
  const [visible, setVisible] = useState(9);

  const dq = useDebounced(q, 300);

  async function fetchData({ background = false } = {}) {
    if (!background) setLoading(true);
    setError("");
    try {
      const data = await getProduceList();
      const normalized = Array.isArray(data) && data.length > 0 ? data : demoProducts;
      setProduceList(normalized);
    } catch (err) {
      console.error("Error fetching produce", err);
      setProduceList(demoProducts);
    } finally {
      if (!background) setLoading(false);
      if (background) setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const crops = useMemo(() => {
    const set = new Set(produceList.map((i) => i.crop));
    return ["All", ...Array.from(set)];
  }, [produceList]);

  const locations = useMemo(() => {
    const set = new Set(produceList.map((i) => i.location));
    return ["All", ...Array.from(set)];
  }, [produceList]);

  const maxPrice = useMemo(() => {
    return Math.max(100, ...produceList.map((i) => Number(i.price) || 0));
  }, [produceList]);

  useEffect(() => {
    setPriceMax(maxPrice);
  }, [maxPrice]);

  const hasPending = useMemo(
    () => produceList.some((i) => (i.quality || i.status) === "Pending"),
    [produceList]
  );

  const filtered = useMemo(() => {
    let res = [...produceList];

    if (dq.trim()) {
      const s = dq.toLowerCase();
      res = res.filter(
        (i) =>
          i.crop?.toLowerCase().includes(s) ||
          i.variety?.toLowerCase().includes(s) ||
          i.location?.toLowerCase().includes(s)
      );
    }
    if (cropFilter !== "All") res = res.filter((i) => i.crop === cropFilter);
    if (status !== "All") res = res.filter((i) => (i.quality || i.status) === status);
    if (location !== "All") res = res.filter((i) => i.location === location);
    res = res.filter((i) => Number(i.price) <= Number(priceMax));

    switch (sortBy) {
      case "price_asc":
        res.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case "price_desc":
        res.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case "newest":
        res.sort((a, b) => new Date(b.harvestDate || 0) - new Date(a.harvestDate || 0));
        break;
      case "rating":
        res.sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0));
        break;
      default:
        break;
    }
    return res;
  }, [produceList, dq, cropFilter, status, location, priceMax, sortBy]);

  const visibleItems = filtered.slice(0, visible);

  const handleView = (item) => {
    console.log("view", item);
  };

  const handleBuy = (item) => {
    // Redirect to Buy page
    navigate("/buy", { state: { item } });
  };

  const handleAddToCart = (item) => {
    addToCart(item, 1); // add quantity 1
    navigate("/cart"); // redirect to Cart page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-emerald-700">
              Marketplace
            </h1>
            <p className="mt-1 text-gray-600">Discover fresh produce from verified farmers.</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/marketplace/list"
              className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white shadow hover:bg-emerald-700"
            >
              + List Your Produce
            </Link>
            <button
              onClick={() => {
                setRefreshing(true);
                fetchData({ background: true });
              }}
              className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
            >
              {refreshing ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>

        {hasPending && (
          <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-800">
            Some listings are pending IoT quality verification and will appear after approval.
          </div>
        )}

        {/* Filters */}
        <div className="mb-6 rounded-2xl border border-gray-100 bg-white/90 p-4 shadow-sm backdrop-blur">
          {/* Search + Filters */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <input
                type="text"
                placeholder="Search by crop, variety, location..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21l-4.3-4.3M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="flex flex-wrap gap-2">
              <select
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none"
                value={cropFilter}
                onChange={(e) => setCropFilter(e.target.value)}
              >
                {crops.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <select
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {statusOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <select
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                {locations.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
              <select
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price slider */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Max price</span>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="h-2 w-48 cursor-pointer appearance-none rounded-lg bg-emerald-100"
              />
              <span className="text-sm font-semibold text-emerald-700">₹ {priceMax}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        {error ? (
          <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6 text-rose-800">
            {error}
          </div>
        ) : loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm">
            <img
              src="https://illustrations.popsy.co/green/organic-food.svg"
              alt="No items"
              className="mb-4 h-40 w-40"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-gray-800">No produce found</h3>
            <p className="mt-1 max-w-md text-sm text-gray-600">
              Try clearing filters or list a new item for buyers to discover.
            </p>
            <Link
              to="/marketplace/list"
              className="mt-4 inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700"
            >
              + List Your Produce
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((item, idx) => (
                <ProduceCard
                  key={item.id || idx}
                  item={item}
                  onView={() => handleView(item)}
                  onBuy={() => handleBuy(item)}
                  onAddToCart={() => handleAddToCart(item)}
                />
              ))}
            </div>

            {visible < filtered.length && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setVisible((v) => v + 9)}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}