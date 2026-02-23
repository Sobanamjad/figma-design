import logo from "../assets/ExlixirVieFinal-031.png";
import navbar from "../assets/1.png";
const Navbar = () => {
  return (
    <div className="flex items-center px-8 py-4">
      <div className="flex-1">
        <img className="h-12 w-auto" src={logo} alt="logo" />
      </div>
      <div className="flex-1 flex justify-center">
        <ul className="flex items-center space-x-8 text-white text-lg leading-none">
          <li>Benefits</li>
          <li>Features</li>
          <li>About</li>
          <li>Science</li>
          <li>Reviews</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-end">
        <img className="h-12 w-auto" src={navbar} alt="navbar" />
      </div>
    </div>
  );
};

export default Navbar;
