import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className= "bg-amber-50 text-white p-4 flex gap-6">
      <Link to="/" className="hover:underline">Dashboard</Link>
      <Link to="/marketplace" className="hover:underline">Marketplace</Link>
      <Link to="/list-produce" className="hover:underline">List Produce</Link>
      <Link to="/crop-prediction" className="hover:underline">Crop Prediction</Link>
      <Link to="/learning-hub" className="hover:underline">Learning Hub</Link>
      <Link to="/login" className="ml-auto hover:underline">Login</Link>
    </nav>
  );
}

export default Navbar;
