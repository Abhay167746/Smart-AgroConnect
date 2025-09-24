
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { listProduce } from "../services/ProduceService";
import { useAuth } from "../context/AuthContext";

const ListProduce = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    crop: "",
    quantity: "",
    price: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.crop || !form.quantity || !form.price || !form.location) {
      toast.error("Please fill all fields");
      return;
    }

    const payload = {
      ...form,
      userId: user?.uid,
      userName: user?.displayName || user?.email || "Anonymous",
    };

    try {
      await listProduce(payload);
      toast.success("Produce listed successfully!");
      navigate("/marketplace");
    } catch (error) {
      console.error("Error listing produce:", error);
      toast.error("Failed to list produce. Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 pt-28 px-4">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
          List Your Produce
        </h2>

        {[
          { name: "crop", label: "Crop Name" },
          { name: "quantity", label: "Quantity (kg)" },
          { name: "price", label: "Price (₹/kg)" },
          { name: "location", label: "Location" },
        ].map(({ name, label }) => (
          <div key={name} className="mb-4">
            <label className="block mb-1 font-medium">{label}</label>
            <input
              type={name === "price" || name === "quantity" ? "number" : "text"}
              name={name}
              value={form[name]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder={`Enter ${label}`}
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded-md transition"
        >
          List Crop
        </button>
      </div>
    </div>
  );
};

export default ListProduce;
